"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { addProductName } from "../otpLess-actions/actions";

// Define the User type
interface User {
  userId: string;
}

const ProductEntry = () => {
  const [productName, setProductName] = useState<string>(""); // State for the product name
  const [user, setUser] = useState<User | null>(null); // State for the user object
  const router = useRouter(); // Router instance

  // Fetch the user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user); // Set user data
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  // If user data is still loading
  if (!user) {
    return <p>Loading...</p>;
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData();
    formData.append("productname", productName);
    formData.append("user_id", user.userId);

    try {
      await addProductName(formData);
      router.push("/admin"); // Redirect after successful submission
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product");
    }
  };

  return (
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
        Create
      </button>
    </div>
  );
};

export default ProductEntry;
