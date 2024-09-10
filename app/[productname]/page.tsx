"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductName } from "@/app/actions/actions";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import EmailForm from "@/components/EmailForm";

const ProductPage = () => {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct: any = await getProductName();
        setProduct(fetchedProduct);
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
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <Image src="/speaker.svg" alt="speaker" width={120} height={120} />
          </div>
          <div className="text-center mb-2">
            <h1 className="text-4xl md:text-[55px] font-semibold leading-none md:leading-tight text-[#482307]">
              We are coming Soon
            </h1>
            <p className="text-2xl font-bold md:text-[26px] text-[#A1724E]/60">
              {product}.ai
            </p>
          </div>
          <EmailForm productname={product} />
          <div>
            <p className="text-[#B1ACA4] text-[12px] text-center mt-2">
              we care about your data in our{" "}
              <Link
                href="/privacy-policy"
                className="underline transition-all duration-200 hover:text-black/70"
              >
                privacy policy
              </Link>
            </p>
            {/* Social Media */}
            <div className="flex justify-center items-center gap-2 mt-6">
              <Link href="" className="relative w-[22px] h-[22px]">
                <FaLinkedin />
              </Link>
              <Link href="" className="relative w-[22px] h-[22px]">
                <FaGithub />
              </Link>
              <Link href="" className="relative w-[22px] h-[22px]">
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
