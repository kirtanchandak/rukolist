import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] });

export const metadata: Metadata = {
  title: "rukolist",
  description: "Launch you prouduct in a single link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children} <Toaster />
      </body>
    </html>
  );
}
