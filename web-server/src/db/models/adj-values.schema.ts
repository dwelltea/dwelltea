import { Schema } from "mongoose";

export const adjValuesSchema = new Schema(
  {
    adj_sqft: { type: Number },
    adj_beds: { type: Number },
    adj_baths: { type: Number },
    adj_age: { type: Number },
    adj_condition: { type: String },
    adj_latest_sale_price: { type: Number },
    total_adj: { type: Number },
  },
  { _id: false }
);
