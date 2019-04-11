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
      this.state.edit ? <EditServiceRecord serviceRecord = { serviceRecord } updateServiceRecord = { this.props.updateServiceRecord } 
      toggleEdit = {this.toggleEdit} /> :

      <div style=  {{border: '1px solid grey', margin: 20, padding: 10}}>

        <p>price: { serviceRecord.price }</p>
        <p>milesDriven: { serviceRecord.milesDriven }</p>
        <p>partName: { serviceRecord.partName }</p>
        <p>dateOfService: { serviceRecord.dateOfService }</p>

        <button onClick={this.toggleEdit}>Edit Log</button>
        <button>Delete</button>

      </div>
    )
  }
}

export default ServiceRecord