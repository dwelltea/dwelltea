/**
 * Removes pre-seeded 123 Maple St subject Property and Valuation docs.
 * Comp pool (100–500 Maple St) is preserved.
 *
 * Run: npm run clear:123-maple
 */
import "dotenv/config";
import mongoose from "mongoose";
import { Property, Valuation } from "../db/models";
import { MOCK_SUBJECT_ADDRESS } from "../services/property-sync";

async function clear() {
  const uri = process.env.DT_MONGO_URL;
  if (!uri) {
    throw new Error("DT_MONGO_URL is required");
  }
  const dbName = process.env.DT_DB_NAME ?? "dwelltea";

  await mongoose.connect(uri, { dbName });

  const [propertyResult, valuationResult] = await Promise.all([
    Property.deleteOne({ address: MOCK_SUBJECT_ADDRESS }),
    Valuation.deleteOne({ address: MOCK_SUBJECT_ADDRESS }),
  ]);

  console.log(
    `Removed Property: ${propertyResult.deletedCount}, Valuation: ${valuationResult.deletedCount} for "${MOCK_SUBJECT_ADDRESS}"`
  );

  await mongoose.disconnect();
}

clear().catch((err) => {
  console.error(err);
  process.exit(1);
});
