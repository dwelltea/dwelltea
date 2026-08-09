import { ConfidenceBand, EstimateSourceFlag, PropertyContext, ScoredComparable, SelectedExternalEstimate, ValuationResult } from "./types";

export function buildAiExplanationSeed(params: {
  estimateSourceFlag: EstimateSourceFlag;
  confidenceBand: ConfidenceBand;
  confidenceScore: number;
  selectedCompCount: number;
  dataTierUsed: string;
}): string {
  const { estimateSourceFlag, confidenceBand, confidenceScore, selectedCompCount, dataTierUsed } = params;
  if (estimateSourceFlag === "Dwelltea Exact Local Estimate") {
    return `This estimate is driven primarily by sufficient local comparable sales. Confidence is ${confidenceBand} (${confidenceScore}) based on ${selectedCompCount} selected comps and the data tier ${dataTierUsed}.`;
  }
  if (estimateSourceFlag === "Dwelltea Hybrid Estimate") {
    return `This estimate blends comparable-sale evidence with a fallback market anchor because local comp count is below the preferred threshold. Confidence is ${confidenceBand} (${confidenceScore}).`;
  }
  if (estimateSourceFlag === "External Estimate") {
    return "This result is being surfaced as an external estimate because Dwelltea did not have enough local evidence to publish a strong internal estimate under the selected policy.";
  }
  if (estimateSourceFlag === "Dwelltea Fallback Estimate") {
    return "This estimate is driven mainly by fallback market anchors because there are not enough local comparable sales to support a standard Dwelltea estimate.";
  }
  return "No estimate is currently available.";
}

export function buildPublicationFlag(params: {
  estimateSourceFlag: EstimateSourceFlag;
  selectedCompCount: number;
  confidenceScore: number;
  dataTierUsed: string;
}): string {
  const { estimateSourceFlag, selectedCompCount, confidenceScore, dataTierUsed } = params;
  if (estimateSourceFlag === "External Estimate") return "External estimate disclosure required";
  if (selectedCompCount >= 3 && confidenceScore >= 70 && dataTierUsed !== "Type profile fallback") return "Ready with disclosure";
  if (selectedCompCount >= 1 && confidenceScore >= 55) return "Use with caution";
  return "Appraisal review recommended";
}

export function buildResultPayload(params: {
  publishedEstimate: number;
  estimateSourceFlag: EstimateSourceFlag;
  selectedCompCount: number;
  eligibleCompCount: number;
  requestedCompCount: number;
  dataTierUsed: string;
  confidenceScore: number;
  confidenceBand: ConfidenceBand;
  rangePercent: number;
  lowEstimate: number;
  highEstimate: number;
  compBasedEstimate: number;
  fallbackAnchor: number;
  hybridWeightComps: number;
  hybridWeightFallback: number;
  propertyContext: PropertyContext;
  selectedComparables: ScoredComparable[];
  selectedExternalEstimate: SelectedExternalEstimate;
}): ValuationResult {
  const publicationFlag = buildPublicationFlag({
    estimateSourceFlag: params.estimateSourceFlag,
    selectedCompCount: params.selectedCompCount,
    confidenceScore: params.confidenceScore,
    dataTierUsed: params.dataTierUsed,
  });

  const aiExplanationSeed = buildAiExplanationSeed({
    estimateSourceFlag: params.estimateSourceFlag,
    confidenceBand: params.confidenceBand,
    confidenceScore: params.confidenceScore,
    selectedCompCount: params.selectedCompCount,
    dataTierUsed: params.dataTierUsed,
  });

  return {
    publishedEstimate: params.publishedEstimate,
    estimateSourceFlag: params.estimateSourceFlag,
    estimateClassification: params.estimateSourceFlag,
    selectedCompCount: params.selectedCompCount,
    eligibleCompCount: params.eligibleCompCount,
    requestedCompCount: params.requestedCompCount,
    dataTierUsed: params.dataTierUsed as ValuationResult["dataTierUsed"],
    confidenceScore: params.confidenceScore,
    confidenceBand: params.confidenceBand,
    rangePercent: params.rangePercent,
    lowEstimate: params.lowEstimate,
    highEstimate: params.highEstimate,
    compBasedEstimate: params.compBasedEstimate,
    fallbackAnchor: params.fallbackAnchor,
    hybridWeightComps: params.hybridWeightComps,
    hybridWeightFallback: params.hybridWeightFallback,
    publicationFlag,
    aiExplanationSeed,
    propertyContext: params.propertyContext,
    selectedComparables: params.selectedComparables.filter((c) => c.selected),
    selectedExternalEstimate: params.selectedExternalEstimate,
  };
}
