import type { Metadata } from "next";
import { Poppins, Roboto, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VETRIVA - Pet Care & Wellness",
  description: "Complete Pet Care & Wellness",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${fraunces.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#fbf8f5]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
