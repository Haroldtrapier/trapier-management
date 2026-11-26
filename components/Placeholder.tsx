// Marks content Harold must supply. Renders visibly so it cannot ship by accident.
export default function Placeholder({ name, note }: { name: string; note?: string }) {
  return (
    <span className="placeholder-slot" title={note ?? 'Placeholder: replace with a real, sourced value before launch'}>
      {`{{${name}}}`}
    </span>
  );
}
