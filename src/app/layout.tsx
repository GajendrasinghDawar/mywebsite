import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { noto } from "../_fonts/font";
import { Footer } from "../_components/Footer";

export const metadata = {
  title: "Gajendrasingh Dawar",
  description:
    "Personal website of Gajendrasingh Dawar, a web developer skilled in Javascript(typescript) and web technologies such as Reactjs,Nodejs. based in Indore, (M.P.) India.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`relative inset-0 z-0 bg-fixed bg-center bg-cover h-full ${noto.variable} ${noto.className}`}
    >
      <body>
        <main className="md:mx-auto whitespace-normal  md:max-w-2xl px-4 md:px-0 ">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
