import React, { Component } from 'react';

class Header extends Component {


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