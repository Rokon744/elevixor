import { Armata } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "./metadata";

const ptsans = Armata({
  weight: "400",
  variable: "--ptsans",
  subsets: ["latin"],
});

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ptsans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
