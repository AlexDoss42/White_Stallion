import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddVehicle from '../Components/AddVehicle';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Vehicle from '../Components/Vehicle';

function Garage() {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        axios.get('/api/vehicle/1').then(res => { 
          setVehicles(res.data);
        })
        .catch(err => console.log('Houston we have a problem: ', err))
      }, [])
  return (
    <div>
        <Header />
        {vehicles.map(vehicle => {
          return <Vehicle
                    key={vehicle.vehicle_id}
                    vehicleRecord={vehicle}
                />
        })} 
        <AddVehicle />
        <Footer /> 
    </div>
  )
}

export default Garage