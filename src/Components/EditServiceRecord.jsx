import React, { Component } from 'react';

class EditServiceRecord extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.serviceRecord.id,
      price: props.serviceRecord.price,
      milesDriven: props.serviceRecord.milesDriven,
      partName: props.serviceRecord.partName,
      dateOfService: props.serviceRecord.dateOfService
    }
  }

  handleChange = (e) => {
    let {value, name } = e.target 
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let serviceRecord = {...this.props.serviceRecord, ...this.state}
    this.props.updateServiceRecord(serviceRecord)
    this.props.toggleEdit()
  }

  render () {
    return (
      <div className='editInputs'>
        <input
        onChange = {this.handleChange}
        name = 'price'
        type = 'number'
        value = {this.state.price}
        placeholder = 'price'
        />

        <input
        onChange = {this.handleChange}
        name = 'milesDriven'
        type = 'number'
        value = {this.state.milesDriven}
        placeholder = 'Odometer Reading'
        />

        <input
        onChange = {this.handleChange}
        name = 'partName'
        type = 'text'
        value = {this.state.partName}
        placeholder = 'Name of the part'
        />

        <input
        onChange = {this.handleChange}
        name = 'dateOfService'
        type = 'text'
        value = {this.state.dateOfService}
        placeholder = 'mm/dd/yy'
        />

        <button onClick={this.handleClick}>Update Service Record</button>
      </div>
    )
  }
}

export default EditServiceRecord;