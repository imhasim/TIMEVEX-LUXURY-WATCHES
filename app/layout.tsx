import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TimeVex | Luxury Watches",
  description:
    "Discover TimeVex — an exquisite collection of luxury analog, chronograph, smart, and digital watches for Men and Women. Crafted with precision, measured in centuries.",
  keywords: ["luxury watches", "men watches", "women watches", "chronograph", "automatic watches", "timevex"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0B0B0D] text-[#F5F1E8] font-sans antialiased selection:bg-[#C9A66B] selection:text-black flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "#161619",
              border: "1px solid rgba(201, 166, 107, 0.3)",
              color: "#F5F1E8",
            },
          }}
        />
      </body>
    </html>
  );
}
