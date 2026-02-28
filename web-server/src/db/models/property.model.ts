import mongoose, { Schema } from "mongoose";
import { adjValuesSchema } from "./adj-values.schema";
import { comparablePropSchema } from "./comparable-prop.schema";

const latestSalePriceSchema = new Schema(
  {
    price: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  { _id: false }
);

const geoLocationSchema = new Schema(
  {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true },
  },
  { _id: false }
);

const propertySchema = new Schema(
  {
    address: { type: String, required: true, unique: true },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    geo_location: { type: geoLocationSchema },
    age: { type: Number },
    latest_sale_price: { type: latestSalePriceSchema },
    condition: { type: String },
    adj_values: { type: adjValuesSchema },
    comparable_props: { type: [comparablePropSchema], default: [] },
    imageUrl: { type: String },
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    squareFeet: { type: Number },
    yearBuilt: { type: Number },
  },
  { timestamps: true }
);

propertySchema.index({ geo_location: "2dsphere" });

export const Property = mongoose.model("Property", propertySchema);
