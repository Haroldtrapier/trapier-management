import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Get your AI readiness score',
  description: 'Answer three questions and see your AI readiness score on screen. Free, from Trapier Management.',
  alternates: { canonical: '/ai-maturity-assessment' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
