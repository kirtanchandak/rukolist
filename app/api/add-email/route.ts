import { createClient } from "@/utils/supabase/server";
import { NextApiRequest, NextApiResponse } from "next";

// Supabase client initialization
const supabase = createClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, productname }: { email: string; productname: string } =
      req.body;

    // Validate email
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "A valid email is required" });
    }

    try {
      // Update the correct row by productname and append the email to the emails array
      const { data, error } = await supabase
        .from("products") // Your products or waitlist table
        .update({
          emails: supabase.rpc("array_append", {
            column: "emails",
            value: email,
          }),
        }) // Append email to emails array
        .eq("productname", productname); // Find row by productname

      if (error) {
        throw error;
      }

      return res
        .status(200)
        .json({ message: "Email added to the waitlist successfully", data });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
