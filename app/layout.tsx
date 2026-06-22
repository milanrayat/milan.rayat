import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Outfit, Geist_Mono } from 'next/font/google'
import { PersonSchema } from '@/components/person-schema'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Milan Rayat — Senior AI Product Manager | Enterprise B2B SaaS',
  description:
    'Senior PM & AI PM with 5+ years building enterprise contact center solutions at Sprinklr. IIT Guwahati engineer. $20M+ ARR, 10x customer growth, 100+ enterprise clients.',
  generator: 'v0.app',
  keywords: [
    'Product Manager',
    'AI PM',
    'Enterprise B2B SaaS',
    'Sprinklr',
    'Contact Center',
    'IIT Guwahati',
    'Quality Monitoring',
    'Call Analytics',
  ],
  openGraph: {
    title: 'Milan Rayat — Senior AI Product Manager',
    description:
      'Building enterprise contact center solutions. $20M+ ARR. 10x customer growth. AI-powered QA.',
    type: 'website',
    url: 'https://milanrayat.vercel.app',
    siteName: 'Milan Rayat',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milan Rayat — Senior AI Product Manager',
    description:
      'Building enterprise contact center solutions. $20M+ ARR. 10x customer growth. AI-powered QA.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0F172A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <PersonSchema />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
