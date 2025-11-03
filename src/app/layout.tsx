import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wireline 101 — Taking It Back to Basics with Cutting-Edge Tech",
  description:
    "Wireline 101 documents the craft, decodes the tools, and answers the questions manuals never cover — field-first perspective, tech-forward execution.",
  openGraph: {
    type: "website",
    title: "Wireline 101 — Built for Field Pros",
    description:
      "Precision wireline insight with modern tooling. Ask Snell, read clean explanations, and execute with clarity.",
    images: ["/images/wireline-truck-hero1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wireline 101 — Built for Field Pros",
    description:
      "Field-first perspective. Tech-forward execution. Ask Snell and get real answers.",
    images: ["/images/wireline-truck-hero1.png"],
  },
  metadataBase: typeof window === "undefined" ? new URL("https://wireline101.vercel.app") : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B0B0C] text-white`}>
        <Navbar />
        {/* prevent overlap with sticky nav */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

