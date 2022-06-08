import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import useFetch from "../hooks/useFetch";
import PageNotFound from "./PageNotFound";

export default function Detail() {
  const { id } = useParams();
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
      <p>
        <button className="btn btn-primary" onClick={() => navigate("/cart")}>Add to cart</button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
