import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Velvet — Premium Adult Entertainment",
  description:
    "Thousands of exclusive HD videos. Curated categories. Zero ads. The premium adult entertainment platform designed for the discerning viewer.",
  keywords: ["adult entertainment", "premium", "HD videos", "streaming"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
