const express = require('express')
const db_connect=require('./db/mysql_connect')
const app = express()

app.get('/', function (req, res) {
  res.send('Ana Sayfa')
})
app.get('/app', function(req, res) {
  res.send('app sayfası')
} )

app.listen(process.env.PORT)