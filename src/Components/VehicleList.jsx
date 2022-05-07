import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Vehicle from './Vehicle';
import AddVehicle from '../Components/AddVehicle';

function VehicleList() {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        axios.get('/api/vehicle/1').then(res => { 
          setVehicles(res.data);
        })
        .catch(err => console.log('Houston we have a problem: ', err))
      }, [])
  return (
    <div>
        {vehicles.map(vehicle => {
          return <Vehicle
                    key={vehicle.vehicle_id}
                    vehicleRecord={vehicle}
                />
        })} 
        <AddVehicle />
    </div>
  )
}

export default VehicleList;
