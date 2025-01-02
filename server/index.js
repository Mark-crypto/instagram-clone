import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = 3000 || process.env.PORT;
const app = express();

//Middlewares
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Testing route");
});

//Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
