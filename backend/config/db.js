import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    const cnn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MongoDB Connected: " + cnn.connection.host);
  } catch (error) {
    console.error("Error connecting to MONGODB: " + error.message);
    process.exit(1);
  }
};
