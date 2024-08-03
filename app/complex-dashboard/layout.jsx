import React from "react";

export default function layout({ children, products, statistics, users }) {
  return (
    <div className="flex min-h-screen p-4 gap-4 ">
      {children}
      <div className="flex flex-col flex-1 gap-4">
        {users}
        {statistics}
      </div>
      {products}
    </div>
  );
}
