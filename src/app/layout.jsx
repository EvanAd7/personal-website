import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "./common/components/NavBar";
import Footer from "./common/components/Footer";

const inter = Inter({ 
  subsets: ["latin"]
});

export const metadata = {
  title: "Evan Adami",
  description: "Evan Adami's personal website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-gray-900 text-gray-100`}
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
