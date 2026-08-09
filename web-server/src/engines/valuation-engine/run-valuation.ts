import { ExternalEstimateInputs, MarketRecord, PropertyTypeProfile, RegionCityMultiplier, SaleHistoryRecord, SubjectProperty, TaxRateRecord, ValuationResult } from "./types";
import { calculateMarketMetrics } from "./market-metrics";
import { buildCoefficients } from "./coefficient";
import { calculateCompBasedEstimate, filterCandidateComps, scoreCandidates, selectTopComps } from "./comp-engine";
import { selectExternalEstimate } from "./external-estimate";
import { decideEstimateSource } from "./fallback-decision";
import { calculateConfidence } from "./confidence";
import { buildPropertyContext } from "./property-context";
import { buildResultPayload } from "./result-payload";

export function runValuation(params: {
  subject: SubjectProperty;
  marketRows: MarketRecord[];
  profile: PropertyTypeProfile;
  multipliers: RegionCityMultiplier[];
  saleHistory: SaleHistoryRecord[];
  taxRates: TaxRateRecord[];
  externalEstimateInputs: ExternalEstimateInputs;
  minRequiredComps?: number;
}): ValuationResult {
  const { subject, marketRows, profile, multipliers, saleHistory, taxRates, externalEstimateInputs, minRequiredComps = 3 } = params;

  const metrics = calculateMarketMetrics({ subject, marketRows, profile, multipliers, minRequiredComps });
  const coeffs = buildCoefficients(metrics, profile);

  const candidates = filterCandidateComps(subject, marketRows);
  const scored = scoreCandidates(subject, candidates, coeffs);
  const selected = selectTopComps(scored, subject.requestedCompCount, coeffs.similarityExponent);
  const compBasedEstimate = calculateCompBasedEstimate(selected);

  const selectedExternalEstimate = selectExternalEstimate(subject, externalEstimateInputs);

  const decision = decideEstimateSource({
    localCompCount: metrics.localCompCount,
    minRequiredComps,
    compBasedEstimate,
    fallbackAnchor: metrics.medianSalePrice,
    externalPolicy: subject.externalFallbackPolicy,
    selectedExternalEstimate,
  });

  const confidence = calculateConfidence({
    estimateSourceFlag: decision.estimateSourceFlag,
    selectedComparables: selected,
    localCompCount: metrics.localCompCount,
    minRequiredComps,
    fallbackWeight: decision.fallbackWeight,
    selectedExternalEstimate,
  });

  const lowEstimate = decision.publishedEstimate * (1 - confidence.rangePercent);
  const highEstimate = decision.publishedEstimate * (1 + confidence.rangePercent);

  const propertyContext = buildPropertyContext({
    subject,
    publishedEstimate: decision.publishedEstimate,
    estimateSourceFlag: decision.estimateSourceFlag,
    marketMetrics: metrics,
    marketRows,
    saleHistory,
    taxRates,
  });

  return buildResultPayload({
    publishedEstimate: decision.publishedEstimate,
    estimateSourceFlag: decision.estimateSourceFlag,
    selectedCompCount: selected.filter((c) => c.selected).length,
    eligibleCompCount: selected.filter((c) => c.baseEligibility).length,
    requestedCompCount: subject.requestedCompCount,
    dataTierUsed: metrics.selectedDataTier,
    confidenceScore: confidence.confidenceScore,
    confidenceBand: confidence.confidenceBand,
    rangePercent: confidence.rangePercent,
    lowEstimate,
    highEstimate,
    compBasedEstimate,
    fallbackAnchor: metrics.medianSalePrice,
    hybridWeightComps: decision.compWeight,
    hybridWeightFallback: decision.fallbackWeight,
    propertyContext,
    selectedComparables: selected,
    selectedExternalEstimate,
  });
}
