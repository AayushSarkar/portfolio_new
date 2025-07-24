// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { Suspense } from "react";
import NextUIProviderWrapper from "@/app/providers/NextUIProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Aayush Sarkar | Portfolio",
  description: "Web Developer | MERN Stack | Tech Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <NextUIProviderWrapper>
          <Suspense fallback={<div className="text-center"></div>}>
            <Navbar />
          </Suspense>
          <main className="min-h-screen">{children}</main>
        </NextUIProviderWrapper>
      </body>
    </html>
  );
}
