import { MongoClient } from "mongodb";

// create mongodb connection
export async function getConnection() {
  const client = new MongoClient(process.env.DB_URL);
  try {
    console.log("Trying to connect to MongoDB under url " + process.env.DB_URL);
    await client.connect();
  } catch (err) {
    console.error(err);
  }
  console.log("Connected successfully to server");
  const db = client.db(process.env.DB_NAME);
  return db;
}
