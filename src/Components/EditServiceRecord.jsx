import React from 'react';

function EditServiceRecord(props) {

    this.state = {
      id: props.serviceRecord.id,
      price: props.serviceRecord.price,
      milesDriven: props.serviceRecord.milesDriven,
      partName: props.serviceRecord.partName,
      dateOfService: props.serviceRecord.dateOfService
    }


  const handleChange = (e) => {
    let {value, name } = e.target 
    this.setState({
      [name]: value
    })
  }

  const handleClick = () => {

// Makes sure you have values for each edit before it will update

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

// Updates service record

    let serviceRecord = {...props.serviceRecord, ...this.state}

    this.props.updateServiceRecord(serviceRecord)
    this.props.toggleEdit()
    }
  }
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
        placeholder = 'Part Name'
        />

        <input
        onChange = {this.handleChange}
        name = 'dateOfService'
        type = 'date'
        value = {this.state.dateOfService}
        placeholder = 'mm/dd/yy'
        />

        <div className='editBtns'>

{/* Save Button */}

          <i 
          className="far fa-save"
          onClick={this.handleClick}
          ></i>

{/* Cancel Button */}

          <i 
          className="far fa-window-close"
          onClick={props.toggleEdit}
          ></i>

        </div>
        
      </div>
    )
}

export default EditServiceRecord;
