import React, { Component } from 'react';
import EditServiceRecord from './EditServiceRecord'

class ServiceRecord extends Component {
  constructor(){
  super()

    this.state = {
      edit: false
    }
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    let { serviceRecord } = this.props
    return (
      this.state.edit ? 
      <EditServiceRecord 
      serviceRecord = { serviceRecord } updateServiceRecord = { this.props.updateServiceRecord } 
      toggleEdit = {this.toggleEdit} /> :

      <div className='ServiceRecord'>

        <div className='serviceRecordData'>
          <p>Price: { serviceRecord.price }</p>
          <p>Miles Driven: { serviceRecord.milesDriven }</p>
          <p>part Name: { serviceRecord.partName }</p>
          <p>Date of Service: { serviceRecord.dateOfService }</p>
        </div>

        <div className='serviceRecordButtons'>
  
          <i 
          className="far fa-edit"
          onClick={this.toggleEdit}
          ></i>

          <i 
          className="far fa-trash-alt"
          onClick={() => {this.props.deleteServiceRecord(serviceRecord)}}
          ></i>
          
        </div>

      </div>
    )
  }
}

export default ServiceRecord