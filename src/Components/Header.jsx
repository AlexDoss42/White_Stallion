import React, { Component } from 'react';

function Header() {

  // Allows you to push the home button while on the add page and return to home but does nothing on the home page

  const toggleHome = () => {
    this.setState({
      Homepage: true
    })
  }

// Allows you to toggle to the add a service record page but does nothing on the add page

  const toggleAdd = () => {
    this.setState({
      Homepage: false
    })
  }

  // Toggles the search bar off and on all pages

  const toggleSearch = () => {
    this.setState({
      ToggleSearchBar: !this.state.ToggleSearchBar
    })
  }

// WORK IN PROGRESS!!! Grabs the searchbar input to filter service log

  const search = (searchInput) => {
    console.log(searchInput)
    this.setState({
      searchValue: searchInput.target.value
    })
  }

    return (
      (this.props.ToggleSearchBar === false) ?
      <div className='headerComponent'>
        <div className='logo'>
          <i 
          className="fas fa-car-side fa-2x"
          onClick= {() => {toggleHome()}}
          ></i>
        </div>      
        <h1>El SEMENTAL BLANCO</h1>
        <div className='navIcons'>
          <i 
          className="fas fa-plus fa-2x"
          onClick= {() => {toggleAdd()}}
          ></i>
          <i className="fas fa-search fa-2x"
          onClick= {() => {toggleSearch()}}
          ></i>
        </div>
      </div>
      :

// Header with Search bar showing

      <div className='headerComponent'>
        <div className='logo'>
          <i 
          className="fas fa-car-side fa-2x"
          onClick= {() => {toggleHome()}}
          ></i>
        </div>
        <h1>El SEMENTAL BLANCO</h1>
        <div className='navPlusSearchBar'>
          <div className='navIcons'>
            <i 
            className="fas fa-plus fa-2x"
            onClick= {() => {toggleAdd()}}
            ></i>
            <i className="fas fa-search fa-2x"
            onClick= {() => {toggleSearch()}}
            ></i>
          </div>
          <input type="text" 
          className='searchInput'
          onChange = { search }/>    
        </div>
      </div>
    ) 
}

export default Header;
