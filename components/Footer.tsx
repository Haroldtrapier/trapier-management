import Link from 'next/link';
import { Wordmark } from './Navigation';
import { site } from '@/lib/site';

const cols = [
  { title: 'Company', links: [ { href: '/about', label: 'About' }, { href: '/federal', label: 'Federal buyers' }, { href: '/contact', label: 'Contact' } ] },
  { title: 'Platforms', links: [ { href: site.platforms.sturgeon, label: 'Sturgeon AI', ext: true }, { href: site.platforms.govcon, label: 'GovCon Command Center', ext: true }, { href: '/contact?topic=capture-desk', label: 'Capture Desk' } ] },
  { title: 'Resources', links: [ { href: '/ai-maturity-assessment', label: 'AI readiness score' }, { href: '/ai-maturity-model', label: 'AI Maturity Model' } ] },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="theme-dark border-t border-line bg-surface text-ink">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex min-h-11 items-center rounded-lg text-ink" aria-label="Trapier Management home"><Wordmark /></Link>
            <p className="body-3 mt-6 max-w-sm text-ink-secondary">
              A service-disabled veteran-owned firm that finds where AI pays back, builds it, and trains your people to run it.
            </p>
            <dl className="mt-8 grid max-w-sm grid-cols-2 gap-4">
              <div><dt className="caption-2 text-ink-muted">CAGE</dt><dd className="mt-1 font-mono text-sm text-ink">{site.cage}</dd></div>
              <div><dt className="caption-2 text-ink-muted">UEI</dt><dd className="mt-1 font-mono text-sm text-ink">{site.uei}</dd></div>
            </dl>
            <a href={`mailto:${site.email}`} className="body-3 mt-8 inline-flex min-h-11 items-center text-ink-accent underline-offset-4 hover:underline">{site.email}</a>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h2 className="caption-2 text-ink-muted">{c.title}</h2>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {'ext' in l && l.ext ? (
                      <a href={l.href} className="body-4 inline-flex min-h-11 items-center text-ink-secondary hover:text-ink" target="_blank" rel="noopener noreferrer">{l.label}<span className="sr-only"> (opens in a new tab)</span></a>
                    ) : (
                      <Link href={l.href} className="body-4 inline-flex min-h-11 items-center text-ink-secondary hover:text-ink">{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="caption-3 text-ink-muted">© {year} {site.legalName}. {site.certification}.</p>
          <ul className="flex gap-6">
            <li><Link href="/privacy" className="caption-3 inline-flex min-h-11 items-center text-ink-muted hover:text-ink">Privacy policy</Link></li>
            <li><Link href="/terms" className="caption-3 inline-flex min-h-11 items-center text-ink-muted hover:text-ink">Terms of use</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
