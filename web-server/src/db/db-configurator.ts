import { DbParams } from "./db-types";
import { Configuration } from "../utils/configuration";

class DbConfigurator {
  private static instance: DbConfigurator;

  private TIMEOUT_LIMIT = 30000;
  private config = Configuration.getInstance();

  // To ensure this class cannot be instantiated without the getInstance method
  private constructor() {}

  public static getInstance(): DbConfigurator {
    if (!DbConfigurator.instance) {
      DbConfigurator.instance = new DbConfigurator();
    }
    return DbConfigurator.instance;
  }

  public getConfig(dbConfig: any): DbParams {
    const nodeEnv = this.config.getValue('NODE_ENV');
    
    // Set maxPoolSize to 5 for watcher and cron staging environments, 10 for others
    let maxPoolSize = 10;
    if (nodeEnv === 'staging-watch-1' || nodeEnv === 'staging-watch-2' || nodeEnv === 'staging-cronch') {
      maxPoolSize = 8;
    }

    console.log(`[DB Config] Environment: ${nodeEnv}, maxPoolSize: ${maxPoolSize}`);

    const dbName = this.config.getValue(dbConfig.DB_NAME) ?? "dwelltea";

    return {
      url: this.config.getValue(dbConfig.MONGO_URL),
      options: {
        user: this.config.getValue(dbConfig.MONGO_USER),
        pass: this.config.getValue(dbConfig.MONGO_PASS),
        dbName,
        connectTimeoutMS: this.TIMEOUT_LIMIT,
        maxPoolSize,
        minPoolSize: 2,
      },
    };
  }
}
export { DbConfigurator };
