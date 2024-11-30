import { eb_garamond } from "@/fonts/font"
import "./globals.css"
// import { Analytics } from "@vercel/analytics/react"

import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Gajendrasingh Dawar",
  description: "It's a personal website of Gajendrasingh Dawar.",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={ `relative inset-0 z-0 bg-fixed bg-center bg-cover h-full ${eb_garamond.variable}` }
    >
      <body
        className="relative antialiased h-full w-full selection:text-grass11 selection:bg-yellow5 selection:text-gray12"
      >
        { children }
        <Footer />
        {/* <Analytics /> */ }
      </body>
    </html>
  )
}
