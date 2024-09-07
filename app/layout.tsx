import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Initialize the Poppins font
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] });

// Define metadata for the app
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
