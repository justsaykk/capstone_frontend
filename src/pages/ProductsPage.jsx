import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function ProductsPage({ productList, setProductList, setCart }) {
  // URLs
  const BACKEND = process.env.REACT_APP_BACKEND;

  // API
  const URL = BACKEND + "/api/product";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);

  const handleSubmit = () => {
    // Code here...
    console.log("i clicked submit");
  };



  return (
    <div>
      <NavBar />
      <div id="header">
        <h1>Itineraries</h1>
      </div>
      <div className="itinerariesList">
        {productList.map((el) => {
          return (
            <div className="itinerary-wrapper">
              <div className="image-holder">
                <img src={""} alt={""} />
              </div>
              <div className="info-holder">
                <br />
                <h3>{el.pName}</h3> <br />
                <p className="peak-description">{el.description}</p> <br />
              </div>
              <div>
                <button>Find Out More</button>
                <button onClick={handleSubmit}>Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
