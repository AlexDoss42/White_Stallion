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
        <div>
          <header>
            <h1>El SEMENTAL BLANCO</h1>
          </header>
        </div>
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
        <div>
          <header>
            <h1>El SEMENTAL BLANCO</h1>
          </header>
        </div>

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

          <div>
            <input type="text" className='searchInput'/>
          </div>

        </div>

      </div>

    )
  } 
}

export default Header;