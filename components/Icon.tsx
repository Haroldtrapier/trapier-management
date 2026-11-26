// One icon family, one stroke weight (1.5), drawn in the Phosphor regular style.
type Name = 'arrow-right' | 'arrow-up-right' | 'check' | 'shield' | 'compass' | 'cpu' | 'graduation' | 'chart' | 'users' | 'building' | 'target' | 'file' | 'plus' | 'list' | 'x' | 'flag';

const paths: Record<Name, JSX.Element> = {
  'arrow-right': <path d="M4 12h16m-6-6 6 6-6 6" />,
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" /><path d="m9 12 2 2 4-4" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
  cpu: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9.5 9.5h5v5h-5zM9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3" /></>,
  graduation: <><path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" /><path d="M6.5 11v5c1.5 1.5 3.5 2.25 5.5 2.25s4-.75 5.5-2.25v-5M21.5 9v6" /></>,
  chart: <path d="M4 20V4m0 16h16M8 16v-4m4 4V9m4 7v-6" />,
  users: <><circle cx="9" cy="8.5" r="3.5" /><path d="M2.5 19.5c.9-3 3.4-5 6.5-5s5.6 2 6.5 5M15.5 5.2a3.5 3.5 0 0 1 0 6.6M18 14.8c1.7.8 3 2.5 3.5 4.7" /></>,
  building: <><path d="M3.5 20.5h17M5.5 20.5V5l7-2v17.5M12.5 8.5h6v12" /><path d="M8.5 8h1m-1 4h1m-1 4h1m6-4h1m-1 4h1" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  file: <><path d="M14 3H6.5v18h11V6.5L14 3Z" /><path d="M14 3v3.5h3.5M9 12h6m-6 3.5h6" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  list: <path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" />,
  x: <path d="m6 6 12 12M18 6 6 18" />,
  flag: <path d="M5 21V4m0 0h11l-2 4 2 4H5" />,
};

export default function Icon({ name, className = 'h-6 w-6' }: { name: Name; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
