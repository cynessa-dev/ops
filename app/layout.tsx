import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ops | Operate with confidence",
  description: "Tool that helps you operate your services with confidence. It provides various tools to help you provide, monitor, and optimize your services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=bar_chart,check,schedule,upload_file&display=swap" />
        </head>
        <body
            className={`${nunitoSans.variable} ${nunito.variable} antialiased`}
        >
            {children}
        </body>
    </html>
  );
}
