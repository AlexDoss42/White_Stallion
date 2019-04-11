import React, { Component } from 'react';
import './App.css';
import ServiceLog from './Components/ServiceLog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          
          <h1>Manos Arribas</h1>
          
        </header>

        <ServiceLog />

      </div>
    );
  }
}

export default App;
