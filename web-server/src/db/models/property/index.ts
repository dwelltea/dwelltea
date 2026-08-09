import mongoose, { Schema } from "mongoose";

export const adjValuesSchema = new Schema(
  {
    adj_sqft: { type: Number }, // not from Repliers or Houski — Dwelltea comp-engine output
    adj_beds: { type: Number }, // not from Repliers or Houski — Dwelltea comp-engine output
    adj_baths: { type: Number }, // not from Repliers or Houski — Dwelltea comp-engine output
    adj_age: { type: Number }, // not from Repliers or Houski — Dwelltea comp-engine output
    adj_condition: { type: String }, // not from Repliers or Houski — Dwelltea comp-engine output
    adj_latest_sale_price: { type: Number }, // not from Repliers or Houski — Dwelltea comp-engine output
    total_adj: { type: Number }, // not from Repliers or Houski — Dwelltea comp-engine output
  },
  { _id: false }
);

export const comparablePropSchema = new Schema(
  {
    address: { type: String, required: true },
    similarity_score: { type: Number }, // not from Repliers or Houski — Dwelltea comp-engine output
    weight: { type: Number }, // not from Repliers or Houski — Dwelltea comp-engine output
  },
  { _id: false }
);

/** Past sale / transfer for subject context (maps to dwelltea-valuation SaleHistoryRecord). */
export const saleHistoryEntrySchema = new Schema(
  {
    saleDate: { type: Date, required: true },
    salePrice: { type: Number, required: true },
    sourceProvider: { type: String }, // not from Repliers or Houski — set at ingest from which API was used
    recordId: { type: String },
    instrumentType: { type: String }, // not from Repliers or Houski
    notes: { type: String }, // not from Repliers or Houski
  },
  { _id: false }
);

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
    /** Province / state code for market filters (e.g. ON, BC, WA). */
    province: { type: String },
    state: { type: String },
    country: { type: String },
    geo_location: { type: geoLocationSchema },
    /** Dwelltea-valuation property type (e.g. Detached, Condo). */
    propertyType: { type: String },
    neighborhood: { type: String },
    schoolDistrict: { type: String }, // not from Repliers or Houski — no school-board name; Repliers Places has nearby schools only
    modelArea: { type: String }, // not from Repliers or Houski
    age: { type: Number }, // not from Repliers or Houski — derive from yearBuilt
    latest_sale_price: { type: latestSalePriceSchema },
    sale_history: { type: [saleHistoryEntrySchema], default: [] },
    condition: { type: String }, // not from Repliers or Houski — legacy display; Repliers overallQuality is separate
    /** Numeric condition 1–5 for valuation engine (Repliers overallQuality on POST /estimates only). */
    conditionScore: { type: Number, min: 1, max: 5 },
    adj_values: { type: adjValuesSchema }, // not from Repliers or Houski — Dwelltea comp-engine output
    comparable_props: { type: [comparablePropSchema], default: [] }, // similarity_score/weight not from Repliers or Houski
    imageUrl: { type: String },
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    squareFeet: { type: Number },
    yearBuilt: { type: Number },
    /** Context: assessed value, annual tax, monthly rent. */
    assessedValue: { type: Number },
    actualTax: { type: Number },
    rentMonthly: { type: Number },
    /** Comp / listing context when this property is a market row. */
    listPrice: { type: Number },
    daysOnMarket: { type: Number },
    /** Upstream provider identifiers. */
    houskiPropertyId: { type: String },
    repliersMlsNumber: { type: String },
    sourceProvider: { type: String }, // not from Repliers or Houski — set at ingest from which API was used
    sourceRecordId: { type: String }, // not from Repliers or Houski — set at ingest (maps from provider id fields)
    sourceLastRefreshed: { type: Date }, // not from Repliers or Houski — set at ingest when record was synced
  },
  { timestamps: true }
);

propertySchema.index({ city: 1, propertyType: 1 });
propertySchema.index({ houskiPropertyId: 1 }, { sparse: true });
propertySchema.index({ repliersMlsNumber: 1 }, { sparse: true });
propertySchema.index({ geo_location: "2dsphere" });

export const Property = mongoose.model("Property", propertySchema);
