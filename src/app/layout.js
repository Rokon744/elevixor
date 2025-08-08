import { PT_Sans } from "next/font/google";
import "./globals.css";

const ptsans = PT_Sans({
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
        className={`${ptsans.className} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
