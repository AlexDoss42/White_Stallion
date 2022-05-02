import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ServiceRecord from './ServiceRecord'


function ServiceLog() {

  const [serviceLog, setServiceLog] = useState([])

// Displays the complete Service log upon Mounting

useEffect(() => {
  axios.get('/api/service/1').then(res => {
    setServiceLog(res.data);
  })
  .catch(err => console.log('Houston we have a problem: ', err))
}, [])

// // Allows you to edit each service record

  const updateServiceRecord = (serviceRecord) => {
    axios.put(`/api/service/${serviceRecord.id}`, serviceRecord).then(res => {
      setServiceLog(res.data);
    })
    .catch(err => console.log('Houston, we have a problem: ', err))
  }

// Allows you to delete a service record

  const deleteServiceRecord = (serviceRecord) => {
    console.log(serviceRecord)
    axios.delete(`/api/service/${serviceRecord.id}`, serviceRecord)
    .then(res => { 
      setServiceLog(res.data);
    })
    .catch(err => console.log('Houston, we have a problem: ', err))
  }

    return (

      <div className='ServiceLog'>
      {serviceLog.map(serviceRecord => {
          return <ServiceRecord
                  key = { serviceRecord.id }
                  serviceRecord = { serviceRecord }
                  updateServiceRecord = { updateServiceRecord }
                  deleteServiceRecord = { deleteServiceRecord }/>
        })}   
      </div>
      
    )
}

export default ServiceLog;
