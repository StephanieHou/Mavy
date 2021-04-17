import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Auth from './Auth/Auth';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Auth} />
      </div>
    </Router>
  );
}

export default App;
