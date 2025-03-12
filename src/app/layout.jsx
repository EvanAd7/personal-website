import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "@/app/common/components/Navbar";
import Footer from "@/app/common/components/Footer";

const inter = Inter({ 
  subsets: ["latin"]
});

export const metadata = {
  title: "Evan Adami",
  description: "Evan Adami's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
