import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import VehicleList from '../Components/VehicleList';

function Home() {

  return (
    <div id='AddServicePage'>   
        <Header />
        <VehicleList />
        <Footer /> 
    </div>
  )
}

export default Home;
