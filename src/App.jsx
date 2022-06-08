import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome...</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
