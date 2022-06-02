import React, { useEffect } from "react";
import NavBar from "../components/NavBar";

export default function DetailedActivities() {
  // URLs
  const BACKEND = process.env.REACT_APP_BACKEND;

  // API
  const URL = BACKEND + "/api/product";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        // console.log(data);
      });
  }, []);
    
  return (
    <div>
      <NavBar />
      <h3>Hello World</h3>
    </div>
  );
}
