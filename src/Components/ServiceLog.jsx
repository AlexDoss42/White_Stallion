import React, { Component } from 'react'
import axios from 'axios'

import ServiceRecord from './ServiceRecord'


class ServiceLog extends Component {
  constructor() {
    super()

    this.state = {
      ServiceLog: []
    }
  }

  componentDidMount() {
    axios.get('/api/service').then(res => {
      this.setState({
        ServiceLog: res.data
      })
    }).catch(err => console.log('Houston we have a problem: ', err))
  }

  updateServiceRecord = (serviceRecord) => {
    axios.put(`/api/service/${serviceRecord.id}`, serviceRecord).then(res => {
      this.setState({
        ServiceLog: res.data
      })
    }).catch(err => console.log('Houston, we have a problem: ', err))
  }

  render() {
    return (
      <div>
        {this.state.ServiceLog.map(serviceRecord => {
          return <ServiceRecord
                  key = { serviceRecord.id }
                  serviceRecord = { serviceRecord }
                  updateServiceRecord = { this.updateServiceRecord }/>
        })}       
      </div>
    )
  }
}

export default ServiceLog;