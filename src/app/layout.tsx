import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ready Get - Apps That Connect People",
  description: "Ready Get builds apps that help people stay connected. Home of Postie and Fable.",
  openGraph: {
    title: "Ready Get - Apps That Connect People",
    description: "Ready Get builds apps that help people stay connected. Home of Postie and Fable.",
    url: "https://readyget.app",
    siteName: "Ready Get",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ready Get - Apps That Connect People",
    description: "Ready Get builds apps that help people stay connected. Home of Postie and Fable.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
