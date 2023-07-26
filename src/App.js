import React from 'react';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Concepts from './components/Concepts';
import Registration from './components/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    //<Router>
       <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Schedule" element={<Schedule/>} />
      <Route path="/Concepts" element={<Concepts/>} /> 
      <Route path="/Registration" element={<Registration/>} /> 
      <Route path="/Navbar" element={<Navbar/>} /> 
      </Routes> 
    // {/* </Router> */}
  
)};

export default App;

