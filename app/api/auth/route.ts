import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const { otplessUser } = await request.json();

  const userPayload = {
    userId: otplessUser.userId,
    email: otplessUser.identities[0].identityValue,
    name: otplessUser.identities[0].name,
    profilePic: otplessUser.identities[0].picture,
  };

  // Create a JWT token
  const token = jwt.sign(userPayload, process.env.JWT_SECRET || "", {
    expiresIn: "7d", // Set the expiry as needed
  });

  // Set the token in a cookie
  const response = NextResponse.json({ message: "Logged in successfully" });
  response.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
