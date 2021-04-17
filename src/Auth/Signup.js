import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

const Signup = () => {
  const firebase = useFirebaseApp();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    error: "",
  });

  // onChange function
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  // Submit function (Create account)
  const handleSubmit = (e) => {
    e.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(result => {
      // Update the nickname
      result.user.updateProfile({
        displayName: user.nickname,
      });

      // URL of my website.
      const myURL = { url: 'http://localhost:3000/' }

      // Send Email Verification and redirect to my website.
      result.user.sendEmailVerification(myURL)
        .then(() => {
          setUser({
            ...user,
            verifyEmail: `Welcome ${user.nickname}. To continue please verify your email.`,
          })
        })
        .catch(error => {
          setUser({
            ...user,
            error: error.message,
          })
        })

      // Sign Out the user.
      firebase.auth().signOut();
    }).catch(error => {
      // Update the error
      setUser({
        ...user,
        error: error.message,
      })
    })
  };

  return (
    <div>
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
    </div>
  );
};

export default Signup;
