import React, { Component } from 'react';

class AddServiceRecord extends Component {
  constructor(props) {
    super(props)

    this.state = {
      price: '',
      milesDriven: '',
      partName: '',
      dateOfService: ''
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
    this.props.addServiceRecord(serviceRecord)
  }

  render(){

    return (
      <div className='addInputs'>
        
        <input
        onChange = {this.handleChange}
        name = 'price'
        type = 'number'
        placeholder = 'price'
        />

        <input
        onChange = {this.handleChange}
        name = 'milesDriven'
        type = 'number'
        placeholder = 'Odometer Reading'
        />

        <input
        onChange = {this.handleChange}
        name = 'partName'
        type = 'text'
        placeholder = 'Name of the part'
        />

        <input
        onChange = {this.handleChange}
        name = 'dateOfService'
        type = 'date'
        placeholder = 'mm/dd/yy'
        />

        <button onClick={this.handleClick}>Add Service Record</button>

      </div>
    )
  }
}

export default AddServiceRecord; 