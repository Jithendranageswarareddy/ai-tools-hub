import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AI Tools Hub - 100+ Free Online Tools',
    template: '%s | AI Tools Hub'
  },
  description: 'Free online tools for productivity, text manipulation, and more. No login required.',
  keywords: ['online tools', 'productivity tools', 'text tools', 'free tools', 'web tools'],
  authors: [{ name: 'AI Tools Hub Team' }],
  creator: 'AI Tools Hub',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-tools-hub.vercel.app',
    title: 'AI Tools Hub - 100+ Free Online Tools',
    description: 'Free online tools for productivity, text manipulation, and more. No login required.',
    siteName: 'AI Tools Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Hub - 100+ Free Online Tools',
    description: 'Free online tools for productivity, text manipulation, and more. No login required.',
    creator: '@aitoolshub',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full flex flex-col`}>
        <Header />
        <main className="flex-grow bg-gray-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 