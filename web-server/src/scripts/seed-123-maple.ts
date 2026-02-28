/**
 * Seed script for mock address "123 Maple St".
 * Run: npx ts-node src/scripts/seed-123-maple.ts
 * Requires: dotenv/config and MongoDB connection env vars.
 */
import "dotenv/config";
import mongoose from "mongoose";
import { Property, Valuation } from "../db/models";

const MOCK_ADDRESS = "123 maple st";
const COMP_ADDRESSES = [
  "100 maple st",
  "200 maple st",
  "300 maple st",
  "400 maple st",
  "500 maple st",
];

const COMP_IMAGE_URLS = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
];

const compData = [
  {
    address: COMP_ADDRESSES[0],
    salePrice: 910000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1750,
    yearBuilt: 2003,
    condition: 4,
    adjSqft: 2000,
    adjBeds: 0,
    adjBaths: 0,
    adjAge: 600,
    adjCondition: 0,
    totalAdj: 2600,
    adjustedPrice: 912600,
    similarityScore: 98.45,
    weight: 0.2219842165,
  },
  {
    address: COMP_ADDRESSES[1],
    salePrice: 940000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1950,
    yearBuilt: 2008,
    condition: 5,
    adjSqft: -6000,
    adjBeds: -6000,
    adjBaths: -5000,
    adjAge: -900,
    adjCondition: -4000,
    totalAdj: -21900,
    adjustedPrice: 918100,
    similarityScore: 77.55,
    weight: 0.1748590755,
  },
  {
    address: COMP_ADDRESSES[2],
    salePrice: 880000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1650,
    yearBuilt: 1999,
    condition: 3,
    adjSqft: 6000,
    adjBeds: 0,
    adjBaths: 0,
    adjAge: 1800,
    adjCondition: 4000,
    totalAdj: 11800,
    adjustedPrice: 891800,
    similarityScore: 90.35,
    weight: 0.2037204059,
  },
  {
    address: COMP_ADDRESSES[3],
    salePrice: 960000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2050,
    yearBuilt: 2010,
    condition: 4,
    adjSqft: -10000,
    adjBeds: -6000,
    adjBaths: -5000,
    adjAge: -1500,
    adjCondition: 0,
    totalAdj: -22500,
    adjustedPrice: 937500,
    similarityScore: 80.25,
    weight: 0.1809470124,
  },
  {
    address: COMP_ADDRESSES[4],
    salePrice: 899000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1700,
    yearBuilt: 2001,
    condition: 4,
    adjSqft: 4000,
    adjBeds: 0,
    adjBaths: 0,
    adjAge: 1200,
    adjCondition: 0,
    totalAdj: 5200,
    adjustedPrice: 904200,
    similarityScore: 96.9,
    weight: 0.2184892897,
  },
];

async function seed() {
  const uri = process.env.DT_MONGO_URL;
  if (!uri) {
    throw new Error("DT_MONGO_URL is required");
  }
  const dbName = process.env.DT_DB_NAME ?? "dwelltea";

  await mongoose.connect(uri, {
    dbName,
  });

  const now = new Date();

  for (let i = 0; i < compData.length; i++) {
    const c = compData[i];
    const imageUrl = COMP_IMAGE_URLS[i] ?? COMP_IMAGE_URLS[0];
    await Property.findOneAndUpdate(
      { address: c.address },
      {
        address: c.address,
        city: "Seattle",
        state: "Washington",
        country: "USA",
        age: new Date().getFullYear() - c.yearBuilt,
        latest_sale_price: { price: c.salePrice, date: now },
        condition: String(c.condition),
        adj_values: {
          adj_sqft: c.adjSqft,
          adj_beds: c.adjBeds,
          adj_baths: c.adjBaths,
          adj_age: c.adjAge,
          adj_condition: c.adjCondition,
          adj_latest_sale_price: c.adjustedPrice,
          total_adj: c.totalAdj,
        },
        comparable_props: [],
        bedrooms: c.bedrooms,
        bathrooms: c.bathrooms,
        squareFeet: c.sqft,
        yearBuilt: c.yearBuilt,
        imageUrl,
      },
      { upsert: true, new: true }
    );
  }

  await Property.findOneAndUpdate(
    { address: MOCK_ADDRESS },
    {
      address: MOCK_ADDRESS,
      city: "Seattle",
      state: "Washington",
      country: "USA",
      age: new Date().getFullYear() - 2005,
      condition: "4",
      adj_values: {},
      comparable_props: compData.map((c) => ({
        address: c.address,
        similarity_score: c.similarityScore,
        weight: c.weight,
      })),
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 1800,
      yearBuilt: 2005,
      imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
    },
    { upsert: true, new: true }
  );

  await Valuation.findOneAndUpdate(
    { address: MOCK_ADDRESS },
    {
      address: MOCK_ADDRESS,
      estimated_value: {
        weighted_estimate: 911994.61,
        median_adj_value: 912600,
        final_calculated_estimate: 912176.23,
        houski_estimate: 0,
        repliers_estimate: 0,
      },
      confidenceMin: 870000,
      confidenceMax: 955000,
      accuracy: "medium",
      aiInsight:
        "The estimated value has remained stable amidst a balanced local market. Comparable sales in the area support this valuation range.",
      trendData: [
        { x: 0, y: 850000 },
        { x: 1, y: 870000 },
        { x: 2, y: 885000 },
        { x: 3, y: 895000 },
        { x: 4, y: 905000 },
        { x: 5, y: 912176 },
      ],
      overallSimilarityScore: 88.7,
      marketTemperature: "hot",
    },
    { upsert: true, new: true }
  );

  console.log("Seed complete for 123 Maple St");
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
