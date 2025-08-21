import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { cart, updateCart, removeFromCart } = useContext(AppContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>No items in cart</p> : null}
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <input
            type="number"
            value={item.qty}
            onChange={(e) => updateCart(item.id, parseInt(e.target.value))}
            min="1"
          />
          <span>₹{item.price * item.qty}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      {cart.length > 0 && <Link to="/checkout"><button>Proceed to Checkout</button></Link>}
    </div>
  );
};

export default Cart;

