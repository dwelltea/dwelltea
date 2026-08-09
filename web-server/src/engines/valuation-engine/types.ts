export type EstimateSourceFlag =
  | "Dwelltea Exact Local Estimate"
  | "Dwelltea Hybrid Estimate"
  | "Dwelltea Fallback Estimate"
  | "External Estimate"
  | "No Estimate Available";

export type ConfidenceBand = "High" | "Good" | "Moderate" | "Low";

export type ExternalFallbackPolicy =
  | "Prefer External fallback"
  | "Prefer Dwelltea fallback"
  | "Reference only";

export type ExternalEstimatePreference =
  | "Average"
  | "Repliers"
  | "Houski"
  | "Lower of available"
  | "Higher of available";

export interface SubjectProperty {
  address?: string;
  city: string;
  province: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  condition: number;
  valuationDate: string;
  analysisWindowDays: number;
  requestedCompCount: number;
  neighborhood?: string;
  schoolDistrict?: string;
  modelArea?: string;
  latitude?: number;
  longitude?: number;
  actualTax?: number | null;
  assessedValue?: number | null;
  rentOverride?: number | null;
  externalFallbackPolicy: ExternalFallbackPolicy;
  externalEstimatePreference: ExternalEstimatePreference;
  subjectSourceProvider?: string;
  subjectSourceRecordId?: string;
  sourceLastRefreshed?: string;
}

export interface MarketRecord {
  city: string;
  province: string;
  saleDate: string;
  propertyType: string;
  address: string;
  neighborhood?: string;
  schoolDistrict?: string;
  modelArea?: string;
  salePrice: number;
  listPrice?: number;
  dom?: number;
  rent?: number;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt: number;
  condition: number;
  pricePerSqft?: number;
  latitude?: number;
  longitude?: number;
  sourceProvider?: string;
  sourceRecordId?: string;
  refreshedAt?: string;
}

export interface SaleHistoryRecord {
  saleDate: string;
  salePrice: number;
  sourceProvider?: string;
  recordId?: string;
  instrumentType?: string;
  notes?: string;
}

export interface ExternalEstimateInputs {
  repliersEstimate?: number | null;
  repliersTimestamp?: string | null;
  houskiEstimate?: number | null;
  houskiTimestamp?: string | null;
  policy: ExternalFallbackPolicy;
  preference: ExternalEstimatePreference;
}

export interface SelectedExternalEstimate {
  isAvailable: boolean;
  selectedEstimate: number;
  selectedSource: string;
  selectedTimestamp?: string;
  freshnessDays: number;
  confidenceScore: number;
  confidenceBand: ConfidenceBand;
  guidance: string;
}

export interface PropertyTypeProfile {
  propertyType: string;
  medianSalePrice: number;
  medianPPSF: number;
  median2Bed: number;
  median3Bed: number;
  median4Bed: number;
  median5Bed: number;
  sqftMarginalityFactor: number;
  bedroomMarginalityFactor: number;
  bathroomRelativeFactor: number;
  ageDepreciationRate: number;
  conditionPremiumRate: number;
  maxDistanceKm: number;
  maxSqftVariance: number;
  maxAdjustmentBurden: number;
  minPropertyTypeMatch: number;
  adjacentTypePenalty: number;
  modelBonusRate: number;
}

export interface RegionCityMultiplier {
  province: string;
  cityOrRegion: string;
  multiplier: number;
  tier: "City" | "Province" | "National";
}

export interface TaxRateRecord {
  province: string;
  cityOrRegion: string;
  annualTaxRate: number;
}

export interface MarketMetrics {
  localCompCount: number;
  allDateCompCount: number;
  cityAllTypeDateCount: number;
  selectedDataTier: "Exact local" | "Hybrid-supporting" | "Type profile fallback";
  selectedMultiplier: number;
  multiplierSourceTier: "City multiplier" | "Province multiplier" | "National default multiplier";
  fallbackUseGuidance: string;
  medianSalePrice: number;
  medianPPSF: number;
  median2Bed: number;
  median3Bed: number;
  median4Bed: number;
  median5Bed: number;
  bedroomGap: number;
}

export interface CoefficientSet {
  sqftCoefficient: number;
  bedroomCoefficient: number;
  bathroomCoefficient: number;
  ageCoefficient: number;
  conditionCoefficient: number;
  sqftTolerance: number;
  bedTolerance: number;
  bathTolerance: number;
  ageTolerance: number;
  conditionTolerance: number;
  similarityExponent: number;
  maxDistanceKm: number;
  maxSqftVariance: number;
  maxAdjustmentBurden: number;
  minPropertyTypeMatch: number;
  adjacentTypePenalty: number;
  modelBonusRate: number;
}

export interface ScoredComparable extends MarketRecord {
  adjustedPrice: number;
  distanceKm: number;
  sqftVariance: number;
  adjustmentBurden: number;
  sqftMatch: number;
  bedMatch: number;
  bathMatch: number;
  ageMatch: number;
  conditionMatch: number;
  propertyTypeMatch: number;
  modelProxyMatch: number;
  distanceScore: number;
  schoolScore: number;
  neighborhoodScore: number;
  structuralSimilarity: number;
  spatialSimilarity: number;
  totalSimilarity: number;
  sqftBandPass: boolean;
  distancePass: boolean;
  typePass: boolean;
  adjustmentPass: boolean;
  datePass: boolean;
  baseEligibility: boolean;
  distancePenalty: number;
  typePenalty: number;
  modelBonus: number;
  adjustmentPenalty: number;
  penaltyMultiplier: number;
  weightedSimilarity: number;
  selected: boolean;
  selectedWeight: number;
  rank?: number;
}

export interface PropertyContext {
  taxRateUsed: number;
  annualPropertyTax: number;
  monthlyPropertyTax: number;
  propertyTaxSource: string;
  latestSaleDate?: string;
  latestSalePrice?: number;
  yearsSinceLastSale?: number;
  changeSinceLastSale?: number;
  appreciationSinceLastSale?: number;
  averageDomLocal: number;
  listToSaleRatioLocal: number;
  areaTrendProxy: number;
  monthlyRentEstimate: number;
  grossYield: number;
  contextGuidance: string;
}

export interface ValuationResult {
  publishedEstimate: number;
  estimateSourceFlag: EstimateSourceFlag;
  estimateClassification: EstimateSourceFlag;
  selectedCompCount: number;
  eligibleCompCount: number;
  requestedCompCount: number;
  dataTierUsed: MarketMetrics["selectedDataTier"];
  confidenceScore: number;
  confidenceBand: ConfidenceBand;
  rangePercent: number;
  lowEstimate: number;
  highEstimate: number;
  compBasedEstimate: number;
  fallbackAnchor: number;
  hybridWeightComps: number;
  hybridWeightFallback: number;
  publicationFlag: string;
  aiExplanationSeed: string;
  propertyContext: PropertyContext;
  selectedComparables: ScoredComparable[];
  selectedExternalEstimate: SelectedExternalEstimate;
}
