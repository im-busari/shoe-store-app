import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import useFetch from "../hooks/useFetch";
import PageNotFound from "./PageNotFound";

export default function Detail({ addToCart }) {
  const { id } = useParams();
  const skuRef = useRef();
  const navigate = useNavigate();
  const { data: product, loading } = useFetch(`products/${id}`)

  if (loading) return <Spinner />
  if (!product) return <PageNotFound />

  // Display these products details
  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>

      {/* The skuRef holds a reference to this select HTML input */}
      <select ref={skuRef} id="size">
        <option value="">Select a size</option>
        { product.skus.map((s) => (
          <option key={s.sku} value={s.sku}>{s.size}</option>
        ))}
      </select> 

      <p>
        <button className="btn btn-primary" onClick={() => { 
          const sku = skuRef.current.value;
          addToCart(id, sku); 
          navigate("/cart")
          }}>Add to cart</button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
