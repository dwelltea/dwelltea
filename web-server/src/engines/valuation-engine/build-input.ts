import type { PropertyDoc, ValuationDoc } from "../../types";
import type {
  ExternalEstimateInputs,
  MarketRecord,
  SaleHistoryRecord,
  SubjectProperty,
} from "./types";
import { getPropertyTypeProfile } from "./reference-data";

function parseCondition(prop: PropertyDoc): number | null {
  const score = prop.conditionScore;
  if (typeof score === "number" && score >= 1 && score <= 5) return score;
  const v = prop.condition;
  if (v === undefined || v === null) return null;
  if (typeof v === "number" && v >= 1 && v <= 5) return v;
  const n = parseInt(String(v), 10);
  return n >= 1 && n <= 5 ? n : null;
}

function toIsoDate(value: Date | string | undefined): string | null {
  if (!value) return null;
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

function provinceFromProperty(prop: PropertyDoc): string {
  return prop.province ?? prop.state ?? "USA";
}

function coordsFromProperty(prop: PropertyDoc): { latitude?: number; longitude?: number } {
  const coords = prop.geo_location?.coordinates;
  if (!coords || coords.length < 2) return {};
  return { longitude: coords[0], latitude: coords[1] };
}

export function subjectFromPropertyDoc(
  property: PropertyDoc,
  valuation: ValuationDoc
): SubjectProperty | null {
  const condition = parseCondition(property);
  if (
    !property.city ||
    property.bedrooms == null ||
    property.bathrooms == null ||
    property.squareFeet == null ||
    property.yearBuilt == null ||
    condition == null
  ) {
    return null;
  }

  const valuationDate =
    toIsoDate(valuation.valuationDate) ?? toIsoDate(new Date()) ?? new Date().toISOString().slice(0, 10);

  const { latitude, longitude } = coordsFromProperty(property);

  return {
    address: property.address,
    city: property.city,
    province: provinceFromProperty(property),
    propertyType: property.propertyType ?? "Detached",
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    sqft: property.squareFeet,
    yearBuilt: property.yearBuilt,
    condition,
    valuationDate,
    analysisWindowDays: valuation.analysisWindowDays ?? 90,
    requestedCompCount: valuation.requestedCompCount ?? 5,
    neighborhood: property.neighborhood,
    schoolDistrict: property.schoolDistrict,
    modelArea: property.modelArea,
    latitude,
    longitude,
    actualTax: property.actualTax ?? null,
    assessedValue: property.assessedValue ?? null,
    rentOverride: property.rentMonthly ?? null,
    externalFallbackPolicy: valuation.externalFallbackPolicy ?? "Prefer External fallback",
    externalEstimatePreference: valuation.externalEstimatePreference ?? "Average",
    subjectSourceProvider: property.sourceProvider,
    subjectSourceRecordId: property.sourceRecordId,
    sourceLastRefreshed: property.sourceLastRefreshed
      ? toIsoDate(property.sourceLastRefreshed) ?? undefined
      : undefined,
  };
}

export function marketRecordFromPropertyDoc(property: PropertyDoc): MarketRecord | null {
  const condition = parseCondition(property);
  const saleDate = toIsoDate(property.latest_sale_price?.date);
  const salePrice = property.latest_sale_price?.price;
  if (
    !property.address ||
    !property.city ||
    saleDate == null ||
    salePrice == null ||
    property.bedrooms == null ||
    property.bathrooms == null ||
    property.squareFeet == null ||
    property.yearBuilt == null ||
    condition == null
  ) {
    return null;
  }

  const { latitude, longitude } = coordsFromProperty(property);

  return {
    city: property.city,
    province: provinceFromProperty(property),
    saleDate,
    propertyType: property.propertyType ?? "Detached",
    address: property.address,
    neighborhood: property.neighborhood,
    schoolDistrict: property.schoolDistrict,
    modelArea: property.modelArea,
    salePrice,
    listPrice: property.listPrice,
    dom: property.daysOnMarket,
    rent: property.rentMonthly,
    sqft: property.squareFeet,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    yearBuilt: property.yearBuilt,
    condition,
    pricePerSqft: property.squareFeet > 0 ? salePrice / property.squareFeet : undefined,
    latitude,
    longitude,
    sourceProvider: property.sourceProvider,
    sourceRecordId: property.sourceRecordId,
    refreshedAt: property.sourceLastRefreshed
      ? toIsoDate(property.sourceLastRefreshed) ?? undefined
      : undefined,
  };
}

export function saleHistoryFromPropertyDoc(property: PropertyDoc): SaleHistoryRecord[] {
  return (property.sale_history ?? []).map((entry) => ({
    saleDate: toIsoDate(entry.saleDate) ?? "",
    salePrice: entry.salePrice,
    sourceProvider: entry.sourceProvider,
    recordId: entry.recordId,
    instrumentType: entry.instrumentType,
    notes: entry.notes,
  })).filter((entry) => entry.saleDate && entry.salePrice > 0);
}

export function externalEstimateInputsFromValuation(
  valuation: ValuationDoc
): ExternalEstimateInputs {
  const ev = valuation.estimated_value ?? {};
  return {
    repliersEstimate: ev.repliers_estimate ?? null,
    repliersTimestamp: ev.repliers_timestamp
      ? toIsoDate(ev.repliers_timestamp)
      : null,
    houskiEstimate: ev.houski_estimate ?? null,
    houskiTimestamp: ev.houski_timestamp ? toIsoDate(ev.houski_timestamp) : null,
    policy: valuation.externalFallbackPolicy ?? "Prefer External fallback",
    preference: valuation.externalEstimatePreference ?? "Average",
  };
}

export function profileForProperty(property: PropertyDoc) {
  return getPropertyTypeProfile(property.propertyType ?? "Detached");
}
