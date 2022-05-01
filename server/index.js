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
    const newVehicle = pool.query(`INSERT into vehicle (make, model, year, miles, owner) values ($1, $2, $3, $4, $5)`, [make, model, year, miles, user_id]);
    res.json(newVehicle[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.put('/api/vehicle/:vehicle_id', (req, res) => {
  const { make, model, year, miles, user_id } = req.body;
  const { vehicle_id } = req.params
  
  try {
    const updatedVehicle = pool.query(`UPDATE vehicle SET make = $1, model = $2, year = $3, miles = $4, owner = $5 WHERE vehicle_id = $6`, [make, model, year, miles, user_id, vehicle_id]);
    res.json(updatedVehicle[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete('/api/vehcile/:vehicle_id', (req, res) => {
  const { vehicle_id } = req.params
  
  try {
    const deletedVehicle = pool.query(`DELETE FROM vehicle WHERE vehicle_id = $1`, [vehicle_id]);
    res.status(200);
  } catch (error) {
    console.error(error.message);
  }
})

// Service Endpoints

app.get('/api/service/:vehicle_id', ServiceCtrl.getRecordsById)
app.post('/api/service', ServiceCtrl.createServiceRecord)
app.put('/api/service/:id', ServiceCtrl.update)
app.delete('/api/service/:id', ServiceCtrl.delete)

app.listen(SERVER_PORT, () => console.log(`It's over Anakin! I have the ${SERVER_PORT} port`))