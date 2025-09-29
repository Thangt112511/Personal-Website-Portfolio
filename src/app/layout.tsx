import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thang Tran | Business Data Analyst",
  description: "Portfolio and projects of Thang Tran, Business Data Analyst.",
  openGraph: {
    title: "Thang Tran | Business Data Analyst",
    description: "Portfolio and projects of Thang Tran, Business Data Analyst.",
    url: "https://dubiousmangolover34.vercel.app/", // your live URL
    siteName: "Thang Tran Portfolio",
    images: [
      {
        url: "/front.jpg", // put your preview image in /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Thang Tran Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thang Tran | Business Data Analyst",
    description: "Portfolio and projects of Thang Tran, Business Data Analyst.",
    images: ["/front.jpg"],
  },
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
        {children}
      </body>
    </html>
  );
}
