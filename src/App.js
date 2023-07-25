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
    <Router>
      <Routes>
        <Route path="/Home" component={Home} />
        <Route path="/Schedule" component={Schedule} />
        <Route path="/Concepts" component={Concepts} />
        <Route path="/Registration" component={Registration} /> 
        <Route path="/Navbar" component={Navbar} /> 
        </Routes>
    </Router>
  );
};

export default App;

