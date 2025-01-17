import mysql from "mysql2";
import { envs } from "../../env-var/envs";

const mysqlPool = mysql.createConnection({
  host: envs.HOST ?? "NULL",
  user: envs.USER ?? "NULL",
  password: envs.PASSWORD ?? "NULL",
  database: envs.DATABASE ?? "NULL",
});

const checkConnection = async () => {
  try {
    const [rows] = await mysqlPool.promise().query("SELECT 1");
    console.log("Database connection successful", rows);
  } catch (err) {
    console.error("Database connection failed:", err);
  }
};

export { mysqlPool, checkConnection };
