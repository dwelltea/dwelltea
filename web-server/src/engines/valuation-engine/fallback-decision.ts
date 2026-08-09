import { EstimateSourceFlag, SelectedExternalEstimate } from "./types";

export interface FallbackDecisionInput {
  localCompCount: number;
  minRequiredComps: number;
  compBasedEstimate: number;
  fallbackAnchor: number;
  externalPolicy: string;
  selectedExternalEstimate: SelectedExternalEstimate;
}

export interface FallbackDecisionOutput {
  estimateSourceFlag: EstimateSourceFlag;
  publishedEstimate: number;
  compWeight: number;
  fallbackWeight: number;
}

export function decideEstimateSource(input: FallbackDecisionInput): FallbackDecisionOutput {
  const { localCompCount, minRequiredComps, compBasedEstimate, fallbackAnchor, externalPolicy, selectedExternalEstimate } = input;

  if (localCompCount >= minRequiredComps && compBasedEstimate > 0) {
    return { estimateSourceFlag: "Dwelltea Exact Local Estimate", publishedEstimate: compBasedEstimate, compWeight: 1, fallbackWeight: 0 };
  }

  if (localCompCount >= minRequiredComps && compBasedEstimate <= 0 && fallbackAnchor > 0) {
    return { estimateSourceFlag: "Dwelltea Fallback Estimate", publishedEstimate: fallbackAnchor, compWeight: 0, fallbackWeight: 1 };
  }

  if (localCompCount > 0) {
    const compWeight = Math.min(1, localCompCount / Math.max(1, minRequiredComps));
    const fallbackWeight = 1 - compWeight;
    return {
      estimateSourceFlag: "Dwelltea Hybrid Estimate",
      publishedEstimate: compBasedEstimate * compWeight + fallbackAnchor * fallbackWeight,
      compWeight,
      fallbackWeight,
    };
  }

  if (externalPolicy === "Prefer External fallback" && selectedExternalEstimate.isAvailable) {
    return { estimateSourceFlag: "External Estimate", publishedEstimate: selectedExternalEstimate.selectedEstimate, compWeight: 0, fallbackWeight: 1 };
  }

  if (fallbackAnchor > 0) {
    return { estimateSourceFlag: "Dwelltea Fallback Estimate", publishedEstimate: fallbackAnchor, compWeight: 0, fallbackWeight: 1 };
  }

  if (selectedExternalEstimate.isAvailable) {
    return { estimateSourceFlag: "External Estimate", publishedEstimate: selectedExternalEstimate.selectedEstimate, compWeight: 0, fallbackWeight: 1 };
  }

  return { estimateSourceFlag: "No Estimate Available", publishedEstimate: 0, compWeight: 0, fallbackWeight: 0 };
}
