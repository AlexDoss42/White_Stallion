import React, { Component } from 'react';
import EditServiceRecord from './EditServiceRecord'

class ServiceRecord extends Component {
  constructor(){
  super()

// Creates the ILLUSION of a second page

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

// Terinary to determine which "page" to render
      
      this.state.edit ? 
      
// Edit Page
      
      <EditServiceRecord 
      serviceRecord = { serviceRecord } 
      updateServiceRecord = { this.props.updateServiceRecord } 
      toggleEdit = {this.toggleEdit} /> 
      
      :

// Normal Service record to be rendered in the service log

      <div className='ServiceRecord'>

        <div className='serviceRecordData'>
          <p>Price: { serviceRecord.price }</p>
          <p>Miles Driven: { serviceRecord.milesDriven }</p>
          <p>Part Name: { serviceRecord.partName }</p>
          <p>Date of Service: { serviceRecord.dateOfService }</p>
        </div>

        <div className='serviceRecordButtons'>

 {/* Edit Button */}
  
          <i 
          className="far fa-edit"
          onClick={this.toggleEdit}
          ></i>

{/* Delete Button */}

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