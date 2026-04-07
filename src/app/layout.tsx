import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ZensiaCare | Premier Medical Tourism in Vietnam',
  description:
    'World-class healthcare in Vietnam. Save 60-80% on dental, cosmetic surgery, IVF & health screening with 24/7 personal support.',
  keywords: 'medical tourism vietnam, dental implants vietnam, IVF vietnam, cosmetic surgery vietnam',
  openGraph: {
    title: 'ZensiaCare | Premier Medical Tourism in Vietnam',
    description: 'World-class healthcare meets heartfelt Vietnamese hospitality.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
