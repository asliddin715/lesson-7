import Link from "next/link";
import React from "react";

export default async function ProductsPage() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div className="component flex-1">
      <h2 className="font-bold text-2xl">ProductsPage</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link
              className="text-blue-400 underline"
              href={"complexs-dashboard/product"}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
