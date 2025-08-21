import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/login";
import Admin from "./components/Admin";
import AppProvider, { AppContext } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;

