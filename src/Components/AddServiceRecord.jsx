import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function AddServiceRecord() {
  
  const [formData, setFormData] = useState({
      price: '',
      milesDriven: '',
      partName: '',
      dateOfService: '',
  });

  const addServiceRecord = (newServiceRecord) => {
    axios.post('/api/service', newServiceRecord).then(res => {
      setFormData({
        price: '',
        milesDriven: '',
        partName: '',
        dateOfService: '',
    });
    }).catch(err => console.log('Houston, we have a problem: ', err))
  }

  const handleChange = (e) => {
    let { value, name } = e.target 
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleClick = () => {

// Makes sure each input is filled out before submitting

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

// Adds a new service record to the service log
      
      addServiceRecord(formData);
    }
  }

    return (
      <div className='addInputs'>
        <input
        onChange = {handleChange}
        name = 'price'
        type = 'number'
        placeholder = 'price'
        />

        <input
        onChange = {handleChange}
        name = 'milesDriven'
        type = 'number'
        placeholder = 'Odometer'
        />

        <input
        onChange = {handleChange}
        name = 'partName'
        type = 'text'
        placeholder = 'Part Name'
        />

        <input
        onChange = {handleChange}
        name = 'dateOfService'
        type = 'date'
        placeholder = 'mm/dd/yyyy'
        />

        <div className='editBtns'>

{/* Add Button */}

          <i 
          className="fas fa-plus"
          onClick={handleClick}
          ></i>
        
{/* Cancel Button */}

        <Link to="/">
          <i className="far fa-window-close" />
        </Link>
          

        </div>

      </div>
    )
}

export default AddServiceRecord; 
