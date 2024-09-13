import { createClient } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

// Supabase client initialization
const supabase = createClient();

export async function POST(req: NextRequest) {
  try {
    const { email, productname }: { email: string; productname: string } =
      await req.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email is required" },
        { status: 400 }
      );
    }

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

    return NextResponse.json(
      { message: "Email added to the waitlist successfully", data },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
