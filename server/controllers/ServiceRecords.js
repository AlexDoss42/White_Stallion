let id = 1
let serviceLog = [
  {
    id: id++,
    price: '$50.00',
    milesDriven: 52000,
    partName: 'BrakePads',
    dateOfService: '5/5/18'
  },
  {
    id: id++,
    price: '$500.00',
    milesDriven: 55000,
    partName: 'AC Compressor',
    dateOfService: '7/3/18'
  },
  {
    id: id++,
    price: '$150.00',
    milesDriven: 86000,
    partName: 'Radiator',
    dateOfService: '12/25/18'
  }
]

module.exports = {
  
  create: (req, res) => {
    
    let newServiceRecord = req.body
    newServiceRecord.id = id++
      
      serviceLog.push(newServiceRecord)
      res.send(serviceLog)
    },
    
  read: (req, res) => res.send(serviceLog),
  
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