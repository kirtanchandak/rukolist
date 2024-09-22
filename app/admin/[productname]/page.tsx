// app/admin/product/[productname]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { fetchProductDetails } from "@/app/actions/actions";
import { PiBookThin, PiCardsThreeThin } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Emails from "@/components/dashboard/Emails";
import { IoIosLogOut } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import Product from "@/components/dashboard/Product";

interface Product {
  id: string;
  user_id: string;
  productname: string;
  emails: string[];
}

const ProductDetailsPage = ({
  params,
}: {
  params: { productname: string };
}) => {
  const { productname } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("product");
  const searchParams = useSearchParams();
  const section = searchParams.get("section") || "product";
  const [emails, setEmails] = useState<string[]>([]);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = await fetchProductDetails(productname);
        setProduct(data);
        setEmails(data.emails);
      } catch (error: any) {
        setError(error.message || "An error occurred");
      }
    };
    getProductDetails();
  }, [productname]);

  useEffect(() => {
    setActiveTab(section);
  }, [section]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  let ContentComponent;
  switch (section) {
    case "emails":
      ContentComponent = <Emails emails={emails} />;
      break;
    default:
      ContentComponent = <Product productname={product.productname} />;
      break;
  }

  const tabs = [
    {
      id: "product",
      label: "Product",
      href: `?section=product`,
      icon: <PiBookThin />,
    },
    {
      id: "emails",
      label: "Emails",
      href: `?section=emails`,
      icon: <PiCardsThreeThin />,
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 py-6 border-b">
              <div className="flex items-center justify-center">
                <Image
                  width={50}
                  height={50}
                  src="https://play-lh.googleusercontent.com/O8mvDQlw4AwmGfUrh4lviZD_PwwhRHz2etA25F77SbXrm3qEHOt2826aNkKar4D0yw"
                  alt="logo"
                  className="rounded-full mr-3"
                />
                <Link href="/" className="text-2xl font-normal">
                  {product.productname}
                </Link>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-col gap-1">
                {tabs.map((tab) => (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center rounded-xl text-sm font-normal py-3 px-4 gap-4 ${
                      activeTab === tab.id
                        ? "bg-[#333333] text-white"
                        : "text-gray-600"
                    }`}
                  >
                    {tab.icon} {tab.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4">
            <Link
              href="/admin"
              className="flex items-center ml-2 cursor-pointer"
            >
              <IoIosArrowRoundBack className="text-black text-xl" />
              <span className="font-medium text-sm ml-2">Back to products</span>
            </Link>
          </div>
        </div>
      </div>
      <main className="ml-72 pt-16 max-h-screen overflow-auto">
        {ContentComponent}
      </main>
    </div>
  );
};

export default ProductDetailsPage;
