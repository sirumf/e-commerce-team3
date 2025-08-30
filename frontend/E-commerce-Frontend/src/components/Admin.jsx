import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Admin = () => {
  const { products } = useContext(AppContext);

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Manage Products</p>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name} - ₹{p.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;

