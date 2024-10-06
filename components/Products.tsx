"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getProductNames } from "@/app/actions/actions";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" bg-primary">
      <div className="h-screen pt-14">
        <div className="flex items-center justify-center gap-8 px-4">
          <h1 className="text-4xl font-extrabold text-center text-secondary">
            Your Products
          </h1>
          <Link
            href="/onboarding/product-name"
            className="flex gap-2 items-center bg-secondary p-2 rounded-md"
          >
            New Product <AiOutlinePlus />
          </Link>
        </div>
        <div className="flex items-center justify-center pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {loading
              ? // Show skeleton loader while loading
                Array.from({ length: 3 }).map((_, index) => (
                  <div className="w-52" key={index}>
                    <Skeleton height={200} />
                    <Skeleton width={`80%`} className="mt-4 mx-auto" />
                  </div>
                ))
              : products.map((product) => (
                  <div className="w-52" key={product.productname}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`/admin/${product.productname}`);
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
  );
};

export default ProductList;
