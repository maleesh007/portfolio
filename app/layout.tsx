import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// next/font downloads each font at build time and serves it from your own
// domain, so it loads fast and doesn't flash. `variable` creates a CSS
// variable that globals.css uses. Only the weights we use are loaded.
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-grotesk",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plex-mono",
});

// Shown in the browser tab and in Google search results.
export const metadata: Metadata = {
  title: "Maleesha Basnayake — AI & Machine Learning",
  description:
    "Computer Science graduate (AI) from Swinburne. Applied AI projects in LLM applications, computer vision and model evaluation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // lang="en-AU" tells browsers and screen readers the page is Australian English.
    <html
      lang="en-AU"
      className={`${grotesk.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}