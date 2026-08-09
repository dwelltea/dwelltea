/**
 * Clears estimated_value for "123 Maple St" so the valuation engine
 * will recompute on next GET /api/valuation. Use to test front-to-back flow.
 *
 * Run from web-server: npx ts-node src/scripts/clear-valuation-123-maple.ts
 * Requires: DT_MONGO_URL (and optionally DT_DB_NAME) in web-server/.env
 */
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

import mongoose from "mongoose";
import { Valuation } from "../db/models";

const MOCK_ADDRESS = "123 maple st";

async function clear() {
  const uri = process.env.DT_MONGO_URL;
  if (!uri) {
    throw new Error(
      "DT_MONGO_URL is required. Set it in web-server/.env (see .env.example)."
    );
  }
  const dbName = process.env.DT_DB_NAME ?? "dwelltea";

  await mongoose.connect(uri, { dbName });

  const result = await Valuation.findOneAndUpdate(
    { address: MOCK_ADDRESS },
    { $set: { estimated_value: {}, updatedAt: new Date() } },
    { new: true }
  );

  if (!result) {
    console.warn(`No Valuation found for address "${MOCK_ADDRESS}".`);
  } else {
    console.log(`Cleared estimated_value for "${MOCK_ADDRESS}".`);
  }

  await mongoose.disconnect();
}

clear().catch((err) => {
  console.error(err);
  process.exit(1);
});
