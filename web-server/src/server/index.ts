import "dotenv/config";
import { app } from "./app";
import { Configuration } from "../utils/configuration";
import { DB } from "../db/db-controller";
import { dbConfig } from "../types";

const PORT = 8080;

Configuration.getInstance().assertValidValues();
DB.getInstance(dbConfig).init();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
