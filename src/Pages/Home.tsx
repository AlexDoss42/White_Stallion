import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ServiceLog from '../Components/ServiceLog';

function Home() {

  return (
    <div className="App" id='AddServicePage'>
          
          <Header 
          toggleHome = { this.toggleHome }
          toggleAdd = { this.toggleAdd }
          toggleSearch = { this.toggleSearch }
          ToggleSearchBar = {this.state.ToggleSearchBar }
          // search = { this.search }
          />

          <ServiceLog 
          // searchValue = { this.state.searchValue }
          />

          <Footer /> 

        </div>
  )
}

export default Home;
