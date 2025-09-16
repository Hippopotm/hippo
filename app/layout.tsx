import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hippo Homes - Révolutionnez votre recherche d'appartement",
  description:
    "L'application qui transforme la location d'appartements avec des visites virtuelles 3D, des profils vérifiés et un matching intelligent.",
  generator: "v0.app",
  icons: {
    icon: "/hippo-logo-green.png",
    shortcut: "/hippo-logo-green.png",
    apple: "/hippo-logo-green.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
