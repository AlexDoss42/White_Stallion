import React, { Component } from 'react'

class Footer extends Component {

  render() {

    return (
      <div>
        <header>
          <div className='contactInfo'>
            <h5>White Stallion Inc.</h5>
            <h6>972-789-1234</h6>
            <h6>localhost:3000</h6>
          </div>
          <div className='version'>
            <h6>v 1.0.0</h6>
          </div>
        </header>
      </div>
    )
  } 
}

export default Footer;