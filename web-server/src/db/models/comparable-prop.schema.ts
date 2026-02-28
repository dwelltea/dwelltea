import { Schema } from "mongoose";

export const comparablePropSchema = new Schema(
  {
    address: { type: String, required: true },
    similarity_score: { type: Number, required: true },
    weight: { type: Number, required: true },
  },
  { _id: false }
);
