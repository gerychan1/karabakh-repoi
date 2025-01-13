import type { Metadata } from 'next'
import type { JSX, PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karabakh - Innovate. Accelerate. Defend.',
  description: 'Our Mountains, Our Identity - Defense Technology Innovation Hub',
}

export default function RootLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}