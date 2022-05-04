import React from 'react'
import { Link } from 'react-router-dom';

function Vehicle({ vehicleRecord }) {

  const link = `/vehicle_details/${vehicleRecord.vehicle_id}`
  return (
    <div className='vehicleRecord'>
        <div className='vehicleRecord'>
            <p>Make: { vehicleRecord.make }</p>
            <p>Model: { vehicleRecord.model }</p>
            <p>Year: { vehicleRecord.year }</p>
            <p>Miles: { vehicleRecord.miles }</p>
        </div>
        <Link to={link}>Details</Link>
    </div>
  )
}

export default Vehicle;
