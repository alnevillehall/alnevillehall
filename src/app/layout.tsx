import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Al Neville Hall | Player Portfolio",
  description:
    "Al Neville Hall — Business Systems Analyst and Systems Automation Specialist in Kingston, Jamaica. Internal tools, workflow automation, dashboards, and operational systems.",
  keywords: [
    "Al Neville Hall",
    "Business Systems Analyst Jamaica",
    "Systems Automation Specialist Jamaica",
    "Next.js Developer Jamaica"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
