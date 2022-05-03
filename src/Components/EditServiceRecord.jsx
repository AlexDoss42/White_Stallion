import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EditServiceRecord({ serviceRecord, updateServiceRecord }) {
  const { id, price, miles_driven, part_name, date_of_service} = serviceRecord;
  
  const [formData, setFormData] = useState({
      id: id,
      price: price,
      milesDriven: miles_driven,
      partName: part_name,
      dateOfService: date_of_service
    });

  const handleClick = () => {
// Makes sure you have values for each edit before it will update
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
// Updates service record
    let edittedServiceRecord = {...serviceRecord, ...formData}
    updateServiceRecord(edittedServiceRecord);
    }
  }
    return (
      <form className='editInputs'>
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
        onChange = {(e) => setFormData({ ...formData, partName: e.target.value })}
        name = 'part_name'
        type = 'text'
        placeholder = 'Part Name'
        value={formData.part_name}
        />
        <input
        onChange = {(e) => setFormData({ ...formData, dateOfService: e.target.value })}
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

export default EditServiceRecord;
