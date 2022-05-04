import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Vehicle from '../Components/Vehicle'

function Garage() {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        Axios.get('/api/vehicle/1').then(res => { 
            console.log(123, res);
          setVehicles(res.data);
        })
        .catch(err => console.log('Houston we have a problem: ', err))
      }, [])
  return (
    <div>
        <Header />
        {vehicles.map(vehicle => {
          return <Vehicle
                    // key={vehicle.vehicle_id}
                    vehicleRecord={vehicle}
                />
        })} 
        <Footer /> 
    </div>
  )
}

export default Garage