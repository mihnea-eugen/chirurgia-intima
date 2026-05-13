"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X, Phone, ChevronDown, Home } from "lucide-react";
import TrustBar from "./TrustBar";
import { SITE } from "@/lib/site";

type ProcedureLink = { slug: string; title: string; tag: string };

const masculin: ProcedureLink[] = [
  { slug: "alungire-penis", title: "Alungire chirurgicală", tag: "Faloplastie 2-5 cm" },
  { slug: "ingrosare-lipofilling", title: "Îngroșare cu lipofilling", tag: "Grăsime proprie" },
  { slug: "ingrosare-acid-hialuronic", title: "Augmentare acid hialuronic", tag: "Reversibil" },
  { slug: "fimoza", title: "Fimoza la adulți", tag: "Conservator + chirurgical" },
  { slug: "circumcizie", title: "Circumcizie", tag: "Anestezie locală" },
  { slug: "p-shot-prp", title: "P-Shot, plasmă proprie", tag: "Tratament regenerativ" },
  { slug: "extractie-kanamicina", title: "Extracție corpi străini", tag: "Kanamicină, silicon" }
];

const feminin: ProcedureLink[] = [
  { slug: "labioplastie", title: "Labioplastie", tag: "Reducere labii mici" },
  { slug: "perineorafie", title: "Perineorafie", tag: "Refacere perineu" },
  { slug: "himenoplastie", title: "Himenoplastie", tag: "Refacere himen, GDPR" },
  { slug: "augmentare-punct-g", title: "Augmentare punctul G", tag: "Acid hialuronic sau grăsime proprie" }
];

const aboutLinks = [
  { href: "/despre", label: "Despre Dr. Diana", meta: "Bio, ISAPS" },
  { href: "/discretie", label: "Discreție și GDPR", meta: "Protocol confidențialitate" }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "proc" | "about">(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = (m: "proc" | "about") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(m);
  };
  const leave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <TrustBar />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-6 py-4 lg:py-5">
        <Link href="/" className="shrink-0 no-underline" aria-label="Dr. Diana Gheorghiță, specialista în genitoplastie, mergi la pagina principală">
          <img
            src="/logo-drdiana.png"
            alt="Dr. Diana Gheorghiță, specialista în genitoplastie"
            width={240}
            height={57}
            className="h-9 sm:h-12 w-auto block"
            loading="eager"
            decoding="sync"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-700 hover:text-[var(--color-brand-navy)] transition-colors">
            <Home className="w-4 h-4" /> Acasă
          </Link>

          <div className="relative" onMouseEnter={() => enter("proc")} onMouseLeave={leave}>
            <button
              className="inline-flex items-center gap-1 text-sm text-zinc-700 hover:text-[var(--color-brand-navy)] transition-colors py-2"
              aria-expanded={openMenu === "proc"}
            >
              Proceduri <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white border border-zinc-200 rounded-xl shadow-2xl z-50 transition-all ${openMenu === "proc" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`}
              style={{ width: 720 }}
            >
              <div className="grid grid-cols-2">
                <div className="p-6 border-r border-zinc-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-[var(--color-brand-gold)]" />
                    <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-gold-deep)]">Bărbați</div>
                  </div>
                  <div className="space-y-1">
                    {masculin.map((it) => (
                      <Link key={it.slug} href={`/proceduri/${it.slug}`} className="block p-2 rounded-lg hover:bg-zinc-50 no-underline transition-colors">
                        <div className="text-sm font-medium text-[var(--color-brand-navy)] leading-tight">{it.title}</div>
                        <div className="text-xs text-zinc-500 mt-0.5">{it.tag}</div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-[var(--color-brand-gold)]" />
                    <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-gold-deep)]">Femei</div>
                  </div>
                  <div className="space-y-1">
                    {feminin.map((it) => (
                      <Link key={it.slug} href={`/proceduri/${it.slug}`} className="block p-2 rounded-lg hover:bg-zinc-50 no-underline transition-colors">
                        <div className="text-sm font-medium text-[var(--color-brand-navy)] leading-tight">{it.title}</div>
                        <div className="text-xs text-zinc-500 mt-0.5">{it.tag}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-zinc-200 px-6 py-3 bg-zinc-50 rounded-b-xl">
                <Link href="/proceduri" className="text-xs font-semibold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-gold-deep)] no-underline inline-flex items-center gap-1">
                  Vezi toate procedurile →
                </Link>
              </div>
            </div>
          </div>

          <div className="relative" onMouseEnter={() => enter("about")} onMouseLeave={leave}>
            <button
              className="inline-flex items-center gap-1 text-sm text-zinc-700 hover:text-[var(--color-brand-navy)] transition-colors py-2"
              aria-expanded={openMenu === "about"}
            >
              Despre <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white border border-zinc-200 rounded-xl shadow-2xl z-50 transition-all p-4 ${openMenu === "about" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`}
              style={{ width: 320 }}
            >
              {aboutLinks.map((a) => (
                <Link key={a.href} href={a.href} className="block p-3 rounded-lg hover:bg-zinc-50 no-underline transition-colors">
                  <div className="text-sm font-medium text-[var(--color-brand-navy)] leading-tight">{a.label}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{a.meta}</div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/preturi" className="text-sm text-zinc-700 hover:text-[var(--color-brand-navy)] transition-colors">Prețuri</Link>
          <Link href="/intrebari-frecvente" className="text-sm text-zinc-700 hover:text-[var(--color-brand-navy)] transition-colors">Întrebări frecvente</Link>
          <Link href="/contact" className="text-sm text-zinc-700 hover:text-[var(--color-brand-navy)] transition-colors">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-1.5 text-sm text-zinc-700 hover:text-[var(--color-brand-navy)] tabular-nums transition-colors">
            <Phone className="w-4 h-4" /> {SITE.phone}
          </a>
          <Link href="/programare" className="btn btn-primary text-sm">
            Programare consultație
          </Link>
        </div>

        <button
          aria-label="Deschide meniu"
          className="lg:hidden p-2 text-[var(--color-brand-navy)]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6 flex flex-col gap-2">
            <Link href="/" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-2 text-base text-zinc-800 no-underline py-3 border-b border-zinc-100">
              <Home className="w-4 h-4" /> Acasă
            </Link>

            <details className="group border-b border-zinc-100 py-3">
              <summary className="text-base text-zinc-800 cursor-pointer flex justify-between items-center list-none font-medium">
                Proceduri <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4 space-y-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-gold-deep)] mb-2">Bărbați</div>
                  <div className="space-y-1 pl-3 border-l-2 border-zinc-200">
                    {masculin.map((it) => (
                      <Link key={it.slug} href={`/proceduri/${it.slug}`} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-zinc-700 no-underline">
                        {it.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-gold-deep)] mb-2">Femei</div>
                  <div className="space-y-1 pl-3 border-l-2 border-zinc-200">
                    {feminin.map((it) => (
                      <Link key={it.slug} href={`/proceduri/${it.slug}`} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-zinc-700 no-underline">
                        {it.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/proceduri" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-semibold text-[var(--color-brand-gold-deep)] no-underline">
                  Vezi toate procedurile →
                </Link>
              </div>
            </details>

            <details className="group border-b border-zinc-100 py-3">
              <summary className="text-base text-zinc-800 cursor-pointer flex justify-between items-center list-none font-medium">
                Despre <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-3 pl-3 border-l-2 border-zinc-200 space-y-1">
                {aboutLinks.map((a) => (
                  <Link key={a.href} href={a.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-zinc-700 no-underline">
                    {a.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/preturi" onClick={() => setMobileOpen(false)} className="text-base text-zinc-800 no-underline py-3 border-b border-zinc-100">Prețuri</Link>
            <Link href="/intrebari-frecvente" onClick={() => setMobileOpen(false)} className="text-base text-zinc-800 no-underline py-3 border-b border-zinc-100">Întrebări frecvente</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-base text-zinc-800 no-underline py-3 border-b border-zinc-100">Contact</Link>
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 text-zinc-800 no-underline py-3 border-b border-zinc-100">
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <Link href="/programare" onClick={() => setMobileOpen(false)} className="btn btn-primary justify-center mt-3">
              Programare consultație
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
