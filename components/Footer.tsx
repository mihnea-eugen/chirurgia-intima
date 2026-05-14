import Link from "next/link";
import { SITE } from "@/lib/site";

const footerMasculin = [
  { slug: "faloplastie", title: "Alungire chirurgicală" },
  { slug: "ingrosare-penis-lipofilling", title: "Îngroșare cu lipofilling" },
  { slug: "marire-penis-acid-hialuronic", title: "Acid hialuronic" },
  { slug: "fimoza", title: "Fimoza la adulți" },
  { slug: "circumcizie", title: "Circumcizie" }
];

const footerFeminin = [
  { slug: "labioplastie", title: "Labioplastie" },
  { slug: "himenoplastie", title: "Himenoplastie" },
  { slug: "augmentare-punct-g", title: "Augmentare punctul G" }
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-navy)] text-white mt-16 lg:mt-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* BRAND - full width on mobile, normal on lg */}
          <div className="col-span-2 lg:col-span-1">
            <div className="font-display text-lg sm:text-xl mb-2 leading-tight">Dr. Diana Gheorghiță</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-brand-gold-soft)] mb-3">Genitoplastie M+F</div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
              Specializat în genitoplastie masculină și feminină. Membră ISAPS, peste {SITE.trust.proceduresPerformed}+ proceduri.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <a href="https://www.isaps.org/" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-[var(--color-brand-gold)] transition-colors">ISAPS</a>
              <a href="https://www.cmr.ro/" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-[var(--color-brand-gold)] transition-colors">CMR</a>
            </div>
          </div>

          {/* BARBATI */}
          <div>
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-gold-soft)] mb-3">Bărbați</div>
            <ul className="space-y-1.5">
              {footerMasculin.map((p) => (
                <li key={p.slug}>
                  <Link href={`/proceduri/${p.slug}`} className="text-xs sm:text-sm text-white/80 hover:text-[var(--color-brand-gold)] transition-colors block">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FEMEI */}
          <div>
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-gold-soft)] mb-3">Femei</div>
            <ul className="space-y-1.5">
              {footerFeminin.map((p) => (
                <li key={p.slug}>
                  <Link href={`/proceduri/${p.slug}`} className="text-xs sm:text-sm text-white/80 hover:text-[var(--color-brand-gold)] transition-colors block">
                    {p.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/proceduri" className="text-[10px] sm:text-xs font-semibold text-[var(--color-brand-gold)] hover:text-white">Vezi toate →</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT - full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-gold-soft)] mb-3">Contact</div>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-white/70 leading-relaxed">
                {SITE.clinic.streetAddress}<br />
                {SITE.clinic.addressLocality}, în {SITE.clinic.name}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <a href={`tel:${SITE.phone}`} className="text-white tabular-nums hover:text-[var(--color-brand-gold)] transition-colors">{SITE.phone}</a>
                <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[var(--color-brand-gold)] transition-colors">WhatsApp</a>
              </div>
              <a href={`mailto:${SITE.email}`} className="text-white/80 hover:text-[var(--color-brand-gold)] transition-colors break-all block">{SITE.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-white/55">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/gdpr" className="text-white/65 hover:text-white transition-colors">GDPR</Link>
            <Link href="/termeni" className="text-white/65 hover:text-white transition-colors">Termeni</Link>
            <Link href="/cookies" className="text-white/65 hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
