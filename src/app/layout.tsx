import "./globals.css"

import { Analytics } from "@vercel/analytics/react"
import { inter, mono, devanagari } from "../_fonts/font"
import { Navigation } from "../_components/Navigation"
import { Footer } from "../_components/Footer"

export const metadata = {
  title: "Gajendrasingh Dawar",
  description:
    "Full Stack Developer building web applications with Next.js, Node.js, and AI. Based in Indore, India.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${devanagari.variable}`}
    >
      <body className="font-sans">
        <div className="mx-auto max-w-2xl px-6 md:px-0">
          <Navigation />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
