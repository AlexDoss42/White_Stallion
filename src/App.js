import React, { Component } from 'react';
import './App.css';

import ServiceLog from './Components/ServiceLog'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AddServiceRecord from './Components/AddServiceRecord';

class App extends Component {
  constructor() {
    super()

    this.state = {
      Homepage: true
    }
  }

  toggleHome = () => {
    this.setState({
      Homepage: true
    })
  }

  toggleAdd = () => {
    this.setState({
      Homepage: false
    })
  }

  render() {
    return (
      this.state.Homepage ?

        <div className="App" id='AddServicePage'>
          <Header 
          toggleHome = { this.toggleHome }
          toggleAdd = { this.toggleAdd }/>
          <ServiceLog />
          <Footer /> 
        </div>

      :

      <div className="App" id='AddServicePage'>
          <Header 
          toggleHome = { this.toggleHome }
          toggleAdd = { this.toggleAdd }/>
          <AddServiceRecord 
          toggleHome = { this.toggleHome }/>
          <Footer /> 
        </div>



    );
  }
}

export default App;
