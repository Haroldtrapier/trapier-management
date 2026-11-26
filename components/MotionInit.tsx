'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Adds scroll reveals to any element with data-reveal. Plays once per element.
export default function MotionInit() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)'));
    // Anything already on screen shows at once, so nothing above the fold flickers.
    els.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add('is-in'); });
    root.classList.add('motion');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    els.forEach((el) => { if (!el.classList.contains('is-in')) io.observe(el); });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
