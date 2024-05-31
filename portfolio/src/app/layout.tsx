import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import DarkModeToggle from "@/components/DarkMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이근학 포트폴리오",
  description: "FE개발자 이근학 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="ZEH9an07MXfybFG1man-w14tXUm_ec_cKXbJE0IXsLQ"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className={inter.className}>
        {children}
        <DarkModeToggle />
      </body>
    </html>
  );
}
