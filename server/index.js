const express = require('express');
const app = express();
const pool = require("./db");

app.use(express.json())

// Account Endpoints

// Vehicle Endpoints

app.get('/api/vehicle/:user_id', async (req, res) => {
  const { user_id } = req.params
  try {
    const serviceRecords = await pool.query(`SELECT * from vehicle where owner = $1`, [user_id]);
    res.json(serviceRecords.rows);
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
    pool.query(`DELETE FROM vehicle WHERE vehicle_id = $1`, [vehicle_id]);
    res.status(200);
  } catch (error) {
    console.error(error.message);
  }
});

// Service Endpoints

app.get('/api/service/:vehicle_id', async (req, res) => {
  const { vehicle_id } = req.params
  try {
    const serviceRecord = await pool.query(`SELECT * FROM service_records WHERE vehicle_id = $1`, [vehicle_id]);
    res.json(serviceRecord.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.post('/api/service', (req, res) => {
  const { price, miles_driven, part_name, date_of_service, vehicle_id } = req.body;
  
  try {
    const newService = pool.query(`insert into service_records (price, miles_driven, part_name, date_of_service, vehicle_id) values ($1, $2, $3, $4, $5)`, [price, miles_driven, part_name, date_of_service, vehicle_id]);
    res.json(newService[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.put('/api/service/:service_id', (req, res) => {
  const { price, miles_driven, part_name, date_of_service, vehicle_id } = req.body;
  const { service_id } = req.params
  
  try {
    const updatedVehicle = pool.query(`UPDATE service_records SET make = $1, model = $2, year = $3, miles = $4, owner = $5 WHERE vehicle_id = $6`, [price, miles_driven, part_name, date_of_service, vehicle_id, service_id]);
    res.json(updatedVehicle[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete('/api/service/:service_id', (req, res) => {
  const { service_id } = req.params
  
  try {
    pool.query(`DELETE FROM service_records WHERE service_id = $1`, [service_id]);
    res.status(200);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(4242, () => console.log(`It's over Anakin! I have the 4242 port`));
