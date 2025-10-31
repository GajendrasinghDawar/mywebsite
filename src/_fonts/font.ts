import { Eczar, EB_Garamond, Noto_Sans, Poppins } from "next/font/google"

export const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700"],
})

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const devanagari = Eczar({
  subsets: ["devanagari"],
  display: "fallback",
  style: ["normal"],
  variable: "--font-devanagari",
  weight: ["400", "600", "700"],
})

export const noto = Noto_Sans({
  subsets: ["latin", "devanagari"],
  variable: "--font-noto-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});
