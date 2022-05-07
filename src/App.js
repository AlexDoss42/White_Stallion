import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddServiceRecord from './Components/AddServiceRecord';
import Home from "./Pages/Home";
import Garage from './Pages/Garage';
import VehicleDetails from './Pages/VehicleDetails';

import './App.css';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/add-service" element={<AddServiceRecord />}/>
          <Route path="/garage" element={<Garage />} />
          <Route path="/vehicle_details/:vehicle_id" element={<VehicleDetails />} />
          <Route path="/" element={<Home />}/>
        </Routes>
    </Router>
  )

}

export default App;
