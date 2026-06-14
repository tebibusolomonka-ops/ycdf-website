import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YCDF — Youth and Cultural Development Foundation",
  description:
    "A dynamic Ethiopian non-governmental organization committed to empowering young people through leadership development, entrepreneurship, digital literacy, and community engagement.",
  keywords: [
    "YCDF",
    "Youth Development",
    "Ethiopia",
    "NGO",
    "Leadership",
    "Empowerment",
    "Community",
  ],
  openGraph: {
    title: "YCDF — Dreaming For Impact, Igniting Hope",
    description:
      "Empowering Ethiopian youth through leadership, entrepreneurship, and digital literacy programs.",
    type: "website",
    locale: "en_US",
    siteName: "YCDF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
