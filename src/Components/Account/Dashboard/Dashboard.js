import React from "react";
import { Link } from "react-router-dom";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import styled from "styled-components";
import { Main, Navbar, Footer } from "../../Styled";

const Container = styled.div`
  width: 100%;
`;

const Dashboard = () => {
  const firebase = useFirebaseApp();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.email);
    } else {
      console.log("Not Logged In.");
    }
  });

  return (
    <Main className="Account-Dashboard">
      <Navbar />
      <Footer />
    </Main>
  );
};

export default Dashboard;
