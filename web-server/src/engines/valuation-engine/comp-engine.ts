import { CoefficientSet, MarketRecord, ScoredComparable, SubjectProperty } from "./types";
import { haversineKm, median, normalizedMatch } from "./math";
import { getPropertyTypeMatch } from "./property-type-matrix";

export function filterCandidateComps(subject: SubjectProperty, marketRows: MarketRecord[]): MarketRecord[] {
  const start = new Date(subject.valuationDate);
  start.setDate(start.getDate() - subject.analysisWindowDays);
  const startIso = start.toISOString().slice(0, 10);

  return marketRows.filter((r) =>
    r.city === subject.city &&
    r.propertyType === subject.propertyType &&
    r.saleDate >= startIso &&
    r.saleDate <= subject.valuationDate
  );
}

function adjustComp(subject: SubjectProperty, comp: MarketRecord, coeffs: CoefficientSet): number {
  const adjSqft = (subject.sqft - comp.sqft) * coeffs.sqftCoefficient;
  const adjBeds = (subject.bedrooms - comp.bedrooms) * coeffs.bedroomCoefficient;
  const adjBaths = (subject.bathrooms - comp.bathrooms) * coeffs.bathroomCoefficient;
  const adjAge = (subject.yearBuilt - comp.yearBuilt) * coeffs.ageCoefficient;
  const adjCondition = (subject.condition - comp.condition) * coeffs.conditionCoefficient;
  return comp.salePrice + adjSqft + adjBeds + adjBaths + adjAge + adjCondition;
}

function hasCoords(lat?: number, lon?: number): boolean {
  return lat != null && lon != null;
}

function resolveDistanceKm(
  subject: SubjectProperty,
  comp: MarketRecord
): { distanceKm: number; distanceKnown: boolean } {
  if (
    !hasCoords(subject.latitude, subject.longitude) ||
    !hasCoords(comp.latitude, comp.longitude)
  ) {
    // Missing geo should not disqualify comps; same-city filter already applied.
    return { distanceKm: 0, distanceKnown: false };
  }
  return {
    distanceKm: haversineKm(subject.latitude, subject.longitude, comp.latitude, comp.longitude),
    distanceKnown: true,
  };
}

function distanceScore(distanceKm: number, distanceKnown: boolean): number {
  if (!distanceKnown) return 0.5;
  if (distanceKm <= 0.5) return 1.0;
  if (distanceKm <= 1.0) return 0.9;
  if (distanceKm <= 2.0) return 0.75;
  if (distanceKm <= 3.0) return 0.55;
  if (distanceKm <= 5.0) return 0.35;
  return 0.15;
}

function schoolScore(subject: SubjectProperty, comp: MarketRecord): number {
  if (!subject.schoolDistrict || !comp.schoolDistrict) return 0.5;
  return subject.schoolDistrict === comp.schoolDistrict ? 1.0 : 0.3;
}

function neighborhoodScore(subject: SubjectProperty, comp: MarketRecord): number {
  if (!subject.neighborhood || !comp.neighborhood) return 0.5;
  return subject.neighborhood === comp.neighborhood ? 1.0 : 0.45;
}

function modelProxyScore(subject: SubjectProperty, comp: MarketRecord): number {
  const sameNeighborhood = !!subject.neighborhood && !!comp.neighborhood && subject.neighborhood === comp.neighborhood;
  const sqftVariance = Math.abs(subject.sqft - comp.sqft) / Math.max(1, subject.sqft);
  if (subject.modelArea && comp.modelArea && subject.modelArea === comp.modelArea) return 1.0;
  if (sameNeighborhood && sqftVariance <= 0.05) return 1.0;
  if (sameNeighborhood && sqftVariance <= 0.10) return 0.8;
  if (sameNeighborhood) return 0.6;
  return 0.2;
}

export function scoreCandidates(subject: SubjectProperty, candidates: MarketRecord[], coeffs: CoefficientSet): ScoredComparable[] {
  return candidates.map((comp) => {
    const adjustedPrice = adjustComp(subject, comp, coeffs);
    const { distanceKm, distanceKnown } = resolveDistanceKm(subject, comp);
    const sqftVariance = Math.abs(subject.sqft - comp.sqft) / Math.max(1, subject.sqft);
    const adjustmentBurden = Math.abs(adjustedPrice - comp.salePrice) / Math.max(1, comp.salePrice);

    const sqftMatch = normalizedMatch(subject.sqft, comp.sqft, coeffs.sqftTolerance);
    const bedMatch = normalizedMatch(subject.bedrooms, comp.bedrooms, coeffs.bedTolerance);
    const bathMatch = normalizedMatch(subject.bathrooms, comp.bathrooms, coeffs.bathTolerance);
    const ageMatch = normalizedMatch(subject.yearBuilt, comp.yearBuilt, coeffs.ageTolerance);
    const conditionMatch = normalizedMatch(subject.condition, comp.condition, coeffs.conditionTolerance);
    const propertyTypeMatch = getPropertyTypeMatch(subject.propertyType, comp.propertyType);
    const modelProxyMatch = modelProxyScore(subject, comp);

    const spatialDistanceScore = distanceScore(distanceKm, distanceKnown);
    const schoolMatchScore = schoolScore(subject, comp);
    const neighborhoodMatchScore = neighborhoodScore(subject, comp);

    const structuralSimilarity =
      100 * (
        0.25 * sqftMatch +
        0.15 * bedMatch +
        0.15 * bathMatch +
        0.10 * ageMatch +
        0.10 * conditionMatch +
        0.10 * propertyTypeMatch +
        0.15 * modelProxyMatch
      );

    const spatialSimilarity =
      100 * (
        0.50 * spatialDistanceScore +
        0.20 * schoolMatchScore +
        0.30 * neighborhoodMatchScore
      );

    const totalSimilarity = 0.65 * structuralSimilarity + 0.35 * spatialSimilarity;

    const sqftBandPass = sqftVariance <= coeffs.maxSqftVariance;
    const distancePass = !distanceKnown || distanceKm <= coeffs.maxDistanceKm;
    const typePass = propertyTypeMatch >= coeffs.minPropertyTypeMatch;
    const adjustmentPass = adjustmentBurden <= coeffs.maxAdjustmentBurden;
    const datePass = true;
    const baseEligibility = sqftBandPass && distancePass && typePass && adjustmentPass && datePass;

    const distancePenalty = distancePass ? 1.0 : 0.5;
    const typePenalty = propertyTypeMatch === 1 ? 1.0 : coeffs.adjacentTypePenalty;
    const modelBonus = 1 + coeffs.modelBonusRate * modelProxyMatch;
    const adjustmentPenalty = adjustmentPass ? 1.0 : Math.max(0.5, 1 - (adjustmentBurden - coeffs.maxAdjustmentBurden) * 2);
    const penaltyMultiplier = (baseEligibility ? 1 : 0) * distancePenalty * typePenalty * modelBonus * adjustmentPenalty;

    return {
      ...comp,
      adjustedPrice,
      distanceKm,
      sqftVariance,
      adjustmentBurden,
      sqftMatch,
      bedMatch,
      bathMatch,
      ageMatch,
      conditionMatch,
      propertyTypeMatch,
      modelProxyMatch,
      distanceScore: spatialDistanceScore,
      schoolScore: schoolMatchScore,
      neighborhoodScore: neighborhoodMatchScore,
      structuralSimilarity,
      spatialSimilarity,
      totalSimilarity,
      sqftBandPass,
      distancePass,
      typePass,
      adjustmentPass,
      datePass,
      baseEligibility,
      distancePenalty,
      typePenalty,
      modelBonus,
      adjustmentPenalty,
      penaltyMultiplier,
      weightedSimilarity: totalSimilarity * penaltyMultiplier,
      selected: false,
      selectedWeight: 0,
    };
  });
}

export function selectTopComps(scored: ScoredComparable[], requestedCompCount: number, similarityExponent: number): ScoredComparable[] {
  const eligible = scored.filter((c) => c.baseEligibility).sort((a, b) => b.weightedSimilarity - a.weightedSimilarity).slice(0, requestedCompCount);
  const rawWeights = eligible.map((c) => Math.pow(Math.max(c.weightedSimilarity, 0), similarityExponent));
  const total = rawWeights.reduce((a, b) => a + b, 0);

  return scored.map((comp) => {
    const idx = eligible.findIndex((e) => e.address === comp.address && e.saleDate === comp.saleDate);
    if (idx === -1) return { ...comp, selected: false, selectedWeight: 0 };
    return { ...comp, selected: true, selectedWeight: total === 0 ? 0 : rawWeights[idx] / total, rank: idx + 1 };
  });
}

export function calculateCompBasedEstimate(scored: ScoredComparable[]): number {
  const selected = scored.filter((c) => c.selected);
  if (!selected.length) return 0;
  const weightedEstimate = selected.reduce((sum, c) => sum + c.adjustedPrice * c.selectedWeight, 0);
  const selectedMedian = median(selected.map((c) => c.adjustedPrice));
  return 0.7 * weightedEstimate + 0.3 * selectedMedian;
}
