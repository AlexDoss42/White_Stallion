import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GasFillRecord from './GasFillRecord';

function GasLog({ vehicle_id }) {
  const [fillUpLogs, setFillUpLogs] = useState([])

// Displays the complete Service log upon Mounting

useEffect(() => {
  axios.get(`/api/fill_up/${vehicle_id}`).then(res => {
    setFillUpLogs(res.data);
  })
  .catch(err => console.log('Houston we have a problem: ', err))
}, [])

  const updateFillUpRecord = (fillUpRecord) => {
    axios.put(`/api/fill_up/${fillUpRecord.id}`, fillUpRecord).then(res => {
      setFillUpLogs(res.data);
    })
    .catch(err => console.log('Houston, we have a problem: ', err))
  }

  const deleteFillUpRecord = (fillUpRecord) => {
    axios.delete(`/api/fill_up/${fillUpRecord.id}`, fillUpRecord)
    .then(res => { 
      setFillUpLogs(res.data);
    })
    .catch(err => console.log('Houston, we have a problem: ', err))
  }

    return (

      <div className='ServiceLog'>
      {fillUpLogs.map(fillUpRecord => {
          return <GasFillRecord
                  key = { fillUpRecord.id }
                  fillUpRecord = { fillUpRecord }
                  updateFillUpRecord = { updateFillUpRecord }
                  deleteFillUpRecord = { deleteFillUpRecord }/>
        })}   
      </div>
      
    )
}

export default GasLog;
