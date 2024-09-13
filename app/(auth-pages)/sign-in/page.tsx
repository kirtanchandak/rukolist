import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { OAuthButtons } from "../oAuth-signin";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <OAuthButtons />
      </div>
    </>
  );
}
