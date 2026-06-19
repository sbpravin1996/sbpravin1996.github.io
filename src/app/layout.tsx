import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pravin Senkottiayan Baskaran | Data Engineer",
  description:
    "A personal portfolio for a data engineer focused on Python, SQL, analytics, and reliable data workflows."
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
