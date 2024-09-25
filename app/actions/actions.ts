"use server";

import { createClient } from "@/utils/supabase/server";

export const addProductInfo = async (formData: FormData) => {
  const supabase = createClient();
  const productname = formData.get("productname");
  const templateId = formData.get("templateId");

  if (!productname) {
    throw new Error("Product name is required");
  }

  if (!templateId) {
    throw new Error("Template id is required");
  }

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) {
    throw new Error("Error fetching user!");
  }

  if (!user) {
    throw new Error("User is not logged in!");
  }

  console.log("hiii");

  console.log(productname, templateId);

  const { data, error } = await supabase
    .from("products")
    .insert([{ productname, templateId, user_id: user.id }]);

  if (error) {
    throw new Error("Error adding product!");
  }

  return data;
};

export const fetchProductInfo = async (productname: string) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("templateId")
    .eq("productname", productname)
    .single();

  if (error) {
    throw new Error("Error fetching product info");
  }

  return data;
};

export const addEmail = async (formData: FormData) => {
  const supabase = createClient();
  const email = formData.get("email");
  const productname = formData.get("productname");

  if (!email || !productname) {
    throw new Error("Email and product name are required");
  }

  const { data: productData, error: productError } = await supabase
    .from("products")
    .select("id, emails")
    .eq("productname", productname)
    .single();

  if (productError || !productData) {
    throw new Error("Product not found!");
  }

  const productId = productData.id;
  const currentEmails = productData.emails || [];

  if (currentEmails.includes(email)) {
    throw new Error("Email is already in the waitlist!");
  }

  const updatedEmails = [...currentEmails, email];

  const { data: updateData, error: updateError } = await supabase
    .from("products")
    .update({ emails: updatedEmails })
    .eq("id", productId);

  if (updateError) {
    throw new Error("Error updating product with new email!");
  }

  return updateData;
};

export const getProductNames = async () => {
  const supabase = createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) {
    throw new Error("Error fetching user!");
  }

  if (!user) {
    throw new Error("User is not logged in!");
  }

  // Fetch the product names for the authenticated user
  const { data, error } = await supabase
    .from("products")
    .select("productname")
    .eq("user_id", user.id);

  if (error) {
    throw new Error("Error fetching product names: " + error.message);
  }

  return data;
};

export const fetchProductDetails = async (productName: string) => {
  const supabase = createClient();
  if (!productName) {
    throw new Error("Product name is required");
  }

  // Retrieve the currently authenticated user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) {
    throw new Error("Error fetching user!");
  }

  if (!user) {
    throw new Error("User is not logged in!");
  }

  // Fetch the product details for the authenticated user
  const { data, error } = await supabase
    .from("products")
    .select("id, user_id, productname, emails")
    .eq("productname", productName)
    .eq("user_id", user.id)
    .single();

  if (error) {
    throw new Error(`Error fetching product details: ${error.message}`);
  }

  if (!data) {
    throw new Error(
      "Product not found or you do not have access to this product"
    );
  }

  return data;
};
