import React, { Component } from 'react'

class Header extends Component {

  render() {

    return (
      <div className='headerComponent'>
        <div className='logo'>
          <i class="fas fa-car-side fa-2x"></i>
        </div>
        <div>
          <header>
            <h1>El SEMENTAL BLANCO</h1>
          </header>
        </div>
        <div className='navIcons'>
          <i class="fas fa-plus fa-2x"></i>
          <i class="fas fa-search fa-2x"></i>
        </div>
      </div>
    )
  } 
}

export default Header;