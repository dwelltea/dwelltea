import mongoose, { Schema } from "mongoose";
import { estimatedValueSchema } from "./estimated-value.schema";

const trendDataPointSchema = new Schema(
  {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  { _id: false }
);

const valuationSchema = new Schema(
  {
    address: { type: String, required: true, unique: true },
    estimated_value: { type: estimatedValueSchema, required: true },
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
