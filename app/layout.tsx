import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Michael Kupfer — Forward Deployed Engineer";
const description =
  "AI engineer shipping production agents into enterprise workflows. Voice agents, multi-agent LLM pipelines, RAG, and full-stack products — end to end.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-site-nine-xi-86.vercel.app"),
  title,
  description,
  keywords: [
    "Michael Kupfer",
    "Forward Deployed Engineer",
    "AI Engineer",
    "AI Agents",
    "Voice AI",
    "LLM",
    "Next.js",
    "Python",
    "Tel Aviv",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Michael Kupfer",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
