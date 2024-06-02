import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import DarkModeToggle from "@/components/DarkMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gnaak's",
  description: "FE개발자 이근학 포트폴리오",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "ZEH9an07MXfybFG1man-w14tXUm_ec_cKXbJE0IXsLQ",
  },
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
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content="ZEH9an07MXfybFG1man-w14tXUm_ec_cKXbJE0IXsLQ"
        />
        <meta
          name="naver-site-verification"
          content="b04871ffbc9a3d5f2480fe0818fb3b9f4e7d97dd"
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
