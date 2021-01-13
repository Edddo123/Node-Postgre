const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "dbName"
});

// client.connect()
// .then(()=> console.log('Connected Successfully'))
// .then(()=> client.query("INSERT INTO course(subject_id, teacher_id, name, description) VALUES($1, $2, $3, $4)", ["237d17b0-cc13-4bb8-9875-a9e0478c06fe","7415d207-fa6e-4e6d-8afb-31413c284dab", "test postgre", "does it finally work?"])) //and thats how we avoid sql injections like pro
// .then(()=> client.query("SELECT * FROM course" )) //we do it in this format to avoid sql injections
// .then(result => console.table(result.rows)) //console table like loops through it, and prints it like table
// .catch(e => console.log(e))
// .finally(() => client.end()) //finally goes even if its success or catch, for us to end connection
async function execute() {
    try {
  await client.connect();
  console.log("Connected Successfully");
  await client.query(
    "INSERT INTO course(subject_id, teacher_id, name, description) VALUES($1, $2, $3, $4)",
    [
      "id",
      "id",
      "test postgre123",
      "does it finally work?",
    ]
  ); //and thats how we avoid sql injections like pro
  const {rows} = await client.query("SELECT * FROM course"); //we do it in this format to avoid sql injections, and it returns result.rows which is array of objects which contain our rows
  console.table(rows); //console table like loops through it, and prints it like table
  //will be same
} catch(err) {
    console.log(err)
}
finally {
    await client.end()
    console.log('client disconnected')
}
}

// execute() its 2nd way to do same thing but with awaits
