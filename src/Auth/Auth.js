import React from 'react';
import { useUser } from 'reactfire';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';

function Auth() {
  return (
    <div className="App">
        <Login/>
        <Signup/>
    </div>
  );
}

export default Auth;