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
  similarity_score: number;
  weight: number;
}

export interface LatestSalePrice {
  price: number;
  date: string;
}

export interface PropertyDoc {
  address: string;
  city?: string;
  state?: string;
  country?: string;
  age?: number;
  latest_sale_price?: LatestSalePrice;
  condition?: string;
  adj_values?: AdjValues;
  comparable_props: ComparableProp[];
  imageUrl?: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  yearBuilt?: number;
}

export interface EstimatedValue {
  weighted_estimate?: number;
  median_adj_value?: number;
  final_calculated_estimate?: number;
  houski_estimate?: number;
  repliers_estimate?: number;
}

export interface TrendDataPoint {
  x: number;
  y: number;
}

export interface ValuationDoc {
  address: string;
  estimated_value: EstimatedValue;
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
