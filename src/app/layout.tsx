import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | Software Developer",
  description:
    "A personal portfolio for a software developer focused on accessible, polished web products."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
