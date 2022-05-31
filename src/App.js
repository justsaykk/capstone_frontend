import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { useState } from "react";

function App() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registration />} />
          <Route
            path="/products"
            element={
              <ProductsPage
                productList={productList}
                setProductList={setProductList}
                setCart={setCart}
              />
            }
          />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
