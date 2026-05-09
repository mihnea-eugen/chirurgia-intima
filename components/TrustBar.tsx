import { Star } from "lucide-react";
import { SITE } from "@/lib/site";

export default function TrustBar() {
  return (
    <div className="bg-[var(--color-brand-navy)] text-white text-xs sm:text-sm">
      <div className="container-wide py-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
        <span className="inline-flex items-center gap-1">
          <Star className="w-3 h-3 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" />
          {SITE.trust.rating}/5 din {SITE.trust.reviewCount} recenzii Google
        </span>
        <span className="opacity-70">·</span>
        <span>{SITE.trust.yearsExperience}+ ani experiență</span>
        <span className="opacity-70">·</span>
        <span>Membră ISAPS</span>
        <span className="opacity-70">·</span>
        <span>Clinica Pogany</span>
      </div>
    </div>
  );
}
