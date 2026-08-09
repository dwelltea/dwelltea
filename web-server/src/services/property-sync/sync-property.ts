import { Property, Valuation } from "../../db/models";
import type { PropertyDoc, ValuationDoc } from "../../types";
import { normalizeAddress } from "../../utils/address";
import {
  buildMockSubjectProperty,
  buildMockValuationShell,
  COMP_SPECS,
  SEATTLE_COMP_POOL_ADDRESSES,
} from "./mock-property-data";

export class PropertySyncError extends Error {
  readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.name = "PropertySyncError";
    this.code = code;
  }
}

export async function ensureCompPoolSeeded(): Promise<void> {
  const compCount = await Property.countDocuments({
    address: { $in: [...SEATTLE_COMP_POOL_ADDRESSES] },
  });

  if (compCount < SEATTLE_COMP_POOL_ADDRESSES.length) {
    throw new PropertySyncError(
      "COMP_POOL_NOT_FOUND",
      "Comp pool not seeded. Run npm run seed in web-server."
    );
  }
}

export async function syncPropertyByAddress(address: string): Promise<{
  property: PropertyDoc;
  valuation: ValuationDoc;
}> {
  const normalized = normalizeAddress(address);
  const now = new Date();

  await ensureCompPoolSeeded();

  const propertyPayload = buildMockSubjectProperty(normalized, now);
  const propertyDoc = await Property.findOneAndUpdate(
    { address: normalized },
    propertyPayload,
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  if (!propertyDoc) {
    throw new PropertySyncError("SYNC_FAILED", "Failed to upsert property");
  }

  const valuationShell = buildMockValuationShell(normalized, now);
  const valuationDoc = await Valuation.findOneAndUpdate(
    { address: normalized },
    {
      $set: {
        ...valuationShell,
        updatedAt: now,
      },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  if (!valuationDoc) {
    throw new PropertySyncError("SYNC_FAILED", "Failed to upsert valuation shell");
  }

  return {
    property: propertyDoc.toObject() as PropertyDoc,
    valuation: valuationDoc.toObject() as ValuationDoc,
  };
}

export { COMP_SPECS, SEATTLE_COMP_POOL_ADDRESSES, buildMockCompProperty } from "./mock-property-data";
