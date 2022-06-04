import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Check if email field & password field is empty
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // const BACKEND = process.env.REACT_APP_LOCAL_BACKEND;
  const BACKEND = process.env.REACT_APP_BACKEND;
  const URL = BACKEND + "/api/user/login";
  function handleSubmit(event) {
    event.preventDefault();
    fetch(URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "email address not found") {
          alert("user not found, please register");
          navigate("/register");
        } else if (data.msg === "Wrong Password") {
          alert("Wrong Password");
        } else {
          alert("Welcome!");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log({ Error: error });
      });
  }

  // Need to expect something in return to redirect users to landing page.

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="email-input">
          <label for="email-input">email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="password-input">
          <label for="password-input">password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default LoginPage;
