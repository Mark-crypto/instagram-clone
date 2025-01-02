import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
});

export default connection;
// This snippet creates a connection to the database using the mysql2 package and exports it for use in other files. The connection details are retrieved from environment variables using the dotenv package.
