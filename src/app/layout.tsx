import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// for smooth transition between pages


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AMC-NIAMT-ROCS",
    template: "%s | AMC-NIAMT-ROCS",
  },
  description: "Join the AMC-NIAMT-ROCS Workshop — a premier event exploring research opportunities in Computer Science, hosted by NIAMT. Engage with leading experts, discover cutting-edge innovations, and advance your academic and professional journey.",
  twitter: {
    card: "summary_large_image",
  }
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
