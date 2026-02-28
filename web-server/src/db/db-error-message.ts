const DB_CONNECTION_ERR_MESSAGE =
  "Cannot connect to MongoDB. Make sure MongoDB is running"

export class MongoConnectionError extends Error {
  constructor(msg: string) {
    super(`MongoConnectionError: ${DB_CONNECTION_ERR_MESSAGE}\n${msg}`)
  }
}
