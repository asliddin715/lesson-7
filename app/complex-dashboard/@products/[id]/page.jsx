"use client";
import React from "react";
import { useRouter } from "next/navigation";


export default async function ProductPage({ params }) {
  const router = useRouter();
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await response.json();
  return (
    <div className="flex-1">
      <h2 >Product page - {params.id}</h2>

      <p>
        <span >title:</span> {product.title}
      </p>
      <p>
      category: {product.category}   
      </p>
      <p>
        <span >Price:</span>Price: {product.price}
      </p>


      <div className="text-start">
        <button
          onClick={() => router.back()}
          className="p-[10px] bg-yellow-500"
        >
          orqaga
        </button>
      </div>
    </div>
  );
}
