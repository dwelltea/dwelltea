import type { PropertyDoc, ValuationDoc } from "../../types";
import {
  externalEstimateInputsFromValuation,
  marketRecordFromPropertyDoc,
  profileForProperty,
  saleHistoryFromPropertyDoc,
  subjectFromPropertyDoc,
} from "./build-input";
import {
  comparablesFromResult,
  estimatedValueFromResult,
  valuationFieldsFromResult,
} from "./map-result";
import { REGION_CITY_MULTIPLIERS, TAX_RATES } from "./reference-data";
import { runValuation } from "./run-valuation";
import type { ValuationResult } from "./types";

export interface RunPropertyValuationParams {
  property: PropertyDoc;
  valuation: ValuationDoc;
  compProperties: PropertyDoc[];
}

export interface RunPropertyValuationOutput {
  result: ValuationResult;
  estimated_value: ReturnType<typeof estimatedValueFromResult>;
  valuationUpdate: Partial<ValuationDoc>;
  comparables: ReturnType<typeof comparablesFromResult>;
}

export function runPropertyValuation(
  params: RunPropertyValuationParams
): RunPropertyValuationOutput | null {
  const { property, valuation, compProperties } = params;

  const subject = subjectFromPropertyDoc(property, valuation);
  if (!subject) return null;

  const marketRows = compProperties
    .map(marketRecordFromPropertyDoc)
    .filter((row): row is NonNullable<typeof row> => row != null);

  const result = runValuation({
    subject,
    marketRows,
    profile: profileForProperty(property),
    multipliers: REGION_CITY_MULTIPLIERS,
    saleHistory: saleHistoryFromPropertyDoc(property),
    taxRates: TAX_RATES,
    externalEstimateInputs: externalEstimateInputsFromValuation(valuation),
    minRequiredComps: valuation.minRequiredComps ?? 3,
  });

  const estimated_value = estimatedValueFromResult(valuation.estimated_value, result);

  return {
    result,
    estimated_value,
    valuationUpdate: {
      ...valuationFieldsFromResult(result),
      estimated_value,
    },
    comparables: comparablesFromResult(compProperties, result),
  };
}

export { runValuation } from "./run-valuation";
export type {
  ValuationResult,
  SubjectProperty,
  MarketRecord,
  ScoredComparable,
  EstimateSourceFlag,
  ConfidenceBand,
} from "./types";
