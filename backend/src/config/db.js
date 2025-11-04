import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  await mongoose.connect(ENV.MONGO_URI);
  console.log("connected to DB successfully");
  try {
  } catch (error) {
    console.log("Error Connecting to MONGODB");
    process.exit(1);
  }
};
