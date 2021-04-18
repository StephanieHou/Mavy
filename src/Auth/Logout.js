import React from "react";
import {withRouter} from 'react-router-dom';
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

const Logout = (props) => {
  // Import firebase
  const firebase = useFirebaseApp();

  // Log out function
  const handleClick = (e) => {
    firebase.auth().signOut();
    props.history.push('/');
  };

  return (
    <div>
      <button type="button" onClick={handleClick} className="Logout-Link">
        Log Out
      </button>
    </div>
  );
};

export default withRouter(Logout);
