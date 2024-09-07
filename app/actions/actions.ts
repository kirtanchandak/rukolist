"use server";

import { createClient } from "@/utils/supabase/server";

export const addProductName = async (formData: FormData) => {
  const supabase = createClient();
  const productname = formData.get("productname");

  if (!productname) {
    throw new Error("Product name is required");
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

  const { data, error } = await supabase
    .from("products")
    .insert([{ productname: productname, user_id: user.id }]);

  if (error) {
    throw new Error("Error adding product!");
  }

  return data;
};

export const getProductName = async () => {
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

  const { data, error } = await supabase
    .from("products")
    .select("productname")
    .eq("user_id", user.id)
    .single();

  if (error) {
    throw new Error("Error fetching product!");
  }

  return data.productname;
};
