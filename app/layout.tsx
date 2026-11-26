import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import MorganChatWidget from '@/components/MorganChatWidget';
import MotionInit from '@/components/MotionInit';
import { site } from '@/lib/site';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Trapier Management | AI that pays back, built by an SDVOSB', template: '%s | Trapier Management' },
  description: 'Trapier Management is a service-disabled veteran-owned small business that assesses where AI pays back, builds the systems, and trains your team to run them. CAGE 12LN8.',
  openGraph: { type: 'website', siteName: site.legalName, url: site.url, locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = { themeColor: '#08111F' };

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.legalName,
  url: site.url,
  email: site.email,
  founder: { '@type': 'Person', name: site.founder },
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'CAGE', value: site.cage },
    { '@type': 'PropertyValue', propertyID: 'UEI', value: site.uei },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-action focus:px-4 focus:py-2 focus:text-action-text">Skip to content</a>
        <GoogleAnalytics />
        <Navigation />
        <div id="main" tabIndex={-1} className="outline-none">{children}</div>
        <Footer />
        <MorganChatWidget />
        <MotionInit />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </body>
    </html>
  );
}
