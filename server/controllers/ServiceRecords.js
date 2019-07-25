module.exports = {
  
  getRecordsById: (req, res) => {
    const db = req.app.get('db')
    const { vehicle_id } = req.params
    
    db.service_records.getAllRecordsByVehicle([vehicle_id])
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      console.log('error in get records by id')
      console.log(err)
    })
  },
  
  create: (req, res) => {
    
    let newServiceRecord = req.body
    newServiceRecord.id = id++
      
      serviceLog.unshift(newServiceRecord)
      res.send(serviceLog)
    },
    
  update: (req, res) => {

    let { id } = req.params
    let updatedServiceRecord = req.body
    updatedServiceRecord.id = id

    let index = serviceLog.findIndex(updatedServiceRecord => +updatedServiceRecord.id === +id)

    serviceLog.splice(index, 1, updatedServiceRecord)
    res.send(serviceLog)
  },

  delete: (req, res) => {
    let { id } = req.params
    let deletedServiceRecord = req.body
    deletedServiceRecord.id = id

    let index = serviceLog.findIndex(deletedServiceRecord => +deletedServiceRecord.id === +id)

    serviceLog.splice(index, 1)
    res.send(serviceLog)
  }
}