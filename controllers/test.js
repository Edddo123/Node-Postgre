const db = require('../util/database')

exports.getMain = async(req, res, next) => {
  const result = await db.query('SELECT * FROM course')
  console.table(result.rows)
}