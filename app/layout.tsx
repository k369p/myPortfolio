import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Keval Patel | Software Engineer",
  description: "Portfolio of Keval Patel, showcasing web development and AI/ML projects.",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Optional for other formats
          <link rel="icon" type="image/png" href="/favicon.png" />
         */}
          <link rel="icon" type="image/png" href="/kevalpatel.png"/>
        
      </head>
      <body className={`${outfit.className} bg-sky-50 dark:bg-sky-950 text-gray-700 dark:text-sky-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
