import { React, useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function CartPage({ cart }) {
  // const BACKEND = process.env.REACT_APP_BACKEND;
  const BACKEND = process.env.REACT_APP_LOCAL_BACKEND;
  const cartDetails = [];

  // Pruning Arrays
  const prune = (array) => {
    array.splice(-1);
    console.log(array);
  };

  const URL = BACKEND + "/api/product/addtocart";
  useEffect(() => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        productId: cart,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        cartDetails.push(data);
        // if (cartDetails.length > 1) {
        //   prune(cartDetails);
        // }
        console.log("data:", data);
        console.log("cartDetails[]: ", cartDetails);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Your upcoming Adventure!</h1>
      <div>
        {cartDetails.map((el) => {
          console.log("I'm mapping!");
          const name = el.pName;
          const price = el.price.toString();
          return (
            <div>
              <h3>{name}</h3>
              <p>USD {price}</p>
              <button>Book my trip now!</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;
