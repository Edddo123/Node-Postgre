const express = require('express')
const app = express()

const db = require('./util/database')
const routes = require('./routes/test')
const router = require('./routes/test')

// app.use(express.json())
app.use(router)


db.connect()
.then(()=> {
    app.listen(3000)
})
.catch(err=> console.log(err))
