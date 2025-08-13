import { Armata } from "next/font/google";
import "./globals.css";

const ptsans = Armata({
  weight: "400",
  variable: "--ptsans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elevixor",
  description: "This is our official Elevixor website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ptsans.className} antialiased bg-[#0a0a23] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
