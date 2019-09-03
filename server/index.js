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
  .catch(err => {
    console.log('error in database')
    console.log(err)
  })

// Account Endpoints

// Vehicle Endpoints

app.get('/api/vehicle/:user_id', vehicleCtrl.getVehiclesById)
app.post('/api/vehicle', vehicleCtrl.createVehicle)
app.put('/api/vehicle/:vehicle_id', vehicleCtrl.update)
app.delete('/api/vehcile/:vehicle_id', vehicleCtrl.deleteVehicle)

// Service Endpoints

app.get('/api/service/:vehicle_id', ServiceCtrl.getRecordsById)
app.post('/api/service', ServiceCtrl.createServiceRecord)
app.put('/api/service/:id', ServiceCtrl.update)
app.delete('/api/service/:id', ServiceCtrl.delete)

app.listen(SERVER_PORT, () => console.log(`It's over Anakin! I have the ${SERVER_PORT} port`))