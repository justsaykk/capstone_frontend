import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function DetailedActivities({ dActivities }) {
  const [details, setDetails] = useState([]);
  // URLs
  const BACKEND = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate();

  // API
  const URL = BACKEND + "/api/product/details";
  useEffect(() => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        productID: dActivities,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div id="header">
        <h1>Itineraries</h1>
      </div>
      <button onClick={navigate("/products")}>Back</button>
    </div>
  );
}
