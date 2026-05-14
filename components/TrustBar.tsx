import { Star, Award, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export default function TrustBar() {
  return (
    <div className="bg-[var(--color-brand-navy)] text-white border-b border-white/10">
      <div className="container-wide py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-xs sm:text-sm">
        <span className="inline-flex items-center gap-2">
          <Star className="w-4 h-4 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" />
          <span className="tabular-nums font-medium">{SITE.trust.rating}</span>
          <span className="opacity-75">din {SITE.trust.reviewCount} recenzii Google</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <Award className="w-4 h-4 text-[var(--color-brand-gold)]" />
          <span className="opacity-90">Membră ISAPS</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[var(--color-brand-gold)]" />
          <span className="opacity-90"><span className="tabular-nums font-medium">{SITE.trust.yearsExperience}+</span> ani experiență</span>
        </span>
      </div>
    </div>
  );
}
