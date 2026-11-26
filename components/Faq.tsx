import Icon from './Icon';

export type FaqItem = { q: string; a: string };

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-lg [&::-webkit-details-marker]:hidden">
            <span className="title-1 text-ink">{item.q}</span>
            <span className="mt-1 shrink-0 text-icon-accent transition-transform duration-500 ease-brand group-open:rotate-45">
              <Icon name="plus" className="h-5 w-5" />
            </span>
          </summary>
          <p className="body-3 mt-4 max-w-prose text-ink-secondary">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
