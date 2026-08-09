import mongoose, { Schema } from "mongoose";

export const estimatedValueSchema = new Schema(
  {
    weighted_estimate: { type: Number },
    median_adj_value: { type: Number },
    final_calculated_estimate: { type: Number },
    /** Primary published value from full dwelltea-valuation engine. */
    published_estimate: { type: Number },
    comp_based_estimate: { type: Number },
    fallback_anchor: { type: Number },
    houski_estimate: { type: Number },
    repliers_estimate: { type: Number },
    houski_timestamp: { type: Date },
    repliers_timestamp: { type: Date },
  },
  { _id: false }
);

const trendDataPointSchema = new Schema(
  {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  { _id: false }
);

/** Cached per-comp output from the web-server valuation engine. */
const compResultSchema = new Schema(
  {
    address: { type: String, required: true },
    adjustedPrice: { type: Number, required: true },
    similarityScore: { type: Number, required: true },
    weight: { type: Number, required: true },
    adj_sqft: { type: Number },
    adj_beds: { type: Number },
    adj_baths: { type: Number },
    adj_age: { type: Number },
    adj_condition: { type: Number },
    total_adj: { type: Number },
  },
  { _id: false }
);

/** Selected comp snapshot from full dwelltea-valuation engine. */
const selectedComparableSchema = new Schema(
  {
    address: { type: String, required: true },
    saleDate: { type: Date },
    salePrice: { type: Number },
    adjustedPrice: { type: Number },
    similarityScore: { type: Number },
    weight: { type: Number },
    rank: { type: Number },
    distanceKm: { type: Number },
  },
  { _id: false }
);

const propertyContextSchema = new Schema(
  {
    taxRateUsed: { type: Number },
    annualPropertyTax: { type: Number },
    monthlyPropertyTax: { type: Number },
    propertyTaxSource: { type: String },
    latestSaleDate: { type: Date },
    latestSalePrice: { type: Number },
    yearsSinceLastSale: { type: Number },
    changeSinceLastSale: { type: Number },
    appreciationSinceLastSale: { type: Number },
    averageDomLocal: { type: Number },
    listToSaleRatioLocal: { type: Number },
    areaTrendProxy: { type: Number },
    monthlyRentEstimate: { type: Number },
    grossYield: { type: Number },
    contextGuidance: { type: String },
  },
  { _id: false }
);

const selectedExternalEstimateSchema = new Schema(
  {
    isAvailable: { type: Boolean },
    selectedEstimate: { type: Number },
    selectedSource: { type: String },
    selectedTimestamp: { type: Date },
    freshnessDays: { type: Number },
    confidenceScore: { type: Number },
    confidenceBand: { type: String, enum: ["High", "Good", "Moderate", "Low"] },
    guidance: { type: String },
  },
  { _id: false }
);

const ESTIMATE_SOURCE_FLAGS = [
  "Dwelltea Exact Local Estimate",
  "Dwelltea Hybrid Estimate",
  "Dwelltea Fallback Estimate",
  "External Estimate",
  "No Estimate Available",
] as const;

const DATA_TIERS = ["Exact local", "Hybrid-supporting", "Type profile fallback"] as const;

const EXTERNAL_FALLBACK_POLICIES = [
  "Prefer External fallback",
  "Prefer Dwelltea fallback",
  "Reference only",
] as const;

const EXTERNAL_ESTIMATE_PREFERENCES = [
  "Average",
  "Repliers",
  "Houski",
  "Lower of available",
  "Higher of available",
] as const;

const CONFIDENCE_BANDS = ["High", "Good", "Moderate", "Low"] as const;

const valuationSchema = new Schema(
  {
    address: { type: String, required: true, unique: true },

    /** Inputs for dwelltea-valuation runValuation(). */
    valuationDate: { type: Date },
    analysisWindowDays: { type: Number, default: 90 },
    requestedCompCount: { type: Number, default: 5 },
    minRequiredComps: { type: Number, default: 3 },
    externalFallbackPolicy: {
      type: String,
      enum: EXTERNAL_FALLBACK_POLICIES,
      default: "Prefer External fallback",
    },
    externalEstimatePreference: {
      type: String,
      enum: EXTERNAL_ESTIMATE_PREFERENCES,
      default: "Average",
    },

    estimated_value: { type: estimatedValueSchema, required: true },

    /** Full engine result metadata (dwelltea-valuation ValuationResult). */
    estimateSourceFlag: { type: String, enum: ESTIMATE_SOURCE_FLAGS },
    dataTierUsed: { type: String, enum: DATA_TIERS },
    confidenceScore: { type: Number },
    confidenceBand: { type: String, enum: CONFIDENCE_BANDS },
    rangePercent: { type: Number },
    hybridWeightComps: { type: Number },
    hybridWeightFallback: { type: Number },
    selectedCompCount: { type: Number },
    eligibleCompCount: { type: Number },
    publicationFlag: { type: String },
    aiExplanationSeed: { type: String },
    lastEngineRunAt: { type: Date },

    propertyContext: { type: propertyContextSchema },
    selectedExternalEstimate: { type: selectedExternalEstimateSchema },
    selectedComparables: { type: [selectedComparableSchema], default: [] },
    /** Cached output from the web-server comp engine (GET /api/valuation). */
    compResults: { type: [compResultSchema], default: [] },

    /** UI / legacy fields (confidenceMin/Max align with low/high estimate range). */
    confidenceMin: { type: Number },
    confidenceMax: { type: Number },
    accuracy: { type: String, enum: ["low", "medium", "high"] },
    aiInsight: { type: String },
    trendData: { type: [trendDataPointSchema], default: [] },
    overallSimilarityScore: { type: Number },
    marketTemperature: { type: String },
  },
  { timestamps: true }
);

export const Valuation = mongoose.model("Valuation", valuationSchema);
