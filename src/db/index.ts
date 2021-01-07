import mongoose from "mongoose";
import { DATABASE_URL } from "../config";
import { logger } from "../utils";

export const initDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (err) {
    logger.error("Database Connection Error 💥");
    process.exit(1);
  }
};
