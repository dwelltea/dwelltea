import { Router, Request, Response } from "express";
import { Property, Valuation } from "../db/models";
import { normalizeAddress, isValidAddress } from "../utils/address";
import type {
  ValuationResponse,
  ApiError,
  ComparableWithProperty,
  CompResultEntry,
  PropertyDoc,
  ValuationDoc,
} from "../types";
import { runPropertyValuation } from "../engines/valuation-engine";
import {
  PropertySyncError,
  syncPropertyByAddress,
  buildMockValuationShell,
} from "../services/property-sync";

const valuation = Router();

function sendError(res: Response, status: number, error: string, code?: string) {
  const body: ApiError = { error, ...(code && { code }) };
  res.status(status).json(body);
}

function hasCachedValuation(valuationDoc: ValuationDoc): boolean {
  return !!(
    valuationDoc.lastEngineRunAt &&
    valuationDoc.compResults &&
    valuationDoc.compResults.length > 0 &&
    (valuationDoc.estimated_value?.final_calculated_estimate ?? 0) > 0
  );
}

function comparablesFromCache(
  compProperties: PropertyDoc[],
  compResults: CompResultEntry[] | undefined
): ComparableWithProperty[] {
  const byAddress = new Map(compResults?.map((entry) => [entry.address, entry]) ?? []);

  return compProperties.map((prop) => {
    const result = byAddress.get(prop.address);
    if (!result) {
      return { ...prop, similarity_score: 0, weight: 0 };
    }

    return {
      ...prop,
      similarity_score: result.similarityScore,
      weight: result.weight,
      adj_values: {
        adj_sqft: result.adj_sqft ?? 0,
        adj_beds: result.adj_beds ?? 0,
        adj_baths: result.adj_baths ?? 0,
        adj_age: result.adj_age ?? 0,
        adj_condition: String(result.adj_condition ?? prop.condition ?? ""),
        adj_latest_sale_price: result.adjustedPrice,
        total_adj: result.total_adj ?? result.adjustedPrice,
      },
    };
  });
}

async function loadCompProperties(property: PropertyDoc): Promise<PropertyDoc[]> {
  const comparableAddresses = property.comparable_props.map((cp) => cp.address);
  if (comparableAddresses.length === 0) {
    return [];
  }

  const comparablePropertyDocs = await Property.find({
    address: { $in: comparableAddresses },
  });

  return comparablePropertyDocs.map((doc) => doc.toObject() as PropertyDoc);
}

async function ensureValuationShell(
  address: string,
  existing: ValuationDoc | null
): Promise<ValuationDoc> {
  if (existing) {
    return existing;
  }

  const now = new Date();
  const shell = buildMockValuationShell(address, now);
  const valuationDoc = await Valuation.findOneAndUpdate(
    { address },
    { $set: { ...shell, updatedAt: now } },
    { upsert: true, new: true }
  );

  if (!valuationDoc) {
    throw new Error("Failed to create valuation shell");
  }

  return valuationDoc.toObject() as ValuationDoc;
}

async function getValuationByAddress(req: Request, res: Response) {
  const rawAddress =
    (req.query.address as string) ?? (req.params.address as string) ?? "";
  const address = normalizeAddress(
    rawAddress ? decodeURIComponent(rawAddress) : ""
  );

  if (!isValidAddress(address)) {
    return sendError(res, 400, "Invalid or missing address", "INVALID_ADDRESS");
  }

  try {
    let propertyDoc = await Property.findOne({ address });
    let valuationDoc = await Valuation.findOne({ address });

    if (!propertyDoc) {
      try {
        const synced = await syncPropertyByAddress(address);
        propertyDoc = await Property.findOne({ address: synced.property.address });
        valuationDoc = await Valuation.findOne({ address: synced.valuation.address });
      } catch (err) {
        if (err instanceof PropertySyncError) {
          const status = err.code === "COMP_POOL_NOT_FOUND" ? 503 : 500;
          return sendError(res, status, err.message, err.code);
        }
        throw err;
      }
    }

    if (!propertyDoc) {
      return sendError(res, 404, "Property not found after sync", "NOT_FOUND");
    }

    const property = propertyDoc.toObject() as PropertyDoc;
    const valuationObj = await ensureValuationShell(
      address,
      valuationDoc ? (valuationDoc.toObject() as ValuationDoc) : null
    );

    const compProperties = await loadCompProperties(property);
    if (property.comparable_props.length > 0 && compProperties.length === 0) {
      return sendError(
        res,
        503,
        "Comparable properties not found. Run npm run seed in web-server.",
        "COMP_POOL_NOT_FOUND"
      );
    }

    let comparables: ComparableWithProperty[] = compProperties.map((prop) => ({
      ...prop,
      similarity_score: 0,
      weight: 0,
    }));

    let valuationPayload: ValuationResponse["valuation"] = { ...valuationObj };

    if (hasCachedValuation(valuationObj)) {
      comparables = comparablesFromCache(compProperties, valuationObj.compResults);
    } else if (property.comparable_props.length > 0 && compProperties.length > 0) {
      const engineOutput = runPropertyValuation({
        property,
        valuation: valuationObj,
        compProperties,
      });

      if (engineOutput) {
        await Valuation.findOneAndUpdate(
          { address },
          {
            $set: {
              ...engineOutput.valuationUpdate,
              updatedAt: new Date(),
            },
          },
          { new: true }
        );

        valuationPayload = {
          ...valuationObj,
          ...engineOutput.valuationUpdate,
        };
        comparables = engineOutput.comparables;
      }
    }

    const response: ValuationResponse = {
      valuation: valuationPayload,
      property,
      comparables,
    };

    res.json(response);
  } catch (err) {
    console.error("GET /api/valuation error:", err);
    return sendError(res, 500, "Internal server error", "INTERNAL_ERROR");
  }
}

valuation.get("/", getValuationByAddress);
valuation.get("/:address", getValuationByAddress);

valuation.post("/", async (req: Request, res: Response) => {
  const { address: rawAddress } = req.body;

  if (!rawAddress || typeof rawAddress !== "string") {
    return sendError(res, 400, "Missing or invalid address", "INVALID_ADDRESS");
  }

  const address = normalizeAddress(rawAddress);

  if (!isValidAddress(address)) {
    return sendError(res, 400, "Invalid address", "INVALID_ADDRESS");
  }

  try {
    let existingProperty = await Property.findOne({ address });

    if (!existingProperty) {
      try {
        await syncPropertyByAddress(address);
        existingProperty = await Property.findOne({ address });
      } catch (err) {
        if (err instanceof PropertySyncError) {
          const status = err.code === "COMP_POOL_NOT_FOUND" ? 503 : 500;
          return sendError(res, status, err.message, err.code);
        }
        throw err;
      }
    }

    if (!existingProperty) {
      return sendError(res, 404, "Property not found after sync", "PROPERTY_NOT_FOUND");
    }

    const existingValuation = await Valuation.findOne({ address });
    const estimated_value = existingValuation?.estimated_value ?? {
      weighted_estimate: 0,
      median_adj_value: 0,
      final_calculated_estimate: 0,
      houski_estimate: 0,
      repliers_estimate: 0,
    };

    const valuationDoc = await Valuation.findOneAndUpdate(
      { address },
      {
        $set: {
          address,
          estimated_value,
          updatedAt: new Date(),
        },
      },
      { new: true, upsert: true }
    );

    res.status(201).json(valuationDoc?.toObject());
  } catch (err) {
    console.error("POST /api/valuation error:", err);
    return sendError(res, 500, "Internal server error", "INTERNAL_ERROR");
  }
});

export default valuation;
