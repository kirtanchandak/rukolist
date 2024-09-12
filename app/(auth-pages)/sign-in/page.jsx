"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    window.otpless = async (otplessUser) => {
      try {
        const res = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otplessUser }),
        });

        if (res.ok) {
          router.push("/launchproduct");
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center mt-14">
      <div id="otpless-login-page"></div>
    </div>
  );
}
