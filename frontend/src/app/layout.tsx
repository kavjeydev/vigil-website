import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReactLenis from "@studio-freight/react-lenis/types";

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const LarkeBold = localFont({
  src: "/fonts/LarkeNeueBold.ttf",
  variable: "--font-lark-bold",
  weight: "900",
});

const LarkeRegular = localFont({
  src: "/fonts/LarkeNeueRegular.ttf",
  variable: "--font-lark-regular",
  weight: "500",
});

const LarkeThin = localFont({
  src: "/fonts/LarkeNeueThin.ttf",
  variable: "--font-lark-thin",
  weight: "100",
});

const BebasRegular = localFont({
  src: "/fonts/BebasNeue-Regular.woff",
  variable: "--font-bebas-regular",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Vigil",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${LarkeRegular.variable} ${LarkeThin.variable} ${LarkeBold.variable} ${BebasRegular.variable} antialiased`}
      >

          {children}
      </body>
    </html>
  );
}
