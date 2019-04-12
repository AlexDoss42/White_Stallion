import React, { Component } from 'react';
import AddServiceRecord from './AddServiceRecord'

class Header extends Component {


  render() {

    return (
      <div className='headerComponent'>
        <div className='logo'>
          <i 
          class="fas fa-car-side fa-2x"
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
          class="fas fa-plus fa-2x"
          onClick= {() => {this.props.toggleAdd()}}
          ></i>
          <i class="fas fa-search fa-2x"></i>
        </div>
      </div>
    )
  } 
}

export default Header;