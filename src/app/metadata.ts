import type { Metadata } from "next";

//W---------{ Meta data for SCO }----------
export const siteMetadata: Metadata = {
  title: "Elevixor | Best Online Service provider in Bangladesh",
  description:
    "Elevixor is a modern and custom service provide for any kind. This is Elevixor official website",
  keywords: [
    "Elevixor",
    "Digital Marketing",
    "SEO Optimization",
    "online courses",
    "Web Services",
    "education resources",
  ],
  authors: [{ name: "Elevixor" }],
  applicationName: "Elevixor",
  category: "education and services",
  metadataBase: new URL("https://www.elevixor.online"),
  alternates: {
    canonical: "https://www.elevixor.online",
    languages: {
      "en-US": "https://www.elevixor.online/en",
      "bn-BD": "https://www.elevixor.online/bn",
    },
  },
  openGraph: {
    title: "Elevixor | Best Online Service provider in Bangladesh",
    description:
      "Elevixor is a modern and custom service provide for any kind. This is Elevixor official website",
    url: "https://www.elevixor.online",
    siteName: "Elevixor",
//    images: [
//      {
//        url: "https://learn-hub-academy-frontend.vercel.app/og-image.jpg",
//        width: 1200,
//        height: 630,
//        alt: "LearnHub Academy Preview",
//      },
//    ],
    locale: "en_US",
    type: "website",
  },
//  icons: {
//    icon: "/favicon.ico",
//    shortcut: "/favicon-16x16.png",
//    apple: "/apple-touch-icon.png",
//  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
