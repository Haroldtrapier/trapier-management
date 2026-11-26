import Placeholder from './Placeholder';

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="section">
      <div className="container-page max-w-prose">
        <p className="eyebrow">Legal</p>
        <h1 className="heading-2 mt-4 text-ink">{title}</h1>
        <p className="body-4 mt-4 text-ink-muted">Effective <Placeholder name="effective_date" /> · Draft for owner and counsel review before launch.</p>
        <div className="mt-12 space-y-8 [&_h2]:title-1 [&_h2]:text-ink [&_p]:body-3 [&_p]:mt-3 [&_p]:text-ink-secondary [&_ul]:body-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-ink-secondary">
          {children}
        </div>
      </div>
    </main>
  );
}
