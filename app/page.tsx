import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Faq, { faqSchema, type FaqItem } from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import MaturityVisual from '@/components/MaturityVisual';
import Placeholder from '@/components/Placeholder';
import { primaryCta, site } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Trapier Management | AI that pays back, built by an SDVOSB' },
  description: 'We find where AI pays back in your operation, build the systems, and train your people to run them. Service-disabled veteran-owned. CAGE 12LN8.',
  alternates: { canonical: '/' },
};

const steps = [
  {
    n: '01', icon: 'compass' as const, title: 'Assess',
    body: 'We score your organization on the Trapier AI Maturity Model and map the workflows where AI will save hours or make money first. You get a ranked list of use cases with a business case for each one.',
    out: ['Maturity score across 8 dimensions', 'Ranked use cases with ROI logic', 'A 90-day roadmap'],
  },
  {
    n: '02', icon: 'cpu' as const, title: 'Build',
    body: 'We build the agents, automations and integrations your roadmap calls for, connected to the tools you already run. Nothing ships without test cases, guardrails and logging, because if it cannot be measured, it is not done.',
    out: ['Working systems, not prototypes', 'Evals and guardrails on every agent', 'Integrations with your current stack'],
  },
  {
    n: '03', icon: 'graduation' as const, title: 'Train and run',
    body: 'We train the people who will own the system and track the value it produces against the business case. When it works, we scale it. When it does not, we cut it and say so.',
    out: ['Hands-on training for your team', 'Value tracked against the plan', 'A clear owner for every system'],
  },
];

const stalls = [
  ['No business case', 'The project started with a tool, not a problem that costs money.'],
  ['No workflow map', 'Nobody wrote down how the work actually gets done before automating it.'],
  ['No owner', 'The pilot worked, then nobody on the team was trained to run it.'],
];

const audiences = [
  {
    icon: 'flag' as const, title: 'Federal agencies and primes', href: '/federal', link: 'For federal buyers',
    body: 'An SBA-certified SDVOSB that can assess, build and train for AI work, and a teaming partner for primes that need SDVOSB participation.',
  },
  {
    icon: 'building' as const, title: 'Traditional industries', href: '/contact?topic=assessment', link: 'Talk about your operation',
    body: 'Construction, retail, hospitality and insurance teams with real operational problems and no appetite for science projects.',
  },
  {
    icon: 'target' as const, title: 'Small and veteran-owned contractors', href: '/#platforms', link: 'See the platforms',
    body: 'Firms trying to win federal work, with software and capture support built by people who have chased those contracts themselves.',
  },
];

const platforms = [
  { name: 'Sturgeon AI', tag: 'Federal opportunity intelligence', body: 'Finds federal opportunities that fit your company and helps you decide what is worth bidding.', href: site.platforms.sturgeon, ext: true, cta: 'Visit Sturgeon AI' },
  { name: 'GovCon Command Center', tag: 'Federal contracting education', body: 'Free training that teaches small businesses how federal buying works and how to compete for it.', href: site.platforms.govcon, ext: true, cta: 'Visit GovCon Command Center' },
  { name: 'Capture Desk', tag: 'Done-with-you capture support', body: 'Hands-on help qualifying an opportunity, deciding bid or no-bid, and getting a compliant response out the door.', href: '/contact?topic=capture-desk', ext: false, cta: 'Ask about Capture Desk' },
];

const faqs: FaqItem[] = [
  { q: 'What does the free AI readiness score involve?', a: 'Three questions about your data, your current AI use and your team. Your score shows on screen right away. If you want to go further, you can book a strategy session from the results page. Nothing is required to see your score.' },
  { q: 'How is that different from the full AI Maturity Assessment?', a: 'The free score is a quick read. The full assessment is a paid engagement that scores your organization across all 8 dimensions of the Trapier AI Maturity Model, maps your workflows, and ends with ranked use cases and a 90-day roadmap.' },
  { q: 'Do you only advise, or do you build?', a: 'We build. The assessment tells us what is worth building, and then our team builds and connects the systems, tests them, and trains the people who will run them.' },
  { q: 'What industries do you work with?', a: 'Federal agencies and their primes, and traditional industries such as construction, retail, hospitality and insurance. We also support small and veteran-owned contractors through our GovCon platforms.' },
  { q: 'Can federal agencies contract with Trapier directly?', a: 'Trapier Management LLC is an SBA-certified Service-Disabled Veteran-Owned Small Business, CAGE 12LN8. Our federal page lists our identifiers and how to request a capability statement.' },
  { q: 'Will AI replace our people?', a: 'That is not how we design it. We target the repetitive work that eats your team’s week, and we train your people to own the systems. Every customer-facing step keeps a human check.' },
  { q: 'How do you handle our data?', a: 'We work inside the tools and permissions you approve, and we put guardrails on every agent we ship. Specific security and data-handling terms are set in each engagement agreement.' },
  { q: 'What does an engagement cost?', a: 'It depends on scope, and we quote it after the assessment so you know exactly what you are paying for and why. There is no charge for the readiness score or the first conversation.' },
];

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      {/* Hero */}
      <section className="theme-dark relative overflow-hidden bg-surface">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-16 py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-2"><Icon name="shield" className="h-4 w-4" />Service-disabled veteran-owned</p>
            <h1 className="heading-1 mt-6 max-w-prose text-ink">
              AI that pays back.<br />Built, proven and run by your team.
            </h1>
            <p className="body-1 mt-8 max-w-prose text-ink-secondary">
              Trapier Management finds where AI saves time or makes money in your operation, builds the systems, and trains your people to run them.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href={primaryCta.href} className="btn-lg btn-primary">
                {primaryCta.label}
                <Icon name="arrow-right" className="h-5 w-5" />
              </Link>
              <p className="body-4 text-ink-muted">Free. Three questions. Your score on screen.</p>
            </div>
            <p className="caption-3 mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-ink-muted">
              <span className="text-ink-secondary">SBA-certified SDVOSB</span>
              <span aria-hidden="true">·</span>
              <span>CAGE <span className="font-mono text-ink-secondary">{site.cage}</span></span>
              <span aria-hidden="true">·</span>
              <span>UEI <span className="font-mono text-ink-secondary">{site.uei}</span></span>
            </p>
          </div>
          <div className="lg:col-span-5">
            <MaturityVisual />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <p className="eyebrow">The problem</p>
            <h2 className="heading-2 mt-4 text-ink">Most AI work stalls between the pilot and the payoff.</h2>
            <p className="body-2 mt-6 text-ink-secondary">
              The demo looks good. Months later, nothing on the floor has changed. It usually comes down to one of three gaps.
            </p>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {stalls.map(([t, b], i) => (
              <li key={t} className="flex gap-6 border-t border-line py-8 last:border-b" data-reveal>
                <span className="font-mono text-sm text-ink-accent">0{i + 1}</span>
                <div>
                  <h3 className="title-1 text-ink">{t}</h3>
                  <p className="body-3 mt-2 text-ink-secondary">{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="section scroll-mt-16 bg-surface-sunken">
        <div className="container-page">
          <div className="max-w-prose" data-reveal>
            <p className="eyebrow">How we work</p>
            <h2 className="heading-2 mt-4 text-ink">Assess. Build. Train and run.</h2>
            <p className="body-2 mt-6 text-ink-secondary">One method, three phases, and a clear deliverable at the end of each one, so you always know what you paid for.</p>
          </div>
          <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
            {steps.map((s, i) => (
              <article key={s.n} className={`flex flex-col rounded-2xl border border-line bg-surface-raised p-8 ${i === 1 ? 'lg:mt-12' : ''}`} data-reveal>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400"><Icon name={s.icon} /></span>
                  <span className="font-mono text-sm text-ink-muted">{s.n}</span>
                </div>
                <h3 className="heading-4 mt-8 text-ink">{s.title}</h3>
                <p className="body-3 mt-4 text-ink-secondary">{s.body}</p>
                <ul className="mt-8 space-y-3 border-t border-line pt-6">
                  {s.out.map((o) => (
                    <li key={o} className="body-4 flex gap-3 text-ink"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-icon-accent" />{o}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="section">
        <div className="container-page">
          <p className="heading-2 max-w-4xl text-ink" data-reveal>
            We don’t hand you a deck and leave. <span className="text-ink-muted">We build it, prove it against the numbers, and teach your people to run it.</span>
          </p>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section border-t border-line">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow">Who we serve</p>
            <h2 className="heading-3 mt-4 text-ink">Organizations where the work is real and the margin for error is small.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {audiences.map((a, i) => (
              <Link key={a.title} href={a.href} className={`group flex flex-col rounded-2xl border border-line bg-surface-raised p-8 transition-colors duration-300 ease-brand hover:border-line-strong hover:bg-surface-sunken ${i === 0 ? 'sm:col-span-2' : ''}`} data-reveal>
                <span className="text-icon-accent"><Icon name={a.icon} className="h-8 w-8" /></span>
                <h3 className="heading-4 mt-6 text-ink">{a.title}</h3>
                <p className="body-3 mt-4 max-w-prose text-ink-secondary">{a.body}</p>
                <span className="body-4 mt-8 inline-flex items-center gap-2 font-semibold text-ink">
                  {a.link}
                  <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-500 ease-brand group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="theme-dark section scroll-mt-16 bg-surface">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end" data-reveal>
            <div className="lg:col-span-7">
              <p className="eyebrow">Platforms</p>
              <h2 className="heading-2 mt-4 text-ink">We use what we build.</h2>
            </div>
            <p className="body-2 text-ink-secondary lg:col-span-5">Our federal contracting platforms came out of the same method we bring to clients: find the decision that matters, then build the tool that makes it faster.</p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {platforms.map((p) => {
              const inner = (
                <>
                  <p className="caption-2 text-ink-accent">{p.tag}</p>
                  <h3 className="heading-4 mt-4 text-ink">{p.name}</h3>
                  <p className="body-3 mt-4 flex-1 text-ink-secondary">{p.body}</p>
                  <span className="body-4 mt-8 inline-flex items-center gap-2 font-semibold text-ink">
                    {p.cta}
                    <Icon name={p.ext ? 'arrow-up-right' : 'arrow-right'} className="h-4 w-4" />
                    {p.ext && <span className="sr-only">(opens in a new tab)</span>}
                  </span>
                </>
              );
              const cls = 'group flex flex-col rounded-2xl border border-line bg-surface-raised p-8 transition-colors duration-300 ease-brand hover:border-line-strong';
              return p.ext ? (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className={cls} data-reveal>{inner}</a>
              ) : (
                <Link key={p.name} href={p.href} className={cls} data-reveal>{inner}</Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section">
        <div className="container-page grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-gold-500 bg-sand-100 p-8 text-center">
              <Placeholder name="founder_photo" note="A real, approved portrait of Harold" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            <p className="eyebrow">Leadership</p>
            <h2 className="heading-3 mt-4 text-ink">Led by a service-disabled veteran who has competed for federal work and won.</h2>
            <p className="body-2 mt-6 text-ink-secondary">
              {site.founder} is a service-disabled veteran and the founder of Trapier Management. The firm runs on a simple standard: clear objectives, honest status, and nothing called done until it works.
            </p>
            <p className="body-2 mt-4 text-ink-secondary">
              Before Trapier, Harold won seven federal contracts, worth close to $6M, with a previous company. That experience shapes how we build our GovCon platforms and how we work with federal buyers.
            </p>
            <p className="body-4 mt-8 text-ink-muted">{site.founder}, {site.founderTitle}</p>
          </div>
        </div>
      </section>

      {/* Proof (placeholders until real, approved results exist) */}
      <section className="section border-t border-line bg-surface-sunken">
        <div className="container-page">
          <div className="max-w-prose" data-reveal>
            <p className="eyebrow">Results</p>
            <h2 className="heading-3 mt-4 text-ink">Client results, in their words.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {['case_study_1', 'testimonial_1'].map((k) => (
              <div key={k} className="rounded-2xl border border-dashed border-gold-500 bg-surface-raised p-8" data-reveal>
                <Placeholder name={k} note="Add only a real client result with the client’s written permission" />
                <p className="body-4 mt-4 text-ink-muted">Replace with a real, permissioned client result before launch. This block does not render a claim.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="heading-3 mt-4 text-ink">What people ask before they start.</h2>
            <p className="body-3 mt-6 text-ink-secondary">Something else on your mind? <Link href="/contact" className="font-semibold text-ink underline decoration-gold-500 underline-offset-4">Send us a note</Link>.</p>
          </div>
          <div className="lg:col-span-8" data-reveal><Faq items={faqs} /></div>
        </div>
      </section>

      <CtaBand
        heading="Find out where AI will pay back first."
        body="Three questions, a score on screen, and a clear next step if you want one."
        reversal="Free. No call required to see your score."
      />
    </main>
  );
}
