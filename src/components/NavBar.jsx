import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link className="button" to="/">
        Home
      </Link>
      <Link className="button" to="/products">
        Products
      </Link>
      <Link className="button" to="/cart">
        My Cart
      </Link>
      <Link className="button" to="/bookings">
        My Bookings
      </Link>
      <Link className="button" to="/login">
        Login
      </Link>
    </div>
  );
}
