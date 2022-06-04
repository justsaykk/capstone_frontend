import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function ProductsPage({
  productList,
  setProductList,
  setCart,
  setDActivities,
}) {
  // URLs
  const BACKEND = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate();

  // API
  const URL = BACKEND + "/api/product";
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => {
        setProductList(data);
      });
  }, []);

  const handleAddToCart = (event) => {
    setCart(event.target.value);
    navigate("/cart");
  };

  const handleFindOutMore = (event) => {
    setDActivities(event.target.value);
    navigate("/details");
  };

  return (
    <div>
      <NavBar />
      <div id="header">
        <h1>Itineraries</h1>
      </div>
      <div>
        {productList.map((el) => {
          return (
            <div>
              <div>
                <img src={""} alt={""} />
              </div>
              <div>
                <br />
                <h3>{el.pName}</h3> <br />
                <p>{el.description}</p> <br />
              </div>
              <div>
                <button onClick={handleFindOutMore} value={el.id}>
                  Find Out More
                </button>
                <button onClick={handleAddToCart} value={el.id}>
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
