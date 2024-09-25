"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import EmailForm from "../EmailForm";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-r-md"
    >
      {pending ? "Joining..." : "Join Waitlist"}
    </Button>
  );
}

export default function Template2({ productname }: { productname: string }) {
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8 text-center">
        <div>
          <h1 className="text-5xl font-extrabold text-indigo-900 mb-4">
            Get Early Access to Our App
          </h1>
          <p className="text-xl text-indigo-700 mb-8">
            Join our exclusive waitlist and be the first to experience the
            future of productivity.
          </p>
        </div>

        <EmailForm productname={productname} />

        {message && (
          <div
            className={`flex items-center justify-center p-4 mb-8 rounded-md ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 mr-2" />
            ) : (
              <AlertCircle className="w-5 h-5 mr-2" />
            )}
            {message.text}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">
              Early Access
            </h3>
            <p className="text-indigo-700">
              Be among the first to try our revolutionary app before it's
              available to the public.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">
              Exclusive Benefits
            </h3>
            <p className="text-indigo-700">
              Enjoy special perks and features available only to our waitlist
              members.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">
              Priority Support
            </h3>
            <p className="text-indigo-700">
              Get dedicated assistance and be a part of shaping the future of
              our app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
