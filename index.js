import express from "express";
import mongoose from "mongoose";;
import urlRoutes from "./routes/urlRoutes.js"

const app = express();
app.use(express.json());

app.use("/",urlRoutes);;

mongoose
  .connect("mongodb://localhost:27017/urlShortner")
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Mongo connection error", err);
  });