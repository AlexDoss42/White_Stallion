// cd into server and run node index.js

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
    pool.query(`INSERT into vehicle (make, model, year, miles, owner) values ($1, $2, $3, $4, $5)`, [make, model, year, miles, user_id]);
    res.status(200);
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
    pool.query(`insert into service_records (price, miles_driven, part_name, date_of_service, vehicle_id) values ($1, $2, $3, $4, $5)`, [price, miles_driven, part_name, date_of_service, vehicle_id]);
    res.status(200);
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


// Fill Up Endpoints

app.get('/api/fill_up/:vehicle_id', async (req, res) => {
  const { vehicle_id } = req.params
  try {
    const fillupRecords = await pool.query(`SELECT * FROM gas_full_ups WHERE vehicle_id = $1`, [vehicle_id]);
    res.json(fillupRecords.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.post('/api/fill_up', (req, res) => {
  const { price, miles_driven, part_name, date_of_service, vehicle_id } = req.body;
  
  try {
    pool.query(`INSERT INTO gas_full_ups (price, miles_driven, part_name, date_of_service, vehicle_id) values ($1, $2, $3, $4, $5)`, [price, miles_driven, part_name, date_of_service, vehicle_id]);
    res.status(200);
  } catch (error) {
    console.error(error.message);
  }
});

app.put('/api/fill_up/:fill_up_id', (req, res) => {
  const { price, miles_driven, type, date_of_service, vehicle_id } = req.body;
  const { fill_up_id } = req.params
  
  try {
    const updatedFillUp = pool.query(`UPDATE gas_full_ups SET price = $1, miles_driven = $2, type = $3, date_of_service = $4, vehicle_id = $5 WHERE fill_up_id = $6`, [price, miles_driven, type, date_of_service, vehicle_id, fill_up_id]);
    res.json(updatedFillUp[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete('/api/fill_up/:fill_up_id', (req, res) => {
  const { fill_up_id } = req.params
  
  try {
    pool.query(`DELETE FROM gas_full_ups WHERE fill_up_id = $1`, [fill_up_id]);
    res.status(200);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(4242, () => console.log(`It's over Anakin! I have the 4242 port`));
