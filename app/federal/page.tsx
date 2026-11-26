import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import CtaBand from '@/components/CtaBand';
import Placeholder from '@/components/Placeholder';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Federal buyers and primes',
  description: 'Trapier Management LLC is an SBA-certified Service-Disabled Veteran-Owned Small Business for AI readiness, AI systems and AI training. CAGE 12LN8, UEI L6BAD35CZS74.',
  alternates: { canonical: '/federal' },
};

const cta = { label: 'Request our capability statement', href: '/contact?topic=federal' };

const competencies = [
  { icon: 'compass' as const, t: 'AI readiness assessments', b: 'Scored assessments on the Trapier AI Maturity Model with ranked use cases and a roadmap leadership can act on.' },
  { icon: 'cpu' as const, t: 'AI systems and automation', b: 'Agents, workflow automation and integrations built with test cases, guardrails and logging from the first release.' },
  { icon: 'graduation' as const, t: 'AI training for teams', b: 'Practical, role-based training so the people who own a process can use and supervise AI tools safely.' },
  { icon: 'chart' as const, t: 'Contracting data and capture tools', b: 'Opportunity intelligence and bid decision support through our own Sturgeon AI platform.' },
];

const why = [
  ['Veteran-owned and accountable', 'An SBA-certified SDVOSB led by its founder, a service-disabled veteran.'],
  ['We build, not just advise', 'The team that writes the roadmap also builds and tests the systems in it.'],
  ['Measured from day one', 'Every system ships with evals and a value target, so status reports are facts, not opinions.'],
];

export default function FederalPage() {
  const rows: [string, React.ReactNode][] = [
    ['Legal name', site.legalName],
    ['Business type', site.certification],
    ['CAGE code', <span key="c" className="font-mono">{site.cage}</span>],
    ['UEI', <span key="u" className="font-mono">{site.uei}</span>],
    ['NAICS codes', <Placeholder key="n" name="naics_codes" />],
    ['PSC codes', <Placeholder key="p" name="psc_codes" />],
    ['Contract vehicles', <Placeholder key="v" name="contract_vehicles" />],
    ['Point of contact', <span key="poc">{site.founder}, {site.founderTitle}<br /><a href={`mailto:${site.email}`} className="text-ink-accent underline-offset-4 hover:underline">{site.email}</a></span>],
  ];

  return (
    <main>
      <section className="theme-dark relative overflow-hidden bg-surface">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-24 lg:py-32">
          <p className="eyebrow flex items-center gap-2"><Icon name="flag" className="h-4 w-4" />For federal buyers and primes</p>
          <h1 className="heading-1 mt-6 max-w-4xl text-ink">An AI partner your contracting office can actually use.</h1>
          <p className="body-1 mt-8 max-w-prose text-ink-secondary">
            Trapier Management is an SBA-certified service-disabled veteran-owned small business. We assess, build and train for AI work, and we team with primes that need SDVOSB participation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href={cta.href} className="btn-lg btn-primary">{cta.label}<Icon name="file" className="h-5 w-5" /></Link>
            <p className="body-4 text-ink-muted">Sent by email. No obligation.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow">Capability snapshot</p>
            <h2 className="heading-3 mt-4 text-ink">The facts your market research needs.</h2>
            <p className="body-3 mt-6 text-ink-secondary">Identifiers appear exactly as registered. Ask for the full capability statement for competencies, codes and contacts in one page.</p>
          </div>
          <dl className="divide-y divide-line rounded-2xl border border-line bg-surface-raised lg:col-span-8" data-reveal>
            {rows.map(([k, v]) => (
              <div key={k} className="grid gap-2 px-6 py-6 sm:grid-cols-3 sm:gap-6 sm:px-8">
                <dt className="caption-2 text-ink-muted sm:pt-1">{k}</dt>
                <dd className="body-3 text-ink sm:col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-surface-sunken">
        <div className="container-page">
          <div className="max-w-prose" data-reveal>
            <p className="eyebrow">Core competencies</p>
            <h2 className="heading-2 mt-4 text-ink">What we deliver.</h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {competencies.map((c) => (
              <article key={c.t} className="rounded-2xl border border-line bg-surface-raised p-8" data-reveal>
                <span className="text-icon-accent"><Icon name={c.icon} className="h-8 w-8" /></span>
                <h3 className="heading-4 mt-6 text-ink">{c.t}</h3>
                <p className="body-3 mt-4 text-ink-secondary">{c.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <p className="eyebrow">Differentiators</p>
            <h2 className="heading-3 mt-4 text-ink">Why teams choose Trapier.</h2>
          </div>
          <ol className="lg:col-span-7">
            {why.map(([t, b], i) => (
              <li key={t} className="flex gap-6 border-t border-line py-8 last:border-b" data-reveal>
                <span className="font-mono text-sm text-ink-accent">0{i + 1}</span>
                <div><h3 className="title-1 text-ink">{t}</h3><p className="body-3 mt-2 text-ink-secondary">{b}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-line bg-surface-sunken">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-dashed border-gold-500 bg-surface-raised p-8" data-reveal>
            <p className="eyebrow">Past performance</p>
            <h2 className="heading-4 mt-4 text-ink">Trapier Management</h2>
            <p className="mt-4"><Placeholder name="trapier_past_performance" note="Only Trapier's own awards. Leave empty until one exists." /></p>
            <p className="body-4 mt-4 text-ink-muted">Add only contracts awarded to Trapier Management LLC.</p>
          </article>
          <article className="rounded-2xl border border-line bg-surface-raised p-8" data-reveal>
            <p className="eyebrow">Founder experience</p>
            <h2 className="heading-4 mt-4 text-ink">Before Trapier</h2>
            <p className="body-3 mt-4 text-ink-secondary">
              Our founder, {site.founder}, won seven federal contracts, worth close to $6M, with a previous company. That work is his experience, not Trapier’s past performance, and we keep the two separate.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7" data-reveal>
            <p className="eyebrow">Teaming</p>
            <h2 className="heading-3 mt-4 text-ink">Primes: bring us in early.</h2>
            <p className="body-2 mt-6 text-ink-secondary">If your pursuit needs SDVOSB participation and real AI capability, talk to us before the RFP drops. We can support capture, shape the technical approach, and own a defined scope of the work.</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9" data-reveal>
            <Link href="/contact?topic=teaming" className="btn-lg btn-secondary w-full">Start a teaming conversation<Icon name="users" className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      <CtaBand heading="Need SDVOSB AI capability on file?" body="We will send our capability statement with competencies, identifiers and a point of contact on one page." reversal="Sent by email. No obligation." cta={cta} />
    </main>
  );
}
