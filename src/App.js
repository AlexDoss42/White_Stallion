import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddServiceRecord from './Components/AddServiceRecord';
import Home from "./pages/Home";

import './App.css';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add-service" element={<AddServiceRecord />}/>
        </Routes>
    </Router>
  )

}

export default App;
