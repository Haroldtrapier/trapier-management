// Hero visual: the Trapier AI Maturity Model (8 dimensions, 5 levels).
// Bar levels are an illustrative example only, labeled as such. Not client data.
const dims = [
  ['Data foundation', 3], ['AI capability', 2], ['Process integration', 2], ['Talent and culture', 3],
  ['Governance and ethics', 1], ['Technology infrastructure', 3], ['Value realization', 1], ['Innovation and adaptation', 2],
] as const;

export default function MaturityVisual() {
  return (
    <figure className="relative rounded-2xl border border-line bg-surface-raised/80 p-6 shadow-2xl shadow-black/40 backdrop-blur sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="caption-2 text-ink-accent">Trapier AI Maturity Model</p>
          <p className="title-2 mt-2 text-ink">8 dimensions, 5 levels</p>
        </div>
        <span className="caption-3 rounded-full border border-line-strong px-3 py-1 text-ink-muted">Illustrative example</span>
      </div>
      <ul className="mt-8 space-y-4">
        {dims.map(([label, level]) => (
          <li key={label} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 sm:grid-cols-[176px_minmax(0,1fr)]">
            <span className="body-4 text-ink-secondary">{label}</span>
            <span className="col-span-2 flex gap-1 sm:col-span-1" aria-label={`${label}: level ${level} of 5`}>
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className={`h-2 flex-1 rounded-full ${n <= level ? 'bg-gold-400' : 'bg-navy-800'}`} />
              ))}
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="caption-3 mt-8 border-t border-line pt-4 text-ink-muted">
        Every engagement starts here: a scored view of where your organization stands and where AI will pay back first.
      </figcaption>
    </figure>
  );
}
