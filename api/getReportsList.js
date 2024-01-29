import express from "express";
import { getConnection } from "../services/connectionManager.js";

const router = express.Router();

router.get("/", async (req, res, _next) => {
  const db = await getConnection();
  const gameReports = db.collection("game_report");
  const MIN_VERSION = parseFloat(req.query["min_version"]);
  const MAX_VERSION = parseFloat(req.query["max_version"]);
  let reports, incompatibleCount;
  try {
    reports = await gameReports
      .find({
        $or: [
          {
            report_version: {
              $gte: MIN_VERSION,
              $lte: MAX_VERSION,
            },
          },
          {
            "report-version": {
              $gte: MIN_VERSION,
              $lte: MAX_VERSION,
            },
          },
        ],
      })
      .project({
        report_name: 1,
        start_time: 1,
        end_time: 1,
        points: 1,
        teams: 1,
      })
      .sort({ start_time: -1 })
      .toArray();
    incompatibleCount = await gameReports.countDocuments({
      $or: [
        {
          report_version: {
            $lt: MIN_VERSION,
          },
        },
        {
          report_version: {
            $gt: MAX_VERSION,
          },
        },
        {
          "report-version": {
            $lt: MIN_VERSION,
          },
        },
        {
          "report-version": {
            $gt: MAX_VERSION,
          },
        },
      ],
    });
  } catch (err) {
    console.error(err);
  }

  if (reports && incompatibleCount>=0) {
    if (reports.length) {
      res.status(200).json({
        reports,
        incompatibleCount,
      });
    } else {
      res.status(204).send();
    }
  } else {
    res.status(500).send();
  }
});

export default router;
