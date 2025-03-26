import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Siok Khoon Poh | Energy4Life Bioenergetic Healing',
  description: 'Restore your mental, physical and emotional health with Energy4Life - A Bioenergetic Healing System.',
  generator: 'v0.dev'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main className='min-h-screen'>{children}</main>
        <Footer />
        <GoogleAnalytics gaId='G-XC9P0CLEN6' /> {/* Replace with your actual measurement ID */}
      </body>
    </html>
  )
}

import './globals.css'
