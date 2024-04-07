import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppinsFont = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const georgiaFont = localFont({
  variable: "--font-georgia",
  src: [
    {
      path: "../../public/fonts/georgia/georgia-regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/georgia/georgia-bold.ttf",
      weight: "600",
    },
  ],
});

export const metadata: Metadata = {
  title: "Nancy Verma | Graphics Designer",
  description:
    "I'm a passionate product designer from India with over 3 years of experience in creating user-centric, delightful and human experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} ${georgiaFont.variable} font-poppins w-full max-w-[1920px] ml-[50%] -translate-x-[50%]`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
