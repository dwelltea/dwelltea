import { ConfidenceBand, EstimateSourceFlag, ScoredComparable, SelectedExternalEstimate } from "./types";
import { average, clamp } from "./math";

export function confidenceBand(score: number): ConfidenceBand {
  if (score >= 85) return "High";
  if (score >= 70) return "Good";
  if (score >= 55) return "Moderate";
  return "Low";
}

export function rangePercentFromBand(band: ConfidenceBand): number {
  switch (band) {
    case "High": return 0.03;
    case "Good": return 0.05;
    case "Moderate": return 0.08;
    default: return 0.12;
  }
}

export function calculateConfidence(params: {
  estimateSourceFlag: EstimateSourceFlag;
  selectedComparables: ScoredComparable[];
  localCompCount: number;
  minRequiredComps: number;
  fallbackWeight: number;
  selectedExternalEstimate: SelectedExternalEstimate;
}) {
  const { estimateSourceFlag, selectedComparables, localCompCount, minRequiredComps, fallbackWeight, selectedExternalEstimate } = params;

  if (estimateSourceFlag === "External Estimate") {
    const score = selectedExternalEstimate.confidenceScore;
    const band = confidenceBand(score);
    return { confidenceScore: score, confidenceBand: band, rangePercent: rangePercentFromBand(band) };
  }

  if (estimateSourceFlag === "No Estimate Available") {
    return { confidenceScore: 0, confidenceBand: "Low" as const, rangePercent: 0.12 };
  }

  const chosen = selectedComparables.filter((c) => c.selected);
  const avgSimilarity = average(chosen.map((c) => c.totalSimilarity));
  const avgBurden = average(chosen.map((c) => c.adjustmentBurden));
  const avgDistance = average(chosen.map((c) => c.distanceKm));

  const baseScore =
    estimateSourceFlag === "Dwelltea Exact Local Estimate" ? 60 :
    estimateSourceFlag === "Dwelltea Hybrid Estimate" ? 45 :
    30;

  const compContribution = Math.min(30, (localCompCount / Math.max(1, minRequiredComps)) * 30);
  const similarityScore = clamp(avgSimilarity / 100, 0, 1) * 10;
  const burdenPenalty = clamp(avgBurden / 0.25, 0, 1) * 7;
  const distancePenalty = clamp(avgDistance / 10, 0, 1) * 3;
  const fallbackBonus = (1 - fallbackWeight) * 10;

  const score = Math.round(clamp(baseScore + compContribution + similarityScore + fallbackBonus - burdenPenalty - distancePenalty, 20, 95));
  const band = confidenceBand(score);
  return { confidenceScore: score, confidenceBand: band, rangePercent: rangePercentFromBand(band) };
}
