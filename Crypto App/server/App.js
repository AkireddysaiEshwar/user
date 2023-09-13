import dotenv from "dotenv";
import router from "./routes/user-routes.js";
import { mongoose, connect } from "mongoose";
import cors from "cors";

import express from "express";
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors);
app.use("/api", router);

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("listening to the port");
    });
  })
  .then(() => {
    console.log("connect to database");
  })
  .catch((err) => {
    console.log("error", err);
  });
