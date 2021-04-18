import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import styled from "styled-components";
import { Main, Navbar, Footer } from "../Components/Styled";

const Container = styled.div`
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 38%,
    rgba(251, 192, 79, 1) 38%
  );
`;

const Inner = styled.div`
  display: grid;
  margin: 0 auto;
  width: 500px;
  grid-auto-flow: column;
  grid-template-columns: 50% 50%;
  align-items: center;
  height: 65vh;
  min-height: 500px;
`;

const FormDiv = styled.div`
  width: 100%;
`;

const ImageDiv = styled.div`
  background: var(--color-1);
  height: 200px;
  text-align: center;
  width: 200px;
  margin: 0 auto;
  border-radius: 5px;
`;

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const firebase = useFirebaseApp();

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        if (!result.user.emailVerified) {
          setUser({
            ...user,
            error: "Please verify your email to continue.",
          });
          firebase.auth().signOut();
        } else {
          setUser({
            ...user,
            error: "You have successfully logged in.",
          });
          props.history.push("/account/dashboard");
        }
      })
      .catch((error) => {
        setUser({
          ...user,
          error: error.message,
        });
      });
  };

  return (
    <Main className="Login">
      <Navbar />
      <Container className="Login-Wrapper">
        <Inner>
          <ImageDiv></ImageDiv>
          <FormDiv>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <br />
              <button type="submit">Log in</button>
            </form>
            {user.error && <h4>{user.error}</h4>}
          </FormDiv>
        </Inner>
        <Footer />
      </Container>
    </Main>
  );
};

export default withRouter(Login);
