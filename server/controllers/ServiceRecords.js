module.exports = {
  
  getRecordsById: (req, res) => {
    const db = req.app.get('db')
    const { vehicle_id } = req.params
    
    db.service_records.getAllRecordsByVehicle([vehicle_id])
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      console.log('error in get records by vehicle_id')
      console.log(err)
    })
  },
  
  createServiceRecord: (req, res) => {
    const db = req.app.get('db')
    
    let { price, milesDriven, partName, dateOfService, vehicle_id } = req.body
      
    db.service_records.createRecord([ price, milesDriven, partName, dateOfService, vehicle_id ])
    .then()
    },
    
  update: (req, res) => {
    const db = req.app.get('db')

    let { vehicle_id } = req.params
    let { price, milesDriven, partName, dateOfService } = req.body
    
    db.service_records.createRecord([ price, milesDriven, partName, dateOfService, vehicle_id ])
    .then(res => {
      res.status(200).send("Successfully updated service")
    })
    .catch(err => res.status(500).send('error in update record', err))
  },

  delete: (req, res) => {
    const db = req.app.get('db')
    let { service_id } = req.params
   
    db.service_records.deleteRecord([service_id])
    .then(() =>{
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send('error in delete service record: ', err)
    })
   
  }
}