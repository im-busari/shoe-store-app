import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import useFetch from "../hooks/useFetch";
import PageNotFound from "./PageNotFound";
import { useCart } from "../contexts/cartContext";

export default function Detail() {
  const { id } = useParams();
  const [sku, setSku] = useState("");
  const navigate = useNavigate();
  const { data: product, loading } = useFetch(`products/${id}`)
  const { dispatch } = useCart();

  if (loading) return <Spinner />
  if (!product) return <PageNotFound />

  // Display these products details
  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>

      <select id="size" value={ sku } onChange={(e) => setSku(e.target.value)}>
        <option value="">Select a size</option>
        { product.skus.map((s) => (
          <option key={s.sku} value={s.sku}>{s.size}</option>
        ))}
      </select> 

      <p>
        <button disabled={!sku} className="btn btn-primary" onClick={() => { 
          dispatch({ type: "add", id, sku }); 
          navigate("/cart")
          }}>Add to cart</button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
