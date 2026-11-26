import Link from 'next/link';
import Icon from '@/components/Icon';

export default function NotFound() {
  return (
    <main className="theme-dark relative min-h-[70vh] overflow-hidden bg-surface">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-32">
        <p className="eyebrow font-mono">404</p>
        <h1 className="heading-2 mt-4 max-w-prose text-ink">This page does not exist.</h1>
        <p className="body-2 mt-6 max-w-prose text-ink-secondary">The link may be old or mistyped. Head back to the home page, or tell us what you were looking for.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="btn-lg btn-primary">Go to the home page<Icon name="arrow-right" className="h-5 w-5" /></Link>
          <Link href="/contact" className="btn-lg btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
