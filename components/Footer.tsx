import Link from "next/link";
import { SITE } from "@/lib/site";

const footerMasculin = [
  { slug: "alungire-penis", title: "Alungire chirurgicală" },
  { slug: "ingrosare-lipofilling", title: "Îngroșare cu lipofilling" },
  { slug: "fimoza", title: "Fimoza la adulți" },
  { slug: "circumcizie-adulti", title: "Circumcizie adulți" }
];

const footerFeminin = [
  { slug: "labioplastie", title: "Labioplastie" },
  { slug: "vaginoplastie", title: "Vaginoplastie" },
  { slug: "perineorafie", title: "Perineorafie" },
  { slug: "augmentare-punct-g", title: "Augmentare punctul G" }
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-navy)] text-white mt-24 lg:mt-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <div className="font-display text-xl mb-3 leading-tight">Dr. Diana Gheorghiță</div>
            <div className="text-xs uppercase tracking-widest text-[var(--color-brand-gold-soft)] mb-4">Chirurgie intimă</div>
            <p className="text-sm text-white/75 leading-relaxed">
              Medic-femeie specializat sistematic în chirurgia intimă masculină și feminină. Membră ISAPS, peste {SITE.trust.proceduresPerformed}+ proceduri intime.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href="https://www.isaps.org/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-[var(--color-brand-gold)] transition-colors">Verifică ISAPS</a>
              <a href="https://www.cmr.ro/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-[var(--color-brand-gold)] transition-colors">Colegiul Medicilor</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-gold-soft)] mb-5">Bărbați</div>
            <ul className="space-y-3">
              {footerMasculin.map((p) => (
                <li key={p.slug}>
                  <Link href={`/proceduri/${p.slug}`} className="text-sm text-white/85 hover:text-[var(--color-brand-gold)] transition-colors leading-relaxed block">
                    {p.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/proceduri" className="text-xs font-semibold text-[var(--color-brand-gold)] hover:text-white transition-colors">
                  Vezi toate →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-gold-soft)] mb-5">Femei</div>
            <ul className="space-y-3">
              {footerFeminin.map((p) => (
                <li key={p.slug}>
                  <Link href={`/proceduri/${p.slug}`} className="text-sm text-white/85 hover:text-[var(--color-brand-gold)] transition-colors leading-relaxed block">
                    {p.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/proceduri" className="text-xs font-semibold text-[var(--color-brand-gold)] hover:text-white transition-colors">
                  Vezi toate →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-gold-soft)] mb-5">Contact</div>
            <ul className="space-y-3">
              <li className="text-white/85 text-sm leading-relaxed">
                Clinică privată acreditată<br />
                {SITE.clinic.streetAddress}<br />
                {SITE.clinic.addressLocality}, România
              </li>
              <li><a href={`tel:${SITE.phone}`} className="text-sm text-white tabular-nums hover:text-[var(--color-brand-gold)] transition-colors">{SITE.phone}</a></li>
              <li><a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-sm text-white/85 hover:text-[var(--color-brand-gold)] transition-colors">WhatsApp</a></li>
              <li><a href={`mailto:${SITE.email}`} className="text-sm text-white/85 hover:text-[var(--color-brand-gold)] transition-colors break-all">{SITE.email}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/55">
          <span>© {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.</span>
          <div className="flex items-center gap-6">
            <Link href="/gdpr" className="text-white/70 hover:text-white transition-colors">GDPR</Link>
            <Link href="/termeni" className="text-white/70 hover:text-white transition-colors">Termeni și condiții</Link>
            <Link href="/cookies" className="text-white/70 hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
