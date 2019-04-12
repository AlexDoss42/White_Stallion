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

      <div className='ServiceRecord' style=  {{border: '1px solid grey', margin: 20, padding: 10}}>

        <div className='serviceRecordData'>
          <p>price: { serviceRecord.price }</p>
          <p>milesDriven: { serviceRecord.milesDriven }</p>
          <p>partName: { serviceRecord.partName }</p>
          <p>dateOfService: { serviceRecord.dateOfService }</p>
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