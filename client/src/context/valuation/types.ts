export interface AdjValues {
  adj_sqft?: number;
  adj_beds?: number;
  adj_baths?: number;
  adj_age?: number;
  adj_condition?: string;
  adj_latest_sale_price?: number;
  total_adj?: number;
}

export interface ComparableProp {
  address: string;
  similarity_score?: number;
  weight?: number;
}

export interface LatestSalePrice {
  price: number;
  date: string;
}

export interface SaleHistoryEntry {
  saleDate: string;
  salePrice: number;
  sourceProvider?: string;
  recordId?: string;
  instrumentType?: string;
  notes?: string;
}

export interface GeoLocation {
  type: "Point";
  coordinates: [number, number];
}

export interface PropertyDoc {
  address: string;
  city?: string;
  province?: string;
  state?: string;
  country?: string;
  geo_location?: GeoLocation;
  propertyType?: string;
  neighborhood?: string;
  schoolDistrict?: string;
  modelArea?: string;
  age?: number;
  latest_sale_price?: LatestSalePrice;
  sale_history?: SaleHistoryEntry[];
  condition?: string;
  conditionScore?: number;
  adj_values?: AdjValues;
  comparable_props: ComparableProp[];
  imageUrl?: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  yearBuilt?: number;
  assessedValue?: number;
  actualTax?: number;
  rentMonthly?: number;
  listPrice?: number;
  daysOnMarket?: number;
  houskiPropertyId?: string;
  repliersMlsNumber?: string;
  sourceProvider?: string;
  sourceRecordId?: string;
  sourceLastRefreshed?: string;
}

export interface EstimatedValue {
  weighted_estimate?: number;
  median_adj_value?: number;
  final_calculated_estimate?: number;
  published_estimate?: number;
  comp_based_estimate?: number;
  fallback_anchor?: number;
  houski_estimate?: number;
  repliers_estimate?: number;
  houski_timestamp?: string;
  repliers_timestamp?: string;
}

export type EstimateSourceFlag =
  | 'Dwelltea Exact Local Estimate'
  | 'Dwelltea Hybrid Estimate'
  | 'Dwelltea Fallback Estimate'
  | 'External Estimate'
  | 'No Estimate Available';

export type ValuationDataTier = 'Exact local' | 'Hybrid-supporting' | 'Type profile fallback';

export type ExternalFallbackPolicy =
  | 'Prefer External fallback'
  | 'Prefer Dwelltea fallback'
  | 'Reference only';

export type ExternalEstimatePreference =
  | 'Average'
  | 'Repliers'
  | 'Houski'
  | 'Lower of available'
  | 'Higher of available';

export type ConfidenceBand = 'High' | 'Good' | 'Moderate' | 'Low';

export interface CompResultEntry {
  address: string;
  adjustedPrice: number;
  similarityScore: number;
  weight: number;
  adj_sqft?: number;
  adj_beds?: number;
  adj_baths?: number;
  adj_age?: number;
  adj_condition?: number;
  total_adj?: number;
}

export interface SelectedComparableEntry {
  address: string;
  saleDate?: string;
  salePrice?: number;
  adjustedPrice?: number;
  similarityScore?: number;
  weight?: number;
  rank?: number;
  distanceKm?: number;
}

export interface PropertyContextEntry {
  taxRateUsed?: number;
  annualPropertyTax?: number;
  monthlyPropertyTax?: number;
  propertyTaxSource?: string;
  latestSaleDate?: string;
  latestSalePrice?: number;
  yearsSinceLastSale?: number;
  changeSinceLastSale?: number;
  appreciationSinceLastSale?: number;
  averageDomLocal?: number;
  listToSaleRatioLocal?: number;
  areaTrendProxy?: number;
  monthlyRentEstimate?: number;
  grossYield?: number;
  contextGuidance?: string;
}

export interface SelectedExternalEstimateEntry {
  isAvailable?: boolean;
  selectedEstimate?: number;
  selectedSource?: string;
  selectedTimestamp?: string;
  freshnessDays?: number;
  confidenceScore?: number;
  confidenceBand?: ConfidenceBand;
  guidance?: string;
}

export interface TrendDataPoint {
  x: number;
  y: number;
}

export interface ValuationDoc {
  address: string;
  valuationDate?: string;
  analysisWindowDays?: number;
  requestedCompCount?: number;
  minRequiredComps?: number;
  externalFallbackPolicy?: ExternalFallbackPolicy;
  externalEstimatePreference?: ExternalEstimatePreference;
  estimated_value: EstimatedValue;
  estimateSourceFlag?: EstimateSourceFlag;
  dataTierUsed?: ValuationDataTier;
  confidenceScore?: number;
  confidenceBand?: ConfidenceBand;
  rangePercent?: number;
  hybridWeightComps?: number;
  hybridWeightFallback?: number;
  selectedCompCount?: number;
  eligibleCompCount?: number;
  publicationFlag?: string;
  aiExplanationSeed?: string;
  lastEngineRunAt?: string;
  propertyContext?: PropertyContextEntry;
  selectedExternalEstimate?: SelectedExternalEstimateEntry;
  selectedComparables?: SelectedComparableEntry[];
  compResults?: CompResultEntry[];
  confidenceMin?: number;
  confidenceMax?: number;
  accuracy?: 'low' | 'medium' | 'high';
  aiInsight?: string;
  trendData?: TrendDataPoint[];
  overallSimilarityScore?: number;
  marketTemperature?: string;
}

export interface ComparableWithProperty extends PropertyDoc {
  similarity_score: number;
  weight: number;
}

export interface ValuationResponse {
  valuation: ValuationDoc;
  property: PropertyDoc;
  comparables: ComparableWithProperty[];
}
