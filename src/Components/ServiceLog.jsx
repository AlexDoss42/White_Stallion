import React, { useEffect } from 'react'
import axios from 'axios'

import ServiceRecord from './ServiceRecord'


function ServiceLog() {

// Displays the complete Service log upon Mounting

useEffect(() => {
  axios.get('/api/service/1').then(res => {
    console.log(res.data)
    this.setState({
      ServiceLog: res.data
    })
  }).catch(err => console.log('Houston we have a problem: ', err))
}, [])

// // Allows you to edit each service record

  const updateServiceRecord = (serviceRecord) => {
    axios.put(`/api/service/${serviceRecord.id}`, serviceRecord).then(res => {
      this.setState({
        ServiceLog: res.data
      })})
      .catch(err => console.log('Houston, we have a problem: ', err))
  }

// Allows you to delete a service record

  const deleteServiceRecord = (serviceRecord) => {
    console.log(serviceRecord)
    axios.delete(`/api/service/${serviceRecord.id}`, serviceRecord)
    .then(res => { 
      this.setState({ 
        ServiceLog: res.data})})
        .catch(err => console.log('Houston, we have a problem: ', err))
  }

    return (

      <div className='ServiceLog'>
      {this.state.ServiceLog

// used for the search function down the line 

      // .filter(serviceRecord => {
      //   return serviceRecord.value === this.props.searchValue
      // })

// Renders each service record in the service log
      .map(serviceRecord => {
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
