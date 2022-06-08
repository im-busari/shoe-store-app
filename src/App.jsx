import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (id, sku) => {
    setCart((items) => {
      const itemInCart = items.find((item) => item.sku === sku);
      if (itemInCart) {
        // return new array with the matching item in place
        return items.map((i) => i.sku === sku ? {...i, quantity: i.quantity + 1} : i);
      } else {
        // Return new array with the new item appended
        return [...items, { id, sku, quantity: 1  }]
      }
    })
  }

  const updateQuantity = (sku, quantity) => {
    setCart((items) => {
      return quantity === 0 
        ? items.filter((i) => i.sku !== sku)
        : items.map((i) => i.sku === sku ? { ...i, quantity} : i);
    })
  }

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome...</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
