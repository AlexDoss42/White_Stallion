import React from 'react'
import { useParams } from 'react-router-dom';

import Footer from '../Components/Footer'
import GasLog from '../Components/GasLog';
import Header from '../Components/Header'
import ServiceLog from '../Components/ServiceLog';
import Vehicle from '../Components/Vehicle';

function VehicleDetails() {
    const { vehicle_id } = useParams();
    
  return (
    <div>
        <Header />
        <Vehicle />
        <ServiceLog vehicle_id={vehicle_id} />
        <GasLog vehicle_id={vehicle_id} />
        <Footer /> 
    </div>
  )
}

export default VehicleDetails;
