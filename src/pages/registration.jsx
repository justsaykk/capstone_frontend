import React, { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const BACKEND = process.env.REACT_APP_BACKEND;

  function validateForm() {
    return email.length > 0 && password.length > 5;
  }

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
      </form>
    </div>
  );
}

export default Registration;
