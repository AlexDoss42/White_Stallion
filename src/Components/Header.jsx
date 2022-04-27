import React, { Component } from 'react';

class Header extends Component {

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

// Toggles the search bar, which doesn't work at the moment, when you click on the search icon 
      
      (this.props.ToggleSearchBar === false) ?

// Header with Search Bar hidden

      <div className='headerComponent'>

{/* Home Button */}

        <div className='logo'>

          <i 
          className="fas fa-car-side fa-2x"
          onClick= {() => {this.props.toggleHome()}}
          ></i>

        </div>
        
        <h1>El SEMENTAL BLANCO</h1>

        <div className='navIcons'>

{/* Add Icon Button */}

          <i 
          className="fas fa-plus fa-2x"
          onClick= {() => {this.props.toggleAdd()}}
          ></i>

{/* Search Icon */}

          <i className="fas fa-search fa-2x"
          onClick= {() => {this.props.toggleSearch()}}
          ></i>

        </div>

      </div>

      :

// Header with Search bar showing

      <div className='headerComponent'>

        <div className='logo'>

          <i 
          className="fas fa-car-side fa-2x"
          onClick= {() => {this.props.toggleHome()}}
          ></i>

        </div>

        <h1>El SEMENTAL BLANCO</h1>

        <div className='navPlusSearchBar'>

          <div className='navIcons'>

            <i 
            className="fas fa-plus fa-2x"
            onClick= {() => {this.props.toggleAdd()}}
            ></i>

            <i className="fas fa-search fa-2x"
            onClick= {() => {this.props.toggleSearch()}}
            ></i>

          </div>

{/* Search Box */}

          <input type="text" 
          className='searchInput'
          onChange = { this.props.search }/>
         
        </div>

      </div>

    )
  } 
}

export default Header;