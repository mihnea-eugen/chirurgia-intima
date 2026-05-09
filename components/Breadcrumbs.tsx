import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }: { items: { name: string; url: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, idx) => (
          <li key={idx} className="flex items-center gap-1">
            {idx > 0 && <ChevronRight className="w-3 h-3" />}
            {idx === items.length - 1 ? (
              <span className="text-zinc-700">{it.name}</span>
            ) : (
              <Link href={it.url} className="text-zinc-500 hover:text-[var(--color-brand-navy)] no-underline">{it.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
