import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean Chavez | Backend-Heavy Full Stack Developer",
  description: "Portfolio of Jean Chavez, a Full Stack Developer specializing in Ruby on Rails, React, and Next.js.",
};

/**
 * The root layout component for the application.
 *
 * It wraps the entire application with the HTML and Body tags, applies global font styles,
 * and renders the children components.
 *
 * @param props - The component props.
 * @param props.children - The child components to be rendered within the layout.
 * @returns A React component representing the root HTML structure.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
