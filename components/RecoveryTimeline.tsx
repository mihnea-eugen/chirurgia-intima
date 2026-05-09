import type { RecoveryStep } from "@/lib/proceduri";
import { CheckCircle2 } from "lucide-react";

export default function RecoveryTimeline({ steps }: { steps: RecoveryStep[] }) {
  if (steps.length === 0) return null;
  return (
    <ol className="space-y-4 border-l-2 border-[var(--color-brand-gold)] pl-6 ml-2">
      {steps.map((s, idx) => (
        <li key={idx} className="relative">
          <span className="absolute -left-[33px] top-1 bg-white border-2 border-[var(--color-brand-gold)] rounded-full w-6 h-6 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-gold)]" />
          </span>
          <div className="text-sm font-semibold text-[var(--color-brand-gold)] uppercase tracking-wide">{s.period}</div>
          <div className="font-display text-lg text-[var(--color-brand-navy)] font-semibold mt-0.5">{s.title}</div>
          <p className="text-zinc-700 mt-1">{s.description}</p>
        </li>
      ))}
    </ol>
  );
}
