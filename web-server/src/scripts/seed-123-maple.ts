/**
 * Seeds the Seattle comp pool (100–500 Maple St) with full mock Property schema fields.
 * Subject property and Valuation for 123 Maple St are created on demand via mock sync.
 *
 * Run: npm run seed
 */
import "dotenv/config";
import mongoose from "mongoose";
import { Property } from "../db/models";
import { buildMockCompProperty, COMP_SPECS } from "../services/property-sync";

async function seed() {
  const uri = process.env.DT_MONGO_URL;
  if (!uri) {
    throw new Error("DT_MONGO_URL is required");
  }
  const dbName = process.env.DT_DB_NAME ?? "dwelltea";

  await mongoose.connect(uri, { dbName });

  const now = new Date();

  for (const spec of COMP_SPECS) {
    const payload = buildMockCompProperty(spec, now);
    await Property.findOneAndUpdate({ address: spec.address }, payload, {
      upsert: true,
      new: true,
    });
  }

  console.log(`Seed complete: ${COMP_SPECS.length} comp properties (100–500 Maple St)`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
