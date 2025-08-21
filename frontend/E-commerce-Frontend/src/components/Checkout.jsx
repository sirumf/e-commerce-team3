import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Checkout = () => {
  const { cart } = useContext(AppContext);
  const [confirmed, setConfirmed] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (confirmed) return <h2>✅ Order Placed Successfully!</h2>;

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} x {item.qty} = ₹{item.qty * item.price}
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={() => setConfirmed(true)}>Confirm Order</button>
    </div>
  );
};

export default Checkout;

