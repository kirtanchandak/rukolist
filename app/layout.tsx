import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Initialize the Poppins font
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] });

// Define metadata for the app
export const metadata: Metadata = {
  title: "rukolist",
  description: "Launch you prouduct in a single link",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          id="otpless-sdk"
          type="text/javascript"
          src="https://otpless.com/v2/auth.js"
          data-appid="4QH9YPPV7IJFG6V28EXE"
        ></script>
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
