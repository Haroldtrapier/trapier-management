import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import CtaBand from '@/components/CtaBand';
import Link from 'next/link';
import { primaryCta, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'Trapier Management is a service-disabled veteran-owned AI firm. We find where AI pays back, build the systems, and train the people who run them.',
  alternates: { canonical: '/about' },
};

const principles = [
  ['Facts before opinions', 'Every claim we make, to you or about you, comes from a real source. If we do not know, we say so.'],
  ['Measured or not done', 'Every system ships with a target and a way to check it. A feature without a measure is not finished.'],
  ['People own the system', 'We train the team that runs the work, and anything customer-facing keeps a human check.'],
  ['Cut what fails', 'When something misses its target, we stop it, say why, and put the effort where it works.'],
];

export default function AboutPage() {
  return (
    <main>
      <section className="theme-dark relative overflow-hidden bg-surface">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-24 lg:py-32">
          <p className="eyebrow">About Trapier Management</p>
          <h1 className="heading-1 mt-6 max-w-4xl text-ink">A veteran-owned firm that builds AI the way missions get run.</h1>
          <p className="body-1 mt-8 max-w-prose text-ink-secondary">Clear objective. Honest status. Done means it works. We bring that standard to every assessment, every system and every training session.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href={primaryCta.href} className="btn-lg btn-primary">{primaryCta.label}<Icon name="arrow-right" className="h-5 w-5" /></Link>
            <p className="body-4 text-ink-muted">Free. Three questions. Your score on screen.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="heading-3 mt-4 text-ink">We find where AI pays back, build it, and train your people to run it.</h2>
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7" data-reveal>
            <p className="body-2 text-ink-secondary">{site.legalName} is an SBA-certified Service-Disabled Veteran-Owned Small Business. We work with federal agencies and their primes, with traditional industries such as construction, retail, hospitality and insurance, and with small contractors chasing federal work.</p>
            <p className="body-2 text-ink-secondary">Our work starts with the Trapier AI Maturity Model, a scored view across 8 dimensions and 5 levels. From there we build the systems the roadmap calls for and train the people who will own them.</p>
          </div>
        </div>
      </section>

      <section className="section bg-surface-sunken">
        <div className="container-page">
          <div className="max-w-prose" data-reveal>
            <p className="eyebrow">Principles</p>
            <h2 className="heading-2 mt-4 text-ink">How we work, every time.</h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {principles.map(([t, b]) => (
              <article key={t} className="rounded-2xl border border-line bg-surface-raised p-8" data-reveal>
                <span className="text-icon-accent"><Icon name="check" className="h-8 w-8" /></span>
                <h3 className="heading-4 mt-6 text-ink">{t}</h3>
                <p className="body-3 mt-4 text-ink-secondary">{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-prose" data-reveal>
          <p className="eyebrow">Leadership</p>
          <h2 className="heading-3 mt-4 text-ink">{site.founder}</h2>
          <p className="body-4 mt-2 text-ink-muted">{site.founderTitle}</p>
          <p className="body-2 mt-6 text-ink-secondary">Harold is a service-disabled veteran. Before founding Trapier, he won seven federal contracts, worth close to $6M, with a previous company. He leads the firm and the development of our GovCon platforms, Sturgeon AI and GovCon Command Center.</p>
        </div>
      </section>

      <CtaBand heading="Start with a clear read on where you stand." body="Three questions and your AI readiness score shows on screen." reversal="Free. No call required to see your score." />
    </main>
  );
}
