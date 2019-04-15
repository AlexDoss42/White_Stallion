import React, { Component } from 'react';
import './App.css';

import ServiceLog from './Components/ServiceLog'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AddServiceRecord from './Components/AddServiceRecord';

class App extends Component {
  constructor() {
    super()

// Allows for toggling between pages and search bar appearing

    this.state = {
      Homepage: true,
      ToggleSearchBar: false,
      searchValue: ''
    }
  }

// Allows you to push the home button while on the add page and return to home but does nothing on the home page

  toggleHome = () => {
    this.setState({
      Homepage: true
    })
  }

// Allows you to toggle to the add a service record page but does nothing on the add page

  toggleAdd = () => {
    this.setState({
      Homepage: false
    })
  }

  // Toggles the search bar off and on all pages

  toggleSearch = () => {
    this.setState({
      ToggleSearchBar: !this.state.ToggleSearchBar
    })
  }

// WORK IN PROGRESS!!! Grabs the searchbar input to filter service log

  search = (searchInput) => {
    console.log(searchInput)
    this.setState({
      searchValue: searchInput.target.value
    })
  }

  render() {
    return (
      this.state.Homepage ?

// Home page

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

      :

// Add a service record page

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

    );
  }
}

export default App;
