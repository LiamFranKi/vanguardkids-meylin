import type { Metadata } from 'next'
import { Playfair_Display, Raleway, Poppins } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/lib/i18n/context'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import EnrollmentLeadPopup from '@/components/enrollment/EnrollmentLeadPopup'
import { BUSINESS_NAME, SITE_URL } from '@/lib/constants'
import { siteJsonLd } from '@/lib/seo/schema'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BUSINESS_NAME,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: 'Vanguard Kids Academy provides childcare, preschool, daycare, Free VPK, School Readiness, campus-specific school-age care, and Dover Early Head Start information for families in Dover and Fort Myers, FL.',
  openGraph: {
    title: BUSINESS_NAME,
    description: 'Childcare, preschool, daycare, Free VPK, School Readiness, campus-specific school-age care, and Dover Early Head Start information for families in Dover and Fort Myers, FL.',
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    images: ['/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: BUSINESS_NAME,
    description: 'Childcare, VPK, School Readiness, and school-age care in Dover and Fort Myers, FL.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={siteJsonLd} />
        <LangProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <EnrollmentLeadPopup />
        </LangProvider>
      </body>
    </html>
  )
}
