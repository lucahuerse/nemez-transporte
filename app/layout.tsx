import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "sonner"

const figtree = Figtree({ 
  subsets: ["latin"],
  variable: "--font-figtree",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nemez-transporte.de"),
  title: {
    default: "Nemez Transporte | Ihr Spezialist für Kleintransporte",
    template: "%s | Nemez Transporte",
  },
  description: "Ob Expresslieferung, Umzug oder komplette Haushaltsauflösung - wir denken mit! Ihr zuverlässiger Partner in Stuttgart und Umgebung.",
  keywords: ["Kleintransport", "Umzug Stuttgart", "Entrümpelung", "Expresstransport", "Eiltransport", "Stuttgart", "Möbeltaxi"],
  authors: [{ name: "Mustafa Nemez" }],
  creator: "Mustafa Nemez",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://nemez-transporte.de",
    siteName: "Nemez Transporte",
    title: "Nemez Transporte | Kleintransporte & Umzüge",
    description: "Professionelle Kleintransporte, Umzüge und Entrümpelungen in Stuttgart. Schnell, zuverlässig und fair.",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Nemez Transporte Stuttgart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nemez Transporte | Kleintransporte & Umzüge",
    description: "Professionelle Kleintransporte, Umzüge und Entrümpelungen in Stuttgart.",
    images: ["/images/hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${figtree.variable} font-sans antialiased`}>
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
