import joi from "joi";

const validationSchema = {
  NODE_ENV: joi.string().required(),
  DT_PORT: joi.number().positive().required(),
  DT_MONGO_URL: joi.string().required(),
  DT_MONGO_USER: joi.string().required(),
  DT_MONGO_PASS: joi.string().required(),
  DT_DB_NAME: joi.string().optional(),
};

export { validationSchema };
