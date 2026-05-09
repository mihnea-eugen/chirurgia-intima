import Link from "next/link";
import { SITE } from "@/lib/site";
import { proceduri } from "@/lib/proceduri";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-navy)] text-white mt-20">
      <div className="container-wide py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-display font-semibold text-lg mb-3">Dr. Diana Gheorghiță</div>
          <p className="text-sm text-white/80 leading-relaxed">
            Singurul medic femeie din România specializat sistematic în chirurgia intimă masculină. ISAPS, peste {SITE.trust.yearsExperience} ani experiență.
          </p>
          <div className="mt-4 flex flex-col gap-1 text-sm text-white/80">
            <a href="https://www.isaps.org/" target="_blank" rel="noopener noreferrer" className="text-white/90 underline">Verifică ISAPS</a>
            <a href="https://www.cmr.ro/" target="_blank" rel="noopener noreferrer" className="text-white/90 underline">Colegiul Medicilor</a>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3 text-sm tracking-wide uppercase opacity-90">Proceduri</div>
          <ul className="space-y-2 text-sm">
            {proceduri.slice(0, 8).map((p) => (
              <li key={p.slug}>
                <Link href={`/proceduri/${p.slug}`} className="text-white/85 no-underline hover:text-[var(--color-brand-gold)]">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3 text-sm tracking-wide uppercase opacity-90">Resurse</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/despre" className="text-white/85 no-underline">Despre Dr. Diana</Link></li>
            <li><Link href="/de-ce-medic-femeie" className="text-white/85 no-underline">De ce medic femeie</Link></li>
            <li><Link href="/clinica-pogany" className="text-white/85 no-underline">Clinica Pogany</Link></li>
            <li><Link href="/discretie" className="text-white/85 no-underline">Discreție și GDPR</Link></li>
            <li><Link href="/intrebari-frecvente" className="text-white/85 no-underline">Întrebări frecvente</Link></li>
            <li><Link href="/dictionar-termeni" className="text-white/85 no-underline">Dicționar termeni</Link></li>
            <li><Link href="/blog" className="text-white/85 no-underline">Blog</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3 text-sm tracking-wide uppercase opacity-90">Contact</div>
          <ul className="space-y-2 text-sm text-white/85">
            <li>{SITE.clinic.name}</li>
            <li>{SITE.clinic.streetAddress}</li>
            <li>{SITE.clinic.addressLocality}, România</li>
            <li><a href={`tel:${SITE.phone}`} className="text-white/95 underline">{SITE.phone}</a></li>
            <li><a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-white/95 underline">WhatsApp</a></li>
            <li><a href={`mailto:${SITE.email}`} className="text-white/95 underline">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-wide py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/70">
          <span>© {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.</span>
          <div className="flex items-center gap-4">
            <Link href="/gdpr" className="text-white/80 no-underline">GDPR</Link>
            <Link href="/termeni" className="text-white/80 no-underline">Termeni</Link>
            <Link href="/cookies" className="text-white/80 no-underline">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
