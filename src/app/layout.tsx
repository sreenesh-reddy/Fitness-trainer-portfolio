import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header/Header"




export const metadata: Metadata = {
  title: "K Vinay",
  description: "fitness trainer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body>
        <Header/>
        
        {children}
      </body>
    </html>
  );
}
