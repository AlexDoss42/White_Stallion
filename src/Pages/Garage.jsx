import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import VehicleList from '../Components/VehicleList';

function Garage() {

    
  return (
    <div>
        <Header />
        Welcome to your Garage!
          <VehicleList />
        <Footer /> 
    </div>
  )
}

export default Garage