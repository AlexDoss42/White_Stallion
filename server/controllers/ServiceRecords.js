let id = 1
let serviceLog = [
  {
    id: id++,
    price: 50,
    milesDriven: 52000,
    partName: 'Brake Pads',
    dateOfService: '2018-05-05'
  },
  {
    id: id++,
    price: 500,
    milesDriven: 55000,
    partName: 'AC Compressor',
    dateOfService: '2018-07-05'
  },
  {
    id: id++,
    price: 150,
    milesDriven: 86000,
    partName: 'Radiator',
    dateOfService: '2018-12-23'
  }
]

module.exports = {
  
  read: (req, res) => res.send(serviceLog),
  
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