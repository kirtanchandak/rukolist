import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "./globals.css";
import AuthButton from "@/components/header-auth";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <div className="flex items-center justify-between md:px-20 px-4 py-6 bg-primary">
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="rounded-full"
              width={40}
              height={40}
              src="https://play-lh.googleusercontent.com/O8mvDQlw4AwmGfUrh4lviZD_PwwhRHz2etA25F77SbXrm3qEHOt2826aNkKar4D0yw"
              alt="logo"
            />
            <p className="text-2xl font-bold text-secondary">rukolist</p>
          </Link>
          <AuthButton />
        </div>
        <main className="flex-grow">{children}</main>
        <footer className="bg-primary text-secondary w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-4">
          <p>
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              rukolist
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
