import { Eczar, EB_Garamond } from "next/font/google"

export const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
})

export const devanagari = Eczar({
  subsets: ["devanagari"],
  display: "fallback",
  style: "normal",
  variable: "--font-devanagari",
})
