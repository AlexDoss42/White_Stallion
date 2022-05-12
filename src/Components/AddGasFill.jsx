import Axios from 'axios';
import React, { useState } from 'react'

function AddGasFill({ vehicleRecord }) {

  const [formData, setFormData] = useState({
    price: '',
    miles_driven: '',
    type: '',
    date_of_service: '',
    vehicle_id: 1
});

const addServiceRecord = (newServiceRecord) => {
  Axios.post(`/api/fill_up`, newServiceRecord).then(res => {
    setFormData({
      price: '',
      miles_driven: '',
      type: '',
      date_of_service: '',
      vehicle_id: 1
  });
  }).catch(err => console.log('Houston, we have a problem: ', err))
};

const handleClick = () => {
  let { price, miles_driven, type, date_of_service } = formData;
  
  if(price === '') {
    alert('Price is required')
  } else if(miles_driven === '') {
    alert('Odometer Reading is required')
  } else if(type === '') {
    alert('Type of fill up is required')
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
      onChange = {(e) => setFormData({ ...formData, type: e.target.value })}
      name = 'type'
      type = 'text'
      placeholder = 'Personal or Business'
      value={formData.type}
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
        <i className="far fa-window-close" />
      </div>
    </form>
  )
}

export default AddGasFill;
