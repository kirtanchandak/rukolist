import Image from "next/image";
import Link from "next/link";
import AuthButton from "./header-auth";

export default function Navbar() {
  return (
    <>
      <div className="py-8 md:px-24 px-4">
        <div className="flex items-center justify-between md:px-20 px-4 md:py-6 py-3 bg-white rounded-full">
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="rounded-full"
              width={40}
              height={40}
              src="https://play-lh.googleusercontent.com/O8mvDQlw4AwmGfUrh4lviZD_PwwhRHz2etA25F77SbXrm3qEHOt2826aNkKar4D0yw"
              alt="logo"
            />
            <p className="text-2xl font-bold">rukolist</p>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:flex gap-4 hidden">
              <p className="font-semibold">Pricing</p>
              <p className="font-semibold">Contact</p>
            </div>
            <AuthButton />
          </div>
        </div>
      </div>
    </>
  );
}
