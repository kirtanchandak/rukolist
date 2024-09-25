"use client";

import React, { useState, useTransition } from "react";
import { CiMail } from "react-icons/ci";
import toast from "react-hot-toast";
import { addEmail } from "@/app/actions/actions";

interface EmailFormProps {
  productname: string;
}

const EmailForm: React.FC<EmailFormProps> = ({ productname }) => {
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    form.append("productname", productname);

    setLoading(true); // Set loading to true when starting the submission

    try {
      await addEmail(form);
      toast.success("Thank you for subscribing 🎉");
      target.reset();
    } catch (error) {
      console.error("Error adding email:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false); // Reset loading to false after the submission completes
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-2"
    >
      <div className="relative">
        <label
          htmlFor="email"
          className="absolute inset-y-0 left-0 pl-2.5 flex items-center"
        >
          <CiMail />
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Join our waiting list..."
          className="lg:w-[300px] py-2 px-3 rounded-md text-base pl-8 shadow-button-shadow border bg-white/50 focus-visible:outline-none focus-visible:bg-white"
        />
      </div>
      <button
        disabled={isPending || loading} // Disable button when pending or loading
        type="submit"
        className="bg-blue-700 text-white shadow-button-shadow font-semibold py-2 px-3 rounded-md text-base transition-all duration-200"
      >
        {loading ? "Subscribing..." : "Subscribe"}{" "}
        {/* Change button text based on loading state */}
      </button>
    </form>
  );
};

export default EmailForm;
