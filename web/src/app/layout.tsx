import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VisiFrame — Turn website inspiration into a design of your own",
  description:
    "Paste the websites you love, describe what you're building, and receive three original, development-ready homepage designs for your brand. Never a copy of a source site.",
  /**
   * icon.svg and apple-icon.png in this directory are picked up automatically by
   * Next's file convention; the PNGs are listed for browsers that ignore SVG
   * favicons.
   */
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "VisiFrame — Turn website inspiration into a design of your own",
    description:
      "Three original homepage directions, generated from the sites you admire. Built for developers, designers, freelancers and founders.",
    type: "website",
    siteName: "VisiFrame",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisiFrame — Turn website inspiration into a design of your own",
    description:
      "Three original homepage directions, generated from the sites you admire.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
