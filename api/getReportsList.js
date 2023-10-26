import express from "express";
import { getConnection } from "../services/connectionManager.js";

const router = express.Router();

router.get("/", async (req, res, _) => {
  const db = await getConnection();
  const gameReports = db.collection("game_report");
  let reportsList;
  try {
    reportsList = await gameReports
      .find({})
      .project({ "report-name": 1, "start-time": 1, "total-points": 1 })
      .sort({ "start-time": -1 })
      .toArray();
  } catch (err) {
    console.error(err);
  }

  if (reportsList) {
    if (reportsList.length) {
      res.status(200).json(reportsList);
    } else {
      res.status(204).send();
    }
  } else {
    res.status(500).send();
  }
});

export default router;
