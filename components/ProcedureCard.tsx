import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Procedure } from "@/lib/proceduri";

export default function ProcedureCard({ procedure }: { procedure: Procedure }) {
  return (
    <Link
      href={`/proceduri/${procedure.slug}`}
      className="group block bg-white border border-zinc-200 rounded-xl p-5 hover:border-[var(--color-brand-gold)] hover:shadow-md transition-all no-underline"
    >
      <div className="flex justify-between items-start gap-3">
        <h3 className="font-display text-lg font-semibold text-[var(--color-brand-navy)] group-hover:text-[var(--color-brand-gold)] transition-colors">
          {procedure.title}
        </h3>
        <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-[var(--color-brand-gold)] transition-colors flex-shrink-0" />
      </div>
      <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{procedure.shortDescription}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
        <span className="bg-zinc-100 px-2 py-1 rounded">{procedure.duration}</span>
        <span className="bg-zinc-100 px-2 py-1 rounded">{procedure.recovery}</span>
      </div>
    </Link>
  );
}
