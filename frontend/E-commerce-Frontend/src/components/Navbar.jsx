import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { cart, user, setUser } = useContext(AppContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {user?.role === "admin" && <Link to="/admin">Admin</Link>}
      <Link to="/cart">Cart ({cart.length})</Link>
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;

