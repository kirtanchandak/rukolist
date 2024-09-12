"use server";

import { createClient } from "@/utils/supabase/server";

export const addProductName = async (formData: FormData) => {
  const supabase = createClient();
  const productname = formData.get("productname");
  const user_id = formData.get("user_id");

  if (!productname) {
    throw new Error("Product name is required");
  }

  if (!user_id) {
    throw new Error("User id is required");
  }

  const { data, error } = await supabase
    .from("products")
    .insert([{ productname: productname, user_id: user_id }]);

  if (error) {
    throw new Error("Error adding product!");
  }

  return data;
};
