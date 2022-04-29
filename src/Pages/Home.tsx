import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ServiceLog from '../Components/ServiceLog';

function Home() {

  return (
    <div className="App" id='AddServicePage'>   
        <Header />
        <ServiceLog />
        <Footer /> 
    </div>
  )
}

export default Home;
