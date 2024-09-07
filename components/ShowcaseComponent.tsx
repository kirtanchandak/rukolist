"use client";

import { useState, useEffect } from "react";
import { getProductName } from "@/app/actions/actions";

const ShowcaseComponent = () => {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct: any = await getProductName();
        setProduct(fetchedProduct); // Set the product directly
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold">Showcase Component</h3>
      <p>{product}</p> {/* Display the product */}
    </div>
  );
};

export default ShowcaseComponent;
