import { Schema } from "mongoose";

export const estimatedValueSchema = new Schema(
  {
    weighted_estimate: { type: Number },
    median_adj_value: { type: Number },
    final_calculated_estimate: { type: Number },
    houski_estimate: { type: Number },
    repliers_estimate: { type: Number },
  },
  { _id: false }
);
