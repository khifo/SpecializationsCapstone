import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Schedule from './components/schedule';
import Concepts from './components/concepts';
import Registration from './components/registration';


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

