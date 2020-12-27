import mongoose from "mongoose";
import { DATABASE_URL } from "../config";

export const initDB = async () => {
  await mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};