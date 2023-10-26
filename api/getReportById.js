import express from "express";
import { getConnection } from "../services/connectionManager.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res, _) => {
  const db = await getConnection();
  const gameReports = db.collection("game_report");
  let report;
  try {
    report = await gameReports.findOne({
      _id: new ObjectId(req.query.reportId),
    });
  } catch (err) {
    console.error(err);
  }

  if (report) {
    res.status(200).json(report);
  } else {
    res.status(500).send();
  }
});

export default router;
