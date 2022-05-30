import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function ProductsPage() {
  const [productList, setProductList] = useState([]);

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

  console.log("product List = ", productList);

  return (
    <div>
      <NavBar />
      <div id="header">
        <h1>Itineraries</h1>
      </div>
      <div className="itinerariesList">
        {productList.map((el) => {
          return (
            <div className="product-wrapper">
              <div className="image-holder">
                <img src={""} alt={""} />
              </div>
              <div className="info-holder">
                <h2>{el.pName}</h2>
                <p>{el.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
