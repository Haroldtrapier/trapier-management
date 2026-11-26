import Link from 'next/link';
import Icon from './Icon';
import { primaryCta } from '@/lib/site';

export default function CtaBand({ heading, body, reversal, cta = primaryCta }: { heading: string; body: string; reversal: string; cta?: { label: string; href: string } }) {
  return (
    <section className="theme-dark relative overflow-hidden bg-surface">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
      <div className="container-page section relative">
        <div className="max-w-prose" data-reveal>
          <h2 className="heading-2 text-ink">{heading}</h2>
          <p className="body-2 mt-6 text-ink-secondary">{body}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href={cta.href} className="btn-lg btn-primary">
              {cta.label}
              <Icon name="arrow-right" className="h-5 w-5" />
            </Link>
            <p className="body-4 flex items-center gap-2 text-ink-muted">
              <Icon name="shield" className="h-5 w-5 text-icon-accent" />
              {reversal}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
