import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from './Components/Account/Dashboard/Dashboard';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import './App.css';
import Transactions from './Components/Transactions/Transactions';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account/dashboard" component={Dashboard} />
        <Route exact path="/transactions" component={Transactions} />
      </div>
    </Router>
  );
}

export default App;
