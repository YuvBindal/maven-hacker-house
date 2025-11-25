import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maven Hacker House - Singapore's First Hacker House",
  description: "Turn ideas into reality. Join Singapore's first hacker house and build your startup with a community of builders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
