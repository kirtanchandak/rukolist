"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addProductName } from "../actions/actions";

const ProductEntry = () => {
  const [productName, setProductName] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("productname", productName);

    try {
      await addProductName(formData);
      router.push("/admin");
    } catch (error) {
      console.error("Error adding product:", error);
      alert(error);
    }
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        console.log(data);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl">Enter Your Product Name</h2>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
          className="border p-2 mt-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white mt-4 py-2 px-4 rounded"
        >
          Create {user.name}
        </button>
      </div>
    </>
  );
};

export default ProductEntry;
