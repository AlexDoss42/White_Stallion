import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function AddServiceRecord() {
  return (
    <div className="App" id='AddServicePage'>
          
          <Header 
          toggleHome = { this.toggleHome }
          toggleAdd = { this.toggleAdd }
          toggleSearch = { this.toggleSearch }
          ToggleSearchBar = {this.state.ToggleSearchBar }
          // search = { this.search }
          />
          
          <AddServiceRecord 
          toggleHome = { this.toggleHome }/>
          
          <Footer /> 

        </div>
  )
}

export default AddServiceRecord