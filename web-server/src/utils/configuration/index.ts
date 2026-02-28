import joi from "joi";
import { validationSchema } from "./validation-schema";

type EnvironmentVariables = Partial<Record<keyof typeof validationSchema, any>>;

class Configuration {
  private static instance: Configuration;

  private readonly sanitizedEnvironmentVariables: EnvironmentVariables;
  private readonly error?: joi.ValidationError;

  private constructor() {
    const { value: envVars, error } = joi
      .object()
      .keys(validationSchema)
      .unknown()
      .prefs({ errors: { label: "key", stack: false } })
      .validate(process.env, { abortEarly: false });

    this.error = error;
    this.sanitizedEnvironmentVariables = Object.keys(validationSchema).reduce(
      (prev, key) => {
        return {
          ...prev,
          [key]: envVars[key],
        };
      },
      {}
    );
  }

  public static getInstance(): Configuration {
    if (!Configuration.instance) {
      Configuration.instance = new Configuration();
    }
    return Configuration.instance;
  }

  public getValue(key: keyof EnvironmentVariables) {
    return this.sanitizedEnvironmentVariables[key];
  }

  // Should be one of the first things to be called in server setup
  public assertValidValues() {
    if (this.error) {
      const err = "Config validation error";
      console.log(err);

      throw new Error(`${err}: ${this.error.message}`);
    }
  }
}

export { Configuration };
