import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Concepts from './components/Concepts';
import Registration from './components/Registration';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/schedule" component={Schedule} />
        <Route path="concepts" component={Concepts} />
        <Route path="/registration" component={Registration} /> 
        </Routes>
    </Router>
  );
};

export default App;

