import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <p className="">Hey, {user.email}!</p>
      <form action={signOutAction}>
        <Button
          type="submit"
          className="py-2 px-4 bg-primary text-white rounded-full font-bold"
          variant={"outline"}
        >
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex items-center gap-8 0">
      <Link
        href="/sign-in"
        className="py-2 px-4 bg-primary text-white rounded-full font-bold"
      >
        Log in
      </Link>
    </div>
  );
}
