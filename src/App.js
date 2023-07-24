import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Schedule from './components/schedule';
import Concepts from './components/concepts';
import Registration from './components/registration';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/schedule" component={Schedule} />
        <Route path="concepts" component={Concepts} />
        <Route path="/registration" component={Registration} /> 
      </Switch>
    </Router>
  );
};

export default App;

