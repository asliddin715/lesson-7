"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default async function UserPage({ params }) {
  const router = useRouter();
  const response = await fetch(`https://fakestoreapi.com/users/${params.id}`);
  const user = await response.json();
  return user ? (
    <div className="flex-1">
      <h2>User page - {params.id}</h2>
      <p >{user.name.firstname}</p>
      <p> Id: {user.id}</p>
      <p > email: {user.email}</p>
      
      <div className="text-start">
        <button
          onClick={() => router.back()}
          className="p-[10px] bg-yellow-500"
        >
          orqaga
        </button>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center  ">
      <p className="text-gray-700 text-3xl">User not found.</p>
    </div>
  );
}
