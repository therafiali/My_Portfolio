import type { Metadata } from "next";
import "./globals.css";
import favicon from "@/app/favicon.ico"
import Wrapper from "@/components/Shared/Wrapper";

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
      <body>
        <Wrapper>
        {children}
        </Wrapper>
        </body>
    </html>
  );
}
