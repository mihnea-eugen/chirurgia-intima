import { Star } from "lucide-react";
import { SITE } from "@/lib/site";

export default function TrustBar() {
  return (
    <div className="bg-[var(--color-brand-navy)] text-white text-[11px] sm:text-xs tracking-wide">
      <div className="container-wide py-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-center">
        <span className="inline-flex items-center gap-1.5">
          <Star className="w-3 h-3 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" />
          <span className="tabular-nums">{SITE.trust.rating}/5</span>
          <span className="opacity-80">din {SITE.trust.reviewCount} recenzii Google</span>
        </span>
        <span className="opacity-40">·</span>
        <span><span className="tabular-nums">{SITE.trust.yearsExperience}+</span> ani experiență</span>
        <span className="opacity-40">·</span>
        <span>Membră ISAPS</span>
        <span className="opacity-40">·</span>
        <span>Clinica Pogany</span>
      </div>
    </div>
  );
}
