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
    <>
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/concepts" component={Concepts} />
        <Route path="/registration" component={Registration} /> 
        </Routes>
    </Router>
    </>
  );
};

export default App;

