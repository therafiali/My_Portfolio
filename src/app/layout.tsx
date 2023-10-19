import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Porfolio App - Rafi Ali",
  description: "Portfolio Web App by Muhammad Rafi Ali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
