import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function DetailedActivities({ dActivities }) {
  const [details, setDetails] = useState();
  // URLs
  const BACKEND = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate();

  // API
  const URL = BACKEND + "/api/product/details";
  useEffect(() => {
    // console.log("I am Fetching from Detailed Activities");
    // console.log("using dActivities: ", dActivities);
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        productId: dActivities,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setDetails(data);
        console.log("Details: ", details);
      });
  }, []);

  // Convert Data from JSON to Arrays
  const keys = [];
  const values = [];

  return (
    <div>
      <NavBar />
      <div id="header">
        <h1>Details</h1>
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>

      <div>{}</div>
    </div>
  );
}
