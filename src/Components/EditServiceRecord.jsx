import React, { useState } from 'react';

function EditServiceRecord(props) {

  const [formData, setFormData] = useState({
      id: props.serviceRecord.id,
      price: props.serviceRecord.price,
      milesDriven: props.serviceRecord.milesDriven,
      partName: props.serviceRecord.partName,
      dateOfService: props.serviceRecord.dateOfService
    });


  const handleChange = (e) => {
    let {value, name } = e.target 
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleClick = () => {

// Makes sure you have values for each edit before it will update

    let { price, milesDriven, partName, dateOfService } = formData;

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

    let edittedServiceRecord = {...props.serviceRecord, ...this.state}
    props.updateServiceRecord(edittedServiceRecord);
    }
  }
    return (
      <div className='editInputs'>
        <input
        onChange = {handleChange}
        name = 'price'
        type = 'number'
        value = {formData.price}
        placeholder = 'price'
        />
        <input
        onChange = {handleChange}
        name = 'milesDriven'
        type = 'number'
        value = {formData.milesDriven}
        placeholder = 'Odometer Reading'
        />
        <input
        onChange = {handleChange}
        name = 'partName'
        type = 'text'
        value = {formData.partName}
        placeholder = 'Part Name'
        />
        <input
        onChange = {handleChange}
        name = 'dateOfService'
        type = 'date'
        value = {formData.dateOfService}
        placeholder = 'mm/dd/yy'
        />
        <div className='editBtns'>
            <i 
            className="far fa-save"
            onClick={handleClick}
            />
            <i 
            className="far fa-window-close"
            onClick={props.toggleEdit}
            />
        </div>
      </div>
    )
}

export default EditServiceRecord;
