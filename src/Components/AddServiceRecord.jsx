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
        required
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
        placeholder = 'Part Name'
        />

        <input
        onChange = {this.handleChange}
        name = 'dateOfService'
        type = 'date'
        placeholder = 'mm/dd/yy'
        />

        <i 
        className="fas fa-plus"
        onClick={this.handleClick}
        ></i>

      </div>
    )
  }
}

export default AddServiceRecord; 