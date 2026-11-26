import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import CtaBand from '@/components/CtaBand';
import { primaryCta } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The Trapier AI Maturity Model',
  description: 'The framework behind every Trapier engagement: 8 dimensions and 5 levels that show where an organization stands on AI and where it will pay back first.',
  alternates: { canonical: '/ai-maturity-model' },
};

const dimensions = [
  ['Data foundation', 'Whether the data AI needs exists, is trustworthy, and can be reached.'],
  ['AI capability', 'What AI is already in use, and whether it is in production or still in pilots.'],
  ['Process integration', 'How well AI fits into the workflows people actually run every day.'],
  ['Talent and culture', 'The skills, roles and willingness on the team to use and own AI tools.'],
  ['Governance and ethics', 'The rules, approvals and guardrails that keep AI use safe and accountable.'],
  ['Technology infrastructure', 'The platforms, integrations and security the systems will run on.'],
  ['Value realization', 'Whether AI work is tied to a business case and measured against it.'],
  ['Innovation and adaptation', 'How quickly the organization tests, learns, and cuts what does not work.'],
];

const levels = ['Beginner', 'Developing', 'Intermediate', 'Advanced', 'Optimized'];

export default function AIMaturityModel() {
  return (
    <main>
      <section className="theme-dark relative overflow-hidden bg-surface">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-24 lg:py-32">
          <p className="eyebrow">Framework</p>
          <h1 className="heading-1 mt-6 max-w-4xl text-ink">The Trapier AI Maturity Model.</h1>
          <p className="body-1 mt-8 max-w-prose text-ink-secondary">Eight dimensions and five levels that show where your organization stands on AI, what is holding it back, and where it will pay back first.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href={primaryCta.href} className="btn-lg btn-primary">{primaryCta.label}<Icon name="arrow-right" className="h-5 w-5" /></Link>
            <p className="body-4 text-ink-muted">Free. Three questions. Your score on screen.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="max-w-prose" data-reveal>
            <p className="eyebrow">8 dimensions</p>
            <h2 className="heading-2 mt-4 text-ink">What we score.</h2>
          </div>
          <ol className="mt-16 grid gap-x-12 sm:grid-cols-2">
            {dimensions.map(([t, b], i) => (
              <li key={t} className="flex gap-6 border-t border-line py-8" data-reveal>
                <span className="font-mono text-sm text-ink-accent">0{i + 1}</span>
                <div><h3 className="title-1 text-ink">{t}</h3><p className="body-3 mt-2 text-ink-secondary">{b}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-surface-sunken">
        <div className="container-page">
          <div className="max-w-prose" data-reveal>
            <p className="eyebrow">5 levels</p>
            <h2 className="heading-2 mt-4 text-ink">Where you land.</h2>
            <p className="body-2 mt-6 text-ink-secondary">Each dimension is scored on its own, so you see exactly which one is holding the rest back.</p>
          </div>
          <ol className="mt-16 grid gap-4 sm:grid-cols-5" data-reveal>
            {levels.map((l, i) => (
              <li key={l} className="rounded-2xl border border-line bg-surface-raised p-6">
                <span className="flex gap-1" aria-hidden="true">
                  {levels.map((_, n) => <span key={n} className={`h-2 flex-1 rounded-full ${n <= i ? 'bg-gold-500' : 'bg-sand-200'}`} />)}
                </span>
                <p className="caption-2 mt-6 text-ink-muted">Level {i + 1}</p>
                <p className="title-1 mt-2 text-ink">{l}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand heading="See where you stand in three questions." body="The free score gives you a quick read. The full assessment scores all 8 dimensions and ends with ranked use cases and a 90-day roadmap." reversal="Free. No call required to see your score." />
    </main>
  );
}
