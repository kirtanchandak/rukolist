"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { addProductInfo } from "@/app/actions/actions";

const templates = [
  { id: 1, name: "Modern Design" },
  { id: 2, name: "Minimal Design" },
];

const TemplateSelection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null); // Keep template ID as a number
  const [productName, setProductName] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const productNameParam = searchParams.get("productName");
    if (productNameParam) setProductName(productNameParam);
  }, [searchParams]);

  const handleTemplateSelect = (templateId: number) => {
    setSelectedTemplate(templateId);
  };

  const handleSubmit = async () => {
    if (!selectedTemplate || !productName) {
      return alert("Please select a template.");
    }

    const formData = new FormData();
    formData.append("productname", productName);
    formData.append("templateId", selectedTemplate.toString()); // Convert number to string for formData

    try {
      await addProductInfo(formData); // Adjust the API call as necessary
      router.push("/admin"); // Navigate to the next page (dashboard)
    } catch (error) {
      console.error("Error adding product and template:", error);
      alert(error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl">Select Your Waitlist Design</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleTemplateSelect(template.id)}
            className={`border p-4 rounded cursor-pointer ${
              selectedTemplate === template.id
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            <h3>{template.name}</h3>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className={`bg-green-500 text-white mt-4 py-2 px-4 rounded ${
          !selectedTemplate ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={!selectedTemplate}
      >
        Confirm & Create
      </button>
    </div>
  );
};

export default TemplateSelection;
