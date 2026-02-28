import mongoose from "mongoose";
import { DbParams } from "./db-types";
import { DbConfigurator } from "./db-configurator";
import { MongoConnectionError } from "./db-error-message";

const MONGO_RETRY_INTERVAL = 1000;
const MONGO_MAX_RETRY = 10;

class DB {
  private static instance: DB;
  private mongoRetriesLeft: number;
  private dbConfig: DbParams;

  //To ensure this class cannot be instantiated without the getInstance method
  private constructor(dbConfig: any) {
    this.dbConfig = DbConfigurator.getInstance().getConfig(dbConfig);
    this.mongoRetriesLeft = MONGO_MAX_RETRY;
  }

  private disconnected = () => {
    console.log("MongoDB disconnected.");
    this.reconnectMongo("MongoDB disconnected.");
  };

  private open = () => {
    this.resetRetryLimit();
    console.log(`MongoDB connected at: ${this.dbConfig.url}`);
  };

  private error = (er: Error) => {
    const { message } = er;
    console.log("MongoDB error.", {
      details: [message],
    });
    if (er.name !== "MongoNetworkError")
      throw new MongoConnectionError(message);
  };

  public static getInstance(dbConfig: any): DB {
    if (!DB.instance) {
      DB.instance = new DB(dbConfig);
    }

    return DB.instance;
  }

  public init = () => {
    console.log(
      `Mongo: connecting to:, ${this.dbConfig.url} with ${this.dbConfig.options.dbName}`
    );

    this.connectMongo();

    mongoose.connection.on("error", this.error);
    mongoose.connection.on("disconnected", this.disconnected);
    mongoose.connection.on("open", () => this.open());
  };

  private connectMongo = () => {
    if (this.dbConfig.url) {
      mongoose.connect(this.dbConfig.url, this.dbConfig.options);
    } else {
      console.log("MongoDB configuration error");
    }
  };

  private resetRetryLimit = () => {
    this.mongoRetriesLeft = MONGO_MAX_RETRY;
    console.log(
      `Reset MongoDB connection recovery. Retries left: ${this.mongoRetriesLeft}`
    );
  };

  private reconnectMongo = (message: string) => {
    if (this.mongoRetriesLeft > 0) {
      this.mongoRetriesLeft -= 1;
      setTimeout(() => {
        console.log(
          `Retrying MongoDB connection. Retries left: ${this.mongoRetriesLeft}`
        );

        this.connectMongo();
      }, MONGO_RETRY_INTERVAL);
    } else {
      throw new MongoConnectionError(message);
    }
  };
}

export { DB };
