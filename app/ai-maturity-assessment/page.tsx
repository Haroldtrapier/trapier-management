'use client';

import Link from 'next/link';
import { useState } from 'react';
import Icon from '@/components/Icon';

const questions = [
  {
    question: 'How would you describe your organization’s current data foundation?',
    options: [
      { label: 'No centralized data strategy', score: 1 },
      { label: 'Some data collection, mostly siloed', score: 2 },
      { label: 'Centralized data warehouse with decent quality', score: 3 },
      { label: 'Advanced data infrastructure with real-time capabilities', score: 4 },
    ],
  },
  {
    question: 'What is your current level of AI and machine learning use?',
    options: [
      { label: 'No AI initiatives', score: 1 },
      { label: 'Exploring with proofs of concept', score: 2 },
      { label: 'Some production AI models deployed', score: 3 },
      { label: 'AI-driven processes across the organization', score: 4 },
    ],
  },
  {
    question: 'How ready is your team for AI?',
    options: [
      { label: 'Limited AI awareness', score: 1 },
      { label: 'Some training, growing interest', score: 2 },
      { label: 'Dedicated AI roles and active learning', score: 3 },
      { label: 'AI-first culture with continuous upskilling', score: 4 },
    ],
  },
];

const levelFor = (pct: number) => {
  if (pct < 30) return { level: 'Beginner', message: 'You are early. The first win is usually a clean data foundation and one well-chosen use case.' };
  if (pct < 50) return { level: 'Developing', message: 'You have started. The next step is tying each AI effort to a workflow and a number.' };
  if (pct < 75) return { level: 'Intermediate', message: 'You are making progress. Now it is about scaling what works and cutting what does not.' };
  return { level: 'Advanced', message: 'You are well positioned. The gains now come from governance, measurement and scale.' };
};

export default function AIMaturityAssessment() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const done = answers.length === questions.length;

  const answer = (score: number) => {
    const next = [...answers, score];
    setAnswers(next);
    if (current < questions.length - 1) setCurrent(current + 1);
  };
  const restart = () => { setAnswers([]); setCurrent(0); };

  const total = answers.reduce((a, b) => a + b, 0);
  const pct = Math.round((total / (questions.length * 4)) * 100);
  const result = levelFor(pct);
  const q = questions[current];

  return (
    <main className="theme-dark relative min-h-[80vh] overflow-hidden bg-surface">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">AI readiness score</p>
          {!done ? (
            <>
              <h1 className="heading-3 mt-4 text-ink">Three questions. Your score on screen.</h1>
              <div className="mt-12 rounded-2xl border border-line bg-surface-raised p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <p className="caption-2 text-ink-muted">Question {current + 1} of {questions.length}</p>
                  <p className="caption-3 font-mono text-ink-muted">{Math.round((current / questions.length) * 100)}%</p>
                </div>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-navy-800" role="progressbar" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={current} aria-label="Progress">
                  <div className="h-1 origin-left rounded-full bg-gold-400 transition-transform duration-500 ease-brand" style={{ transform: `scaleX(${current / questions.length})` }} />
                </div>
                <h2 className="heading-4 mt-8 text-ink">{q.question}</h2>
                <div className="mt-8 grid gap-3">
                  {q.options.map((o) => (
                    <button key={o.label} type="button" onClick={() => answer(o.score)} className="group flex min-h-11 items-center justify-between gap-4 rounded-xl border border-line-strong bg-surface px-6 py-4 text-left text-ink transition-colors duration-300 ease-brand hover:border-icon-accent hover:bg-surface-sunken">
                      <span className="body-3">{o.label}</span>
                      <Icon name="arrow-right" className="h-5 w-5 shrink-0 text-icon-accent transition-transform duration-500 ease-brand group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div role="status" className="mt-4">
              <h1 className="heading-3 text-ink">Your AI readiness score</h1>
              <div className="mt-12 rounded-2xl border border-line bg-surface-raised p-6 sm:p-10">
                <div className="flex flex-wrap items-end gap-6">
                  <p className="font-mono text-7xl font-semibold text-ink">{pct}%</p>
                  <p className="heading-4 pb-2 text-ink-accent">{result.level}</p>
                </div>
                <p className="body-2 mt-6 max-w-prose text-ink-secondary">{result.message}</p>
                <p className="body-4 mt-4 max-w-prose text-ink-muted">This quick score covers three areas. The full Trapier AI Maturity Assessment scores all 8 dimensions and ends with ranked use cases and a 90-day roadmap.</p>
                <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
                  <Link href={`/contact?topic=assessment&score=${pct}`} className="btn-lg btn-primary">Book a strategy session<Icon name="arrow-right" className="h-5 w-5" /></Link>
                  <button type="button" onClick={restart} className="btn-lg btn-secondary">Start over</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
