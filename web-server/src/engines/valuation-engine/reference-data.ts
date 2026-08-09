import type {
  PropertyTypeProfile,
  RegionCityMultiplier,
  TaxRateRecord,
} from "./types";

const DEFAULT_DETACHED_PROFILE: PropertyTypeProfile = {
  propertyType: "Detached",
  medianSalePrice: 900_000,
  medianPPSF: 520,
  median2Bed: 780_000,
  median3Bed: 900_000,
  median4Bed: 980_000,
  median5Bed: 1_080_000,
  sqftMarginalityFactor: 0.08,
  bedroomMarginalityFactor: 0.08,
  bathroomRelativeFactor: 0.06,
  ageDepreciationRate: 0.0004,
  conditionPremiumRate: 0.005,
  maxDistanceKm: 5,
  maxSqftVariance: 0.3,
  maxAdjustmentBurden: 0.2,
  minPropertyTypeMatch: 0.7,
  adjacentTypePenalty: 0.5,
  modelBonusRate: 0.1,
};

export const PROPERTY_TYPE_PROFILES: Record<string, PropertyTypeProfile> = {
  Detached: DEFAULT_DETACHED_PROFILE,
};

export const REGION_CITY_MULTIPLIERS: RegionCityMultiplier[] = [
  { province: "Washington", cityOrRegion: "Seattle", multiplier: 1.0, tier: "City" },
  { province: "Washington", cityOrRegion: "All Cities / Province Default", multiplier: 1.0, tier: "Province" },
  { province: "Ontario", cityOrRegion: "Toronto", multiplier: 1.22, tier: "City" },
  { province: "Ontario", cityOrRegion: "All Cities / Province Default", multiplier: 1.0, tier: "Province" },
  { province: "Canada", cityOrRegion: "National Default", multiplier: 1.0, tier: "National" },
  { province: "USA", cityOrRegion: "National Default", multiplier: 1.0, tier: "National" },
];

export const TAX_RATES: TaxRateRecord[] = [
  { province: "Washington", cityOrRegion: "Seattle", annualTaxRate: 0.0095 },
  { province: "Washington", cityOrRegion: "All Cities / Province Default", annualTaxRate: 0.0095 },
  { province: "Ontario", cityOrRegion: "Toronto", annualTaxRate: 0.0095 },
  { province: "Ontario", cityOrRegion: "All Cities / Province Default", annualTaxRate: 0.0095 },
  { province: "Canada", cityOrRegion: "National Default", annualTaxRate: 0.009 },
  { province: "USA", cityOrRegion: "National Default", annualTaxRate: 0.009 },
];

export function getPropertyTypeProfile(propertyType: string): PropertyTypeProfile {
  return PROPERTY_TYPE_PROFILES[propertyType] ?? {
    ...DEFAULT_DETACHED_PROFILE,
    propertyType,
  };
}
