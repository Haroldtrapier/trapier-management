'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';
import { site } from '@/lib/site';

const topics = [
  { value: 'assessment', label: 'AI assessment or build' },
  { value: 'federal', label: 'Federal: request capability statement' },
  { value: 'teaming', label: 'Teaming with a prime' },
  { value: 'capture-desk', label: 'Capture Desk' },
  { value: 'training', label: 'AI training for my team' },
  { value: 'other', label: 'Something else' },
];

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', topic: 'assessment', message: '' });
  const [score, setScore] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const t = p.get('topic');
    if (t && topics.some((x) => x.value === t)) setForm((f) => ({ ...f, topic: t }));
    const s = p.get('score');
    if (s && /^\d{1,3}$/.test(s)) setScore(s);
  }, []);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Enter your name.';
    if (!form.email.trim()) e.email = 'Enter your email address.';
    else if (!emailOk(form.email)) e.email = 'Enter an email address like name@company.com.';
    if (!form.message.trim()) e.message = 'Tell us a little about what you need.';
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus('sending');
    try {
      const topicLabel = topics.find((t) => t.value === form.topic)?.label ?? form.topic;
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, topic: topicLabel, score }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('sent');
      setForm((f) => ({ ...f, name: '', email: '', company: '', phone: '', message: '' }));
    } catch {
      setStatus('error');
    }
  };

  const set = (k: keyof typeof form) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [k]: ev.target.value });

  return (
    <main>
      <section className="theme-dark relative overflow-hidden bg-surface">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-24">
          <p className="eyebrow">Contact</p>
          <h1 className="heading-1 mt-6 max-w-4xl text-ink">Tell us what you are working on.</h1>
          <p className="body-1 mt-8 max-w-prose text-ink-secondary">A real person reads every message and replies by email.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <aside className="space-y-8 lg:col-span-4">
            <div>
              <h2 className="caption-2 text-ink-muted">Email</h2>
              <a href={`mailto:${site.email}`} className="body-2 mt-2 inline-flex min-h-11 items-center font-semibold text-ink underline decoration-gold-500 underline-offset-4">{site.email}</a>
            </div>
            <div>
              <h2 className="caption-2 text-ink-muted">Location</h2>
              <p className="body-3 mt-2 text-ink-secondary">Charlotte, North Carolina. Serving clients nationwide.</p>
            </div>
            <div>
              <h2 className="caption-2 text-ink-muted">Federal identifiers</h2>
              <p className="body-3 mt-2 text-ink-secondary">CAGE <span className="font-mono text-ink">{site.cage}</span> · UEI <span className="font-mono text-ink">{site.uei}</span></p>
            </div>
            {score && (
              <div className="rounded-2xl border border-line bg-surface-sunken p-6">
                <p className="caption-2 text-ink-accent">Your readiness score</p>
                <p className="heading-3 mt-2 font-mono text-ink">{score}%</p>
                <p className="body-4 mt-2 text-ink-secondary">We will include it with your message.</p>
              </div>
            )}
          </aside>

          <div className="lg:col-span-7 lg:col-start-6">
            {status === 'sent' ? (
              <div role="status" className="rounded-2xl border border-line bg-surface-raised p-8">
                <span className="text-green-700"><Icon name="check" className="h-8 w-8" /></span>
                <h2 className="heading-4 mt-6 text-ink">Message received.</h2>
                <p className="body-3 mt-4 text-ink-secondary">We will reply to the email address you gave us.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6 rounded-2xl border border-line bg-surface-raised p-6 sm:p-8">
                {status === 'error' && (
                  <div role="alert" className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800">
                    Your message did not send. Try again, or email us at {site.email}.
                  </div>
                )}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label">Full name</label>
                    <input id="name" className="field" autoComplete="name" value={form.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
                    {errors.name && <p id="name-err" className="mt-2 text-sm text-red-700">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="label">Work email</label>
                    <input id="email" type="email" className="field" autoComplete="email" value={form.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
                    {errors.email && <p id="email-err" className="mt-2 text-sm text-red-700">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="label">Organization <span className="font-normal text-ink-muted">(optional)</span></label>
                    <input id="company" className="field" autoComplete="organization" value={form.company} onChange={set('company')} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label">Phone <span className="font-normal text-ink-muted">(optional)</span></label>
                    <input id="phone" type="tel" className="field" autoComplete="tel" value={form.phone} onChange={set('phone')} />
                  </div>
                </div>
                <div>
                  <label htmlFor="topic" className="label">What is this about?</label>
                  <select id="topic" className="field" value={form.topic} onChange={set('topic')}>
                    {topics.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="label">Message</label>
                  <textarea id="message" rows={6} className="field" value={form.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
                  {errors.message && <p id="message-err" className="mt-2 text-sm text-red-700">{errors.message}</p>}
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="body-4 text-ink-muted">We use your details only to reply. See our <a href="/privacy" className="underline underline-offset-4">privacy policy</a>.</p>
                  <button type="submit" className="btn-lg btn-primary" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending' : 'Send message'}
                    <Icon name="arrow-right" className="h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
