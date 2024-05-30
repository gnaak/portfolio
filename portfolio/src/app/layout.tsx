import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import DarkModeToggle from "@/components/DarkMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이근학 포트폴리오",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>

      </head>
      <body className={inter.className}>
        {children}
        <DarkModeToggle />
      </body>
    </html>
  );
}
