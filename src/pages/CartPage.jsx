import { React, useState } from "react";
import NavBar from "../components/NavBar";

function CartPage() {
  // States
  const [cart, setCart] = useState();

  return (
    <div>
      <NavBar />
      <h1>Hello World!</h1>
      <h1>You are at the Cart Page</h1>
    </div>
  );
}

export default CartPage;
