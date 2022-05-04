import React from 'react'

function Vehicle({ vehicleRecord }) {

  return (
    <div className='vehicleRecord'>
        <div className='vehicleRecord'>
            <p>Make: { vehicleRecord.make }</p>
            <p>Model: { vehicleRecord.model }</p>
            <p>Year: { vehicleRecord.year }</p>
            <p>Miles: { vehicleRecord.miles }</p>
        </div>
    </div>
  )
}

export default Vehicle;
