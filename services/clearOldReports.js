// deletes all game reports older than 7 days
import { getConnection } from "./connectionManager.js";
import "dotenv/config";

const db = await getConnection();
const gameReports = db.collection("game_report");
let deletedReports;
try {
  deletedReports = await gameReports.deleteMany({
    "end-time": { $lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
  });
} catch (err) {
  console.error(err);
}

console.log(deletedReports);
