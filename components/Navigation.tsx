'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import { primaryCta } from '@/lib/site';

const links = [
  { href: '/#approach', label: 'Approach', match: '/#approach' },
  { href: '/federal', label: 'Federal', match: '/federal' },
  { href: '/#platforms', label: 'Platforms', match: '/#platforms' },
  { href: '/about', label: 'About', match: '/about' },
  { href: '/contact', label: 'Contact', match: '/contact' },
];

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <rect width="32" height="32" rx="8" className="fill-navy-900" />
        <path d="M9 10h14M16 10v13" stroke="#D2AA4B" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="text-base font-semibold tracking-tight">Trapier Management</span>
    </span>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const isCurrent = (match: string) => !match.includes('#') && (pathname === match || pathname.startsWith(match + '/'));

  return (
    <header className={`theme-dark sticky top-0 z-50 border-b transition-colors duration-300 ease-brand ${scrolled || open ? 'border-line bg-surface/90 backdrop-blur-md' : 'border-transparent bg-surface'}`}>
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <Link href="/" className="inline-flex min-h-11 items-center rounded-lg text-ink" aria-label="Trapier Management home">
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isCurrent(l.match) ? 'page' : undefined}
                  className="body-4 font-medium text-ink-secondary transition-colors duration-300 ease-brand hover:text-ink aria-[current=page]:text-ink aria-[current=page]:underline aria-[current=page]:decoration-gold-500 aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={primaryCta.href} className="btn-md btn-primary">{primaryCta.label}</Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-surface-sunken lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'x' : 'list'} />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-surface lg:hidden">
          <ul className="container-page flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={isCurrent(l.match) ? 'page' : undefined} className="flex min-h-11 items-center text-lg font-medium text-ink aria-[current=page]:text-ink-accent" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link href={primaryCta.href} className="btn-lg btn-primary w-full" onClick={() => setOpen(false)}>{primaryCta.label}</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
