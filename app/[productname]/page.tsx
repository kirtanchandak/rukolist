"use client";

import { useState, useEffect, Suspense } from "react";
import { fetchProductInfo } from "@/app/actions/actions";
import dynamic from "next/dynamic";
import templateMap from "../templateMap";

interface ProductPageProps {
  params: { productname: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { productname } = params;
  const [templateId, setTemplateId] = useState<number | null>(null);
  const [TemplateComponent, setTemplateComponent] = useState<React.FC | null>(
    null
  );

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productData = await fetchProductInfo(productname);
        setTemplateId(productData.templateId);

        // Dynamically load the template component based on the templateId
        const loadTemplate = async () => {
          const component = await templateMap[productData.templateId]();
          setTemplateComponent(() => component.default);
        };

        loadTemplate();
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productname]);

  return (
    <Suspense fallback={<p>Loading template...</p>}>
      {TemplateComponent ? (
        <TemplateComponent productname={productname} />
      ) : (
        <p>Loading...</p>
      )}
    </Suspense>
  );
};

export default ProductPage;
