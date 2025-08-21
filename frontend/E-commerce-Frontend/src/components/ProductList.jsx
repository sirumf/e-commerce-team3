import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const ProductList = () => {
  const { products, addToCart } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products">
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-grid">
        {filtered.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
  ))}
      </div>
    </div>
  );
};

export default ProductList;

