import type { Fact } from "@/lib/proceduri";

export default function StatGrid({ facts }: { facts: Fact[] }) {
  return (
    <ul className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 facts list-none pl-0">
      {facts.map((f, idx) => (
        <li key={idx} className="bg-zinc-50 border border-zinc-200 rounded-lg p-4">
          <div className="text-xs uppercase tracking-wide text-zinc-500 mb-1">{f.label}</div>
          <div className="text-lg font-semibold text-[var(--color-brand-navy)] font-display">{f.value}</div>
          {f.source && (
            <div className="text-xs text-zinc-500 mt-1 italic">Sursă: {f.source}</div>
          )}
        </li>
      ))}
    </ul>
  );
}
