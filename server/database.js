import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = mongoose.createConnection(process.env.MONGO_URI);
