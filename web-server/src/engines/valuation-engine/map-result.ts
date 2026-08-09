import type {
  ComparableWithProperty,
  CompResultEntry,
  EstimatedValue,
  PropertyDoc,
  SelectedComparableEntry,
  ValuationDoc,
} from "../../types";
import type { ScoredComparable, ValuationResult } from "./types";
import { median } from "./math";

/** Similarity scores are always whole numbers in API and persisted valuation data. */
export function roundSimilarityScore(score: number): number {
  return Math.round(score);
}

function confidenceBandToAccuracy(
  band: ValuationResult["confidenceBand"]
): ValuationDoc["accuracy"] {
  switch (band) {
    case "High":
    case "Good":
      return "high";
    case "Moderate":
      return "medium";
    default:
      return "low";
  }
}

function compAdjustments(comp: ScoredComparable) {
  return {
    adj_sqft: 0,
    adj_beds: 0,
    adj_baths: 0,
    adj_age: 0,
    adj_condition: String(comp.condition),
    adj_latest_sale_price: comp.adjustedPrice,
    total_adj: comp.adjustedPrice - comp.salePrice,
  };
}

export function estimatedValueFromResult(
  existing: EstimatedValue | undefined,
  result: ValuationResult
): EstimatedValue {
  const selectedAdjusted = result.selectedComparables.map((c) => c.adjustedPrice);
  const weightedEstimate = result.selectedComparables.reduce(
    (sum, c) => sum + c.adjustedPrice * c.selectedWeight,
    0
  );

  return {
    ...existing,
    published_estimate: result.publishedEstimate,
    comp_based_estimate: result.compBasedEstimate,
    fallback_anchor: result.fallbackAnchor,
    weighted_estimate: weightedEstimate,
    median_adj_value: median(selectedAdjusted),
    final_calculated_estimate: result.publishedEstimate,
    houski_estimate: existing?.houski_estimate,
    repliers_estimate: existing?.repliers_estimate,
    houski_timestamp: existing?.houski_timestamp,
    repliers_timestamp: existing?.repliers_timestamp,
  };
}

export function valuationFieldsFromResult(result: ValuationResult): Partial<ValuationDoc> {
  const ctx = result.propertyContext;
  return {
    estimateSourceFlag: result.estimateSourceFlag,
    dataTierUsed: result.dataTierUsed,
    confidenceScore: result.confidenceScore,
    confidenceBand: result.confidenceBand,
    rangePercent: result.rangePercent,
    hybridWeightComps: result.hybridWeightComps,
    hybridWeightFallback: result.hybridWeightFallback,
    selectedCompCount: result.selectedCompCount,
    eligibleCompCount: result.eligibleCompCount,
    publicationFlag: result.publicationFlag,
    aiExplanationSeed: result.aiExplanationSeed,
    confidenceMin: result.lowEstimate,
    confidenceMax: result.highEstimate,
    accuracy: confidenceBandToAccuracy(result.confidenceBand),
    aiInsight: result.aiExplanationSeed,
    overallSimilarityScore:
      result.selectedComparables.length > 0
        ? roundSimilarityScore(
            result.selectedComparables.reduce((s, c) => s + c.totalSimilarity, 0) /
              result.selectedComparables.length
          )
        : undefined,
    propertyContext: {
      taxRateUsed: ctx.taxRateUsed,
      annualPropertyTax: ctx.annualPropertyTax,
      monthlyPropertyTax: ctx.monthlyPropertyTax,
      propertyTaxSource: ctx.propertyTaxSource,
      latestSaleDate: ctx.latestSaleDate ? new Date(ctx.latestSaleDate) : undefined,
      latestSalePrice: ctx.latestSalePrice,
      yearsSinceLastSale: ctx.yearsSinceLastSale,
      changeSinceLastSale: ctx.changeSinceLastSale,
      appreciationSinceLastSale: ctx.appreciationSinceLastSale,
      averageDomLocal: ctx.averageDomLocal,
      listToSaleRatioLocal: ctx.listToSaleRatioLocal,
      areaTrendProxy: ctx.areaTrendProxy,
      monthlyRentEstimate: ctx.monthlyRentEstimate,
      grossYield: ctx.grossYield,
      contextGuidance: ctx.contextGuidance,
    },
    selectedExternalEstimate: {
      isAvailable: result.selectedExternalEstimate.isAvailable,
      selectedEstimate: result.selectedExternalEstimate.selectedEstimate,
      selectedSource: result.selectedExternalEstimate.selectedSource,
      selectedTimestamp: result.selectedExternalEstimate.selectedTimestamp
        ? new Date(result.selectedExternalEstimate.selectedTimestamp)
        : undefined,
      freshnessDays: result.selectedExternalEstimate.freshnessDays,
      confidenceScore: result.selectedExternalEstimate.confidenceScore,
      confidenceBand: result.selectedExternalEstimate.confidenceBand,
      guidance: result.selectedExternalEstimate.guidance,
    },
    selectedComparables: result.selectedComparables.map(
      (c): SelectedComparableEntry => ({
        address: c.address,
        saleDate: new Date(c.saleDate),
        salePrice: c.salePrice,
        adjustedPrice: c.adjustedPrice,
        similarityScore: roundSimilarityScore(c.totalSimilarity),
        weight: c.selectedWeight,
        rank: c.rank,
        distanceKm: c.distanceKm,
      })
    ),
    compResults: result.selectedComparables.map(
      (c): CompResultEntry => ({
        address: c.address,
        adjustedPrice: c.adjustedPrice,
        similarityScore: roundSimilarityScore(c.totalSimilarity),
        weight: c.selectedWeight,
        total_adj: c.adjustedPrice - c.salePrice,
      })
    ),
    lastEngineRunAt: new Date(),
  };
}

export function comparablesFromResult(
  compProperties: PropertyDoc[],
  result: ValuationResult
): ComparableWithProperty[] {
  const byAddress = new Map(result.selectedComparables.map((c) => [c.address, c]));

  return compProperties.map((prop) => {
    const scored = byAddress.get(prop.address);
    if (!scored) {
      return {
        ...prop,
        similarity_score: 0,
        weight: 0,
      };
    }

    return {
      ...prop,
      similarity_score: roundSimilarityScore(scored.totalSimilarity),
      weight: scored.selectedWeight,
      adj_values: compAdjustments(scored),
    };
  });
}
