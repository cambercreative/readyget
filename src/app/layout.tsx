import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ready Get - Apps that help you connect and preserve what matters most",
  description: "Ready Get builds apps that help you connect and preserve what matters most. Makers of Postie and Fable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
