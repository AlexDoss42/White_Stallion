import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ServiceLog from '../Components/ServiceLog';

function VehicleDetails() {
    const { vehicle_id } = useParams();
    
  return (
    <div>
        <Header />
        <ServiceLog vehicle_id={vehicle_id} />
        <Footer /> 
    </div>
  )
}

export default VehicleDetails;
