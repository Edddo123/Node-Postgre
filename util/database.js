const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "dbName",
  max: 10,
  connectionTimeoutMillis: 0 //if pools are taken wait forever
//   idleTimeoutMillis: 0 //if connection not used still hold it forever
});

module.exports = pool
