require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const ServiceCtrl = require('./controllers/ServiceRecords')

const app = express()

const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env

app.use(express.json())

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  }
}))

massive(CONNECTION_STRING)
  .then((db) => {
    app.set('db', db)
    console.log(`It's working! IT'S WORKING!!!`)
    console.log(db.listTables())
  })

app.get('/api/service', ServiceCtrl.read)
app.post('/api/service', ServiceCtrl.create)
app.put('/api/service/:id', ServiceCtrl.update)
app.delete('/api/service/:id', ServiceCtrl.delete)

app.listen(SERVER_PORT, () => console.log(`It's over Anakin! I have the ${SERVER_PORT} port`))