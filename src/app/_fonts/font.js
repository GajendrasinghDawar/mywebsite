import { Inter, Eczar, Roboto, Roboto_Mono } from "next/font/google"
import localFont from "next/font/local"

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

export const devanagari = Eczar({
  subsets: ["devanagari"],
  display: "fallback",
  style: "normal",
  variable: "--font-devanagari",
})

export const neue_montreal_medium = localFont({
  src: "./NeueMontreal-Medium.otf",
})

export const neue_montreal_regular = localFont({
  src: "./NeueMontreal-Regular.otf",
  variable: "--font-neue-montreal-regular",
})

export const testTiemposHeadline_mediumItalic = localFont({
  src: "./TestTiemposHeadline-MediumItalic.otf",
  variable: "--font-test-tiempos-headline-medium-italic",
})

export const geistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

export const geistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})
