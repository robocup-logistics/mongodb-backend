import express from "express";
import cors from "cors";
import "dotenv/config";
import getReportsList from "./api/getReportsList.js";
import getReportById from "./api/getReportById.js";

// create app
const app = express();

// allow access from other urls
app.use(cors());
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  next();
});

// api routes
app.use("/api/getReportsList", getReportsList);
app.use("/api/getReportById", getReportById);
// listen
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
