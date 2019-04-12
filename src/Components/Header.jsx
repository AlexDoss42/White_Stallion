import React, { Component } from 'react';

class Header extends Component {


  render() {

    return (
      (this.props.ToggleSearchBar === false) ?

      <div className='headerComponent'>

        <div className='logo'>
          <i 
          className="fas fa-car-side fa-2x"
          onClick= {() => {this.props.toggleHome()}}
          ></i>

        </div>
        
        <h1>El SEMENTAL BLANCO</h1>

        <div className='navIcons'>
          <i 
          className="fas fa-plus fa-2x"
          onClick= {() => {this.props.toggleAdd()}}
          ></i>
          <i className="fas fa-search fa-2x"
          onClick= {() => {this.props.toggleSearch()}}
          ></i>
        </div>
      </div>

      :

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

          <input type="text" 
          className='searchInput'
          onChange = { this.props.search }/>
         
        </div>

      </div>

    )
  } 
}

export default Header;