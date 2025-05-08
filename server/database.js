import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

try {
  const connection = mongoose.createConnection(process.env.MONGO_URI);
  if (connection) {
    console.log("Connected to database");
  }
} catch (error) {
  console.log(error);
}
