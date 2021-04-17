import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from './Components/Account/Dashboard/Dashboard';
import Auth from './Auth/Auth';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/account/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
