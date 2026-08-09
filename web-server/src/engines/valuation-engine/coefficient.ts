import { CoefficientSet, MarketMetrics, PropertyTypeProfile } from "./types";

export function buildCoefficients(metrics: MarketMetrics, profile: PropertyTypeProfile): CoefficientSet {
  return {
    sqftCoefficient: metrics.medianPPSF * profile.sqftMarginalityFactor,
    bedroomCoefficient: metrics.bedroomGap * profile.bedroomMarginalityFactor,
    bathroomCoefficient: metrics.bedroomGap * profile.bathroomRelativeFactor,
    ageCoefficient: metrics.medianSalePrice * profile.ageDepreciationRate,
    conditionCoefficient: metrics.medianSalePrice * profile.conditionPremiumRate,
    sqftTolerance: 1000,
    bedTolerance: 2,
    bathTolerance: 2,
    ageTolerance: 20,
    conditionTolerance: 4,
    similarityExponent: 1.25,
    maxDistanceKm: profile.maxDistanceKm,
    maxSqftVariance: profile.maxSqftVariance,
    maxAdjustmentBurden: profile.maxAdjustmentBurden,
    minPropertyTypeMatch: profile.minPropertyTypeMatch,
    adjacentTypePenalty: profile.adjacentTypePenalty,
    modelBonusRate: profile.modelBonusRate,
  };
}
