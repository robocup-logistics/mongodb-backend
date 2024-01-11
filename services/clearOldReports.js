// deletes all game reports older than 1 day (adjust that as you like)
// start the script in '..' with 'node ./services/clearOldReports.js'
import { getConnection } from "./connectionManager.js";
import "dotenv/config";

const db = await getConnection();
const gameReports = db.collection("game_report");
let deletedReports;
try {
  deletedReports = await gameReports.deleteMany({
    start_time: { $lt: new Date(Date.now() - 1 * 12 * 60 * 60 * 1000) },
  });
} catch (err) {
  console.error(err);
}

console.log(deletedReports);
