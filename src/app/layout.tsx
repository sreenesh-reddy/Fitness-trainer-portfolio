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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        
        {children}
      </body>
    </html>
  );
}
