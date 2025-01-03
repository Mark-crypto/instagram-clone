import express from "express";
import dotenv from "dotenv";
dotenv.config();
import indexRouter from "./routes/index.route.js";

const PORT = 3000 || process.env.PORT;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", indexRouter);

//Routes
app.get("/", (req, res) => {
  res.send("Testing route");
});

//Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
