import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import { withRouter } from "react-router-dom";
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

const Signup = (props) => {
  const firebase = useFirebaseApp();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    error: "",
    message: "",
  });

  const [message, setMessage] = useState({
    message: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        result.user.updateProfile({
          displayName: user.firstname,
        });

        const myURL = { url: "http://localhost:3000/" };

        result.user
          .sendEmailVerification(myURL)
          .then(() => {
            setUser({
              ...user,
              verifyEmail: `Welcome ${user.nickname}. To continue please verify your email.`,
            });
          })
          .catch((error) => {
            setUser({
              ...user,
              error: error.message,
            });
          });

        setMessage({
          message:
            "You have successfully signed up! A confirmation email will be sent to you. Please confirm to log into your account.",
        });

        firebase.auth().signOut();
      })
      .catch((error) => {
        setUser({
          ...user,
          error: error.message,
        });
      });
  };

  return (
    <Main className="Signup">
      <Navbar />
      <Container className="Signup-Wrapper">
        <Inner>
          <ImageDiv></ImageDiv>
          <FormDiv>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                onChange={handleChange}
              />
              <br />
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
              <button type="submit">Sign Up</button>
            </form>
            {user.error && <h4>{user.error}</h4>}
            {message.message && <h4>{message.message}</h4>}
          </FormDiv>
        </Inner>
        <Footer />
      </Container>
    </Main>
  );
};

export default withRouter(Signup);
