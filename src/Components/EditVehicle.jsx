import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function EditVehicle({ vehicle }) {
    const { make, model, year, miles, user_id, vehicle_id } = vehicle;
    const [vehicleData, setVehicleData] = useState({
        make: make,
        model: model,
        year: year,
        miles: miles,
        user_id: user_id
    });

    const updateVehicle = (newVehicle) => {
        axios.put(`/api/vehicle/${vehicle_id}`, newVehicle).then(res => {
            window.location = "/garage";
        }).catch(err => console.log('Houston, we have a problem: ', err))
    };

    const handleClick = () => {
        let { make, model, year, miles } = vehicleData;
        
        if(make === '') {
            alert('Make is required')
        } else if(model === '') {
            alert('Model is required')
        } else if(year === '') {
            alert('Year is required')
        } else if(miles === '') {
            alert('Miles are required')
        } else {
            updateVehicle(vehicleData);
        }
    };

  return (
    <form className='addInputs'>
        <input
        onChange={(e) => setVehicleData({ ...vehicleData, make: e.target.value })}
        name = 'make'
        type = 'text'
        placeholder = 'Make'
        value={vehicleData.make}
        />
        <input
        onChange = {(e) => setVehicleData({ ...vehicleData, model: e.target.value })}
        name = 'model'
        type = 'text'
        placeholder = 'Model'
        value={vehicleData.model}
        />
        <input
        onChange = {(e) => setVehicleData({ ...vehicleData, year: e.target.value })}
        name = 'year'
        type = 'number'
        placeholder = 'Year'
        value={vehicleData.year}
        />
        <input
        onChange = {(e) => setVehicleData({ ...vehicleData, date_of_service: e.target.value })}
        name = 'miles'
        type = 'number'
        placeholder='Miles'
        value={vehicleData.date_of_service}
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

export default EditVehicle;
