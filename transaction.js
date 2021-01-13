const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "dbName"
});
//transaction lets you chain queries

async function execute() {
    try {
  await client.connect();
  client.query("BEGIN");
  await client.query('update course set name = $1', ['Hello'])
  await client.query(
    "INSERT INTO course(subject_id, teacher_id, name, description) VALUES($1, $2, $3, $4)",
    [
      "id",
      "id",
      "hey there",
      "work transaction",
    ]
  )
 await client.query("COMMIT");
}
catch(err) {
    console.log(err)
    client.query("ROLLBACK");
}
finally {
    await client.end()
    console.log('disconnected')
}
}
execute()
