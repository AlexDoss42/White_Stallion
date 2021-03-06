import React, { Component } from 'react';
import axios from 'axios'

class AddServiceRecord extends Component {
  constructor(props) {
    super(props)

    this.state = {
      price: '',
      milesDriven: '',
      partName: '',
      dateOfService: '',
    }
  }

  addServiceRecord = (newServiceRecord) => {
    axios.post('/api/service', newServiceRecord).then(res => {
      this.setState({
        ServiceLog: res.data
      })
    }).catch(err => console.log('Houston, we have a problem: ', err))
  }

  handleChange = (e) => {
    let { value, name } = e.target 
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {

// Makes sure each input is filled out before submitting

    let { price, milesDriven, partName, dateOfService } = this.state
    
    if(price === '') {
      alert('Price is required')
    } else if(milesDriven === '') {
      alert('Odometer Reading is required')
    } else if(partName === '') {
      alert('Part Name is required')
    } else if(dateOfService === '') {
      alert('Service Date is required')
    } else {

// Adds a new service record to the service log
      
      let serviceRecord = {...this.props.serviceRecord, ...this.state}
      
      this.addServiceRecord(serviceRecord)
      this.props.toggleHome()
    }
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
        placeholder = 'Odometer'
        />

        <input
        onChange = {this.handleChange}
        name = 'partName'
        type = 'text'
        placeholder = 'Part Name'
        />

        <input
        onChange = {this.handleChange}
        name = 'dateOfService'
        type = 'date'
        placeholder = 'mm/dd/yyyy'
        />

        <div className='editBtns'>

{/* Add Button */}

          <i 
          className="fas fa-plus"
          onClick={this.handleClick}
          ></i>
        
{/* Cancel Button */}

          <i 
          className="far fa-window-close"
          onClick={this.props.toggleHome}
          ></i>

        </div>

      </div>
    )
  }
}

export default AddServiceRecord; 