import { Router, Request, Response } from "express";
import { Property, Valuation } from "../db/models";
import { normalizeAddress, isValidAddress } from "../utils/address";
import type {
  ValuationResponse,
  ApiError,
  ComparableWithProperty,
  PropertyDoc,
} from "../types";

const valuation = Router();

function sendError(res: Response, status: number, error: string, code?: string) {
  const body: ApiError = { error, ...(code && { code }) };
  res.status(status).json(body);
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
    const [valuationDoc, propertyDoc] = await Promise.all([
      Valuation.findOne({ address }),
      Property.findOne({ address }),
    ]);

    if (!valuationDoc || !propertyDoc) {
      return sendError(res, 404, "Valuation or property not found", "NOT_FOUND");
    }

    const comparableAddresses = propertyDoc.comparable_props.map((cp) => cp.address);
    const comparableProps = propertyDoc.comparable_props;

    const comparablePropertyDocs = await Property.find({
      address: { $in: comparableAddresses },
    });

    const addressToComp = new Map(
      comparableProps.map((cp) => [cp.address, { similarity_score: cp.similarity_score, weight: cp.weight }])
    );

    const comparables: ComparableWithProperty[] = comparablePropertyDocs.map((doc) => {
      const comp = addressToComp.get(doc.address);
      const prop = doc.toObject() as PropertyDoc;
      return {
        ...prop,
        similarity_score: comp?.similarity_score ?? 0,
        weight: comp?.weight ?? 0,
      };
    });

    const response: ValuationResponse = {
      valuation: valuationDoc.toObject() as ValuationResponse["valuation"],
      property: propertyDoc.toObject() as PropertyDoc,
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
    const existingValuation = await Valuation.findOne({ address });
    const existingProperty = await Property.findOne({ address });

    if (!existingProperty) {
      return sendError(
        res,
        404,
        "Property not found. Create property first.",
        "PROPERTY_NOT_FOUND"
      );
    }

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
