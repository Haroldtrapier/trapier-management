import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Trapier Management about AI assessments, AI systems, training, federal capability statements or teaming.',
  alternates: { canonical: '/contact' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
