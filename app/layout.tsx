import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Companies | NowTech",
  description: "Administrative system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
