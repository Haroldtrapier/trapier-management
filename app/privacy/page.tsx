import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy policy', alternates: { canonical: '/privacy' }, robots: { index: false } };

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy">
      <section><h2>What we collect</h2><p>When you use our contact form or readiness score, we collect what you give us: your name, email, organization, phone number, message, and your readiness score if you took it. Our site also uses Google Analytics, which collects standard usage data such as pages visited and device type.</p></section>
      <section><h2>How we use it</h2><p>We use your details to reply to you and to understand how people use the site. We do not sell your personal information.</p></section>
      <section><h2>Who we share it with</h2><p>We share data only with the service providers that run this site and deliver our email, and only as needed to do that.</p></section>
      <section><h2>Your choices</h2><p>To ask what we hold about you, or to have it deleted, email {site.email}.</p></section>
      <section><h2>Contact</h2><p>{site.legalName} · {site.email}</p></section>
    </LegalPage>
  );
}
