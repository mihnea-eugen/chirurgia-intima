import Link from "next/link";
import { SITE } from "@/lib/site";
import { proceduri } from "@/lib/proceduri";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-navy)] text-white mt-28">
      <div className="container-wide pt-[6rem] pb-[5rem] lg:pt-[9rem] lg:pb-[6rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-xl mb-3 leading-tight">Dr. Diana Gheorghiță</div>
          <div className="eyebrow text-[var(--color-brand-gold-soft)] mb-3">Chirurgie intimă masculină</div>
          <p className="text-sm text-white/75 leading-relaxed">
            Singurul medic femeie din România specializat sistematic în chirurgia intimă masculină. Membră ISAPS, peste {SITE.trust.proceduresPerformed}+ proceduri intime, {SITE.trust.yearsExperience}+ ani de practică.
          </p>
          <div className="mt-5 flex flex-col gap-1.5 text-sm">
            <a href="https://www.isaps.org/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-[var(--color-brand-gold)]">Verifică ISAPS</a>
            <a href="https://www.cmr.ro/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-[var(--color-brand-gold)]">Colegiul Medicilor</a>
          </div>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-gold-soft)] mb-4">Proceduri</div>
          <ul className="footer-list">
            {proceduri.slice(0, 8).map((p) => (
              <li key={p.slug}>
                <Link href={`/proceduri/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-gold-soft)] mb-4">Resurse</div>
          <ul className="footer-list">
            <li><Link href="/despre">Despre Dr. Diana</Link></li>
            <li><Link href="/de-ce-medic-femeie">De ce medic femeie</Link></li>
            <li><Link href="/discretie">Discreție și GDPR</Link></li>
            <li><Link href="/intrebari-frecvente">Întrebări frecvente</Link></li>
            <li><Link href="/dictionar-termeni">Dicționar termeni</Link></li>
            <li><Link href="/preturi">Prețuri</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-gold-soft)] mb-4">Contact</div>
          <ul className="footer-list">
            <li className="text-white/85 text-sm leading-relaxed">
              Clinică privată acreditată<br />
              {SITE.clinic.streetAddress}<br />
              {SITE.clinic.addressLocality}, România
            </li>
            <li><a href={`tel:${SITE.phone}`} className="text-white tabular-nums">{SITE.phone}</a></li>
            <li><a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-8 lg:py-10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/55">
          <span>© {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.</span>
          <div className="flex items-center gap-5">
            <Link href="/gdpr" className="text-white/70 hover:text-white">GDPR</Link>
            <Link href="/termeni" className="text-white/70 hover:text-white">Termeni și condiții</Link>
            <Link href="/cookies" className="text-white/70 hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
