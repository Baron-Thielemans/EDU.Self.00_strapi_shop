import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white min-h-[125vh]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
