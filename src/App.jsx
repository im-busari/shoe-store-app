import React, { useReducer } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import cartReducer from "./reducers/cartReducer";
import Checkout from "./pages/Checkout";

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);






  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome...</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail dispatch={dispatch} />} />
            <Route path="/cart" element={<Cart cart={cart} dispatch={dispatch} />} />
            <Route path="/checkout" element={<Checkout cart={cart} dispatch={dispatch} />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
