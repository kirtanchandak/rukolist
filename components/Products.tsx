"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getProductNames } from "@/app/actions/actions";

interface Product {
  productname: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductNames();
        setProducts(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className=" bg-primary">
        <div className="h-screen pt-14">
          <h1 className="text-4xl font-extrabold text-center text-secondary">
            Your Products
          </h1>
          <div className="flex items-center justify-center pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {products.map((product) => (
                <div className="w-52" key={product.productname}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/admin/product?=${product.productname}`);
                    }}
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                      {product.productname}
                    </h5>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
