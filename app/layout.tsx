import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Lora } from 'next/font/google'

const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Floraculum - Identify Plants with AI',
  description: 'Upload a photo and identify plants using our AI-powered tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lora.variable}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}