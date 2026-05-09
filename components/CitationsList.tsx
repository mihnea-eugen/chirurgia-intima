import { ExternalLink } from "lucide-react";
import type { Citation } from "@/lib/proceduri";

export default function CitationsList({ citations }: { citations: Citation[] }) {
  return (
    <ol className="list-decimal pl-5 space-y-3 text-sm text-zinc-700">
      {citations.map((c, idx) => (
        <li key={idx}>
          {c.text}{" "}
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--color-brand-navy)]"
          >
            {c.source} <ExternalLink className="w-3 h-3" />
          </a>
        </li>
      ))}
    </ol>
  );
}
