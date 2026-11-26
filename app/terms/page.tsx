import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Terms of use', alternates: { canonical: '/terms' }, robots: { index: false } };

export default function Terms() {
  return (
    <LegalPage title="Terms of use">
      <section><h2>Using this site</h2><p>This site describes the services of {site.legalName}. You may use it for lawful purposes only.</p></section>
      <section><h2>No professional advice</h2><p>Content on this site, including the AI readiness score, is general information. It is not a contract, a quote or professional advice for your situation. Engagements are governed by a signed agreement.</p></section>
      <section><h2>Our content</h2><p>Text, graphics and the Trapier AI Maturity Model on this site belong to {site.legalName}. Do not copy them for commercial use without written permission.</p></section>
      <section><h2>Other sites</h2><p>Links to other sites, including our platforms, are provided for convenience. Those sites have their own terms.</p></section>
      <section><h2>Contact</h2><p>Questions about these terms: {site.email}.</p></section>
    </LegalPage>
  );
}
