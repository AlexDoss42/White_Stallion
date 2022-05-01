const express = require('express');
const app = express();
const pool = require("./db");
require('dotenv').config();

const { SERVER_PORT } = process.env

app.use(express.json())

// Account Endpoints

// Vehicle Endpoints

app.get('/api/vehicle/:user_id', (req, res) => {
  const { user_id } = req.params
  
  try {
    const serviceRecords = pool.query(`SELECT * from vehicle where vehicle_id = $1`, [user_id]);
    res.json(serviceRecords);
  } catch (error) {
    console.error(error.message);
  }
});

app.post('/api/vehicle', (req, res) => {
  const { make, model, year, miles, user_id } = req.body;
  
  try {
    const newVehicle = pool.query(`insert into vehicle (make, model, year, miles, owner) values ($1, $2, $3, $4, $5)`, [make, model, year, miles, user_id]);
    res.json(newVehicle[0]);
  } catch (error) {
    console.error(error.message);
  }
})
app.put('/api/vehicle/:vehicle_id', vehicleCtrl.update)
app.delete('/api/vehcile/:vehicle_id', vehicleCtrl.deleteVehicle)

// Service Endpoints

app.get('/api/service/:vehicle_id', ServiceCtrl.getRecordsById)
app.post('/api/service', ServiceCtrl.createServiceRecord)
app.put('/api/service/:id', ServiceCtrl.update)
app.delete('/api/service/:id', ServiceCtrl.delete)

app.listen(SERVER_PORT, () => console.log(`It's over Anakin! I have the ${SERVER_PORT} port`))