import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { inter, mono, devanagari } from "../_fonts/font";
import { Navigation } from "../_components/Navigation";
import { Footer } from "../_components/Footer";

export const metadata = {
  title: "Gajendrasingh Dawar",
  description:
    "Full Stack Developer building web applications with Next.js, Node.js, and AI. Based in Indore, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${devanagari.variable}`}
    >
      <body
        className={`
        font-sans
        antialiased
        min-h-svh
        w-full
        relative
        bg-slate1/96 text-slate11 selection:bg-crimsonA3 selection:text-slate12
        `}
      >
        <div className="min-h-svh flex flex-col">
          <Navigation />
          <main className="flex-1 w-full max-w-2xl mx-auto px-6 md:px-0">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
