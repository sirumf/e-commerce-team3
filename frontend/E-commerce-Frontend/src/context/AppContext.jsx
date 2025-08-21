import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // {role: "admin"|"user"}
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Phone", price: 25000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 2000, category: "Fashion" },
    { id: 4, name: "Watch", price: 3000, category: "Fashion" },
  ]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateCart = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{ user, setUser, products, cart, addToCart, updateCart, removeFromCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

