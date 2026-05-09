"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-lg overflow-hidden">
      {items.map((it, idx) => (
        <div key={idx} className="bg-white">
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 hover:bg-zinc-50 transition-colors"
            aria-expanded={open === idx}
          >
            <span className="font-medium text-[var(--color-brand-navy)] pr-4">{it.q}</span>
            {open === idx ? (
              <Minus className="w-5 h-5 mt-0.5 text-[var(--color-brand-gold)] flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 mt-0.5 text-[var(--color-brand-navy)] flex-shrink-0" />
            )}
          </button>
          {open === idx && (
            <div className="px-5 pb-5 -mt-1 text-zinc-700 leading-relaxed faq-answer">{it.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
