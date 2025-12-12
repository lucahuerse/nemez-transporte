import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

const figtree = Figtree({ 
  subsets: ["latin"],
  variable: "--font-figtree",
})

export const metadata: Metadata = {
  title: "Nemez Transporte | Ihr Spezialist für Kleintransporte",
  description: "Ob Expresslieferung, Umzug oder komplette Haushaltsauflösung - wir denken mit!",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
