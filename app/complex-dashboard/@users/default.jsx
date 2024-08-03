import Link from "next/link";
import React from "react";

export default async function UsersPage() {
  const response = await fetch("https://fakestoreapi.com/users");
  const students = await response.json();
  return (
    <div className="component flex-1">
      <h2 className="font-bold text-xl ">Products page</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <Link className="text-blue-400 underline" href={`users/${s.id}`}>
              {s.user}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
