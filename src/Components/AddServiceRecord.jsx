import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function AddServiceRecord() {
  
  const [formData, setFormData] = useState({
      price: '',
      miles_driven: '',
      part_name: '',
      date_of_service: '',
      vehicle_id: 1
  });

  const addServiceRecord = (newServiceRecord) => {
    axios.post('/api/service', newServiceRecord).then(res => {
      setFormData({
        price: '',
        miles_driven: '',
        part_name: '',
        date_of_service: '',
        vehicle_id: 1
    });
    }).catch(err => console.log('Houston, we have a problem: ', err))
  };

  const handleClick = () => {
    let { price, miles_driven, part_name, date_of_service } = formData;
    
    if(price === '') {
      alert('Price is required')
    } else if(miles_driven === '') {
      alert('Odometer Reading is required')
    } else if(part_name === '') {
      alert('Part Name is required')
    } else if(date_of_service === '') {
      alert('Service Date is required')
    } else {
      addServiceRecord(formData);
    }
  };

    return (
      <form className='addInputs'>
        <input
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        name = 'price'
        type = 'number'
        placeholder = 'price'
        value={formData.price}
        />
        <input
        onChange = {(e) => setFormData({ ...formData, miles_driven: e.target.value })}
        name = 'miles_driven'
        type = 'number'
        placeholder = 'Odometer'
        value={formData.miles_driven}
        />
        <input
        onChange = {(e) => setFormData({ ...formData, part_name: e.target.value })}
        name = 'part_name'
        type = 'text'
        placeholder = 'Part Name'
        value={formData.part_name}
        />
        <input
        onChange = {(e) => setFormData({ ...formData, date_of_service: e.target.value })}
        name = 'date_of_service'
        type = 'date'
        placeholder = 'mm/dd/yyyy'
        value={formData.date_of_service}
        />
        <div className='editBtns'>
          <i className="fas fa-plus" onClick={handleClick} />
          <Link to="/">
            <i className="far fa-window-close" />
          </Link>
        </div>
      </form>
    )
}

export default AddServiceRecord; 
