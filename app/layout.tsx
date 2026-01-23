import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import MorganChatWidget from '@/components/MorganChatWidget'

export const metadata: Metadata = {
  title: 'Trapier Management LLC - AI Transformation for Traditional Industries',
  description: 'Service-Connected Disabled Veteran-Owned Small Business (SDVOSB) specializing in AI transformation for Fortune 500 companies in construction, retail, hospitality, and insurance. CAGE Code: 12LN8',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <Navigation />
        {children}
        <Footer />
        <MorganChatWidget />
      </body>
    </html>
  )
}
