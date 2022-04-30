const express = require('express');
const app = express();
const pool = require("./db");
require('dotenv').config();

const { SERVER_PORT } = process.env

app.use(express.json())

// Account Endpoints

// Vehicle Endpoints

app.get('/api/vehicle/:user_id', (req, res) => {
  const db = req.app.get('db')
  const { vehicle_id } = req.params
  
  try {
    const serviceRecords = pool.query(`SELECT * from service_records where vehicle_id = $1`);
    res.json(serviceRecords);
  } catch (error) {
    console.error(error.message);
  }

  db.service_records.getAllRecordsByVehicle([vehicle_id])
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    console.log('error in get records by vehicle_id')
    console.log(err)
  })
});

app.post('/api/vehicle', vehicleCtrl.createVehicle)
app.put('/api/vehicle/:vehicle_id', vehicleCtrl.update)
app.delete('/api/vehcile/:vehicle_id', vehicleCtrl.deleteVehicle)

// Service Endpoints

app.get('/api/service/:vehicle_id', ServiceCtrl.getRecordsById)
app.post('/api/service', ServiceCtrl.createServiceRecord)
app.put('/api/service/:id', ServiceCtrl.update)
app.delete('/api/service/:id', ServiceCtrl.delete)

app.listen(SERVER_PORT, () => console.log(`It's over Anakin! I have the ${SERVER_PORT} port`))