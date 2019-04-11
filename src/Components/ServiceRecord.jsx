import React, { Component } from 'react';

class ServiceRecord extends Component {

  render() {
    let { serviceRecord } = this.props
    return (
      <div
      style=  {{border: '1px solid grey'}}>
        <p>price: { serviceRecord.price }</p>
        <p>milesDriven: { serviceRecord.milesDriven }</p>
        <p>partName: { serviceRecord.partName }</p>
        <p>dateOfService: { serviceRecord.dateOfService }</p>
        <button>Edit Log</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default ServiceRecord