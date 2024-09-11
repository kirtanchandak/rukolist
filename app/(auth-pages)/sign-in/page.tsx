"use client";

import { useEffect } from "react";
import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { OAuthButtons } from "../oAuth-signin";

declare global {
  interface Window {
    otpless: (user: any) => void;
  }
}

export default function Login({ searchParams }: { searchParams: Message }) {
  useEffect(() => {
    window.otpless = (otplessUser) => {
      console.log(otplessUser);
    };
  }, []);

  return (
    <>
      {/* OTP-less Login */}
      <div className="flex items-center justify-center mt-14">
        <div id="otpless-login-page"></div>
      </div>
    </>
  );
}
