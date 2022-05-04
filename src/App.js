import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddServiceRecord from './Components/AddServiceRecord';
import Home from "./Pages/Home";

import './App.css';
import Garage from './Pages/Garage';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/add-service" element={<AddServiceRecord />}/>
          <Route path="/garage" element={<Garage />} />
          <Route path="/" element={<Home />}/>
        </Routes>
    </Router>
  )

}

export default App;
