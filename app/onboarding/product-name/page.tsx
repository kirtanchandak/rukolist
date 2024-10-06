"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductEntry = () => {
  const [productName, setProductName] = useState("");
  const router = useRouter();

  // Move to the template selection page, passing productName in the URL
  const handleSubmit = () => {
    if (!productName) return alert("Product name cannot be empty");
    router.push(
      `/onboarding/template-selection?productName=${encodeURIComponent(productName)}`
    );
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-primary">
      <h2 className="text-3xl text-white">Enter Your Product Name</h2>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter product name"
        className="rounded-md border p-2 mt-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white mt-4 py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default ProductEntry;
