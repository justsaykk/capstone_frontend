import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 5;
  }

  // URLs
  // const BACKEND = process.env.REACT_APP_BACKEND;
  const BACKEND = process.env.REACT_APP_LOCAL_BACKEND;

  // API call
  const URL = BACKEND + "/api/user/register";
  function handleSubmit(event) {
    event.preventDefault();
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.log({ Error: error });
    });
  }

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div className="registration-name">
          <label for="registrationName">Name</label>
          <input
            type="input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="registration-email">
          <label for="registrationEmail">Email</label>
          <input
            type="input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="registration-pw">
          <label for="registrationPW">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" disabled={!validateForm()}>
          Register!
        </button>
        <button
          onClick={() => {
            navigate("/products");
          }}
        >
          Back
        </button>
      </form>
    </div>
  );
}

export default Registration;
