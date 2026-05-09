"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import TrustBar from "./TrustBar";
import { SITE } from "@/lib/site";

type ProcedureLink = { slug: string; title: string; tag: string };

const procedureGroups: { heading: string; items: ProcedureLink[] }[] = [
  {
    heading: "Augmentare",
    items: [
      { slug: "alungire-penis", title: "Alungire chirurgicală", tag: "2-5 cm" },
      { slug: "ingrosare-lipofilling", title: "Îngroșare cu lipofilling", tag: "Permanent" },
      { slug: "ingrosare-acid-hialuronic", title: "Augmentare cu acid hialuronic", tag: "Reversibil" }
    ]
  },
  {
    heading: "Prepuț, glandulară",
    items: [
      { slug: "circumcizie-adulti", title: "Circumcizie adulți", tag: "Anestezie locală" }
    ]
  },
  {
    heading: "Curbură peniană",
    items: [
      { slug: "peyronie-nesbit", title: "Boala Peyronie, tehnică Nesbit", tag: "Curburi <60°" },
      { slug: "peyronie", title: "Boala Peyronie, ghid complet", tag: "Diagnostic + tratament" }
    ]
  },
  {
    heading: "Reparator și regenerativ",
    items: [
      { slug: "extractie-kanamicina", title: "Extracție kanamicina, silicon", tag: "Reabilitare" },
      { slug: "p-shot-prp", title: "P-Shot, Priapus Shot", tag: "PRP autolog" }
    ]
  }
];

const aboutLinks = [
  { href: "/despre", label: "Despre Dr. Diana", meta: "Bio, ISAPS, Carol Davila" },
  { href: "/de-ce-medic-femeie", label: "De ce medic femeie", meta: "Diferențiator clinic" },
  { href: "/clinica-pogany", label: "Clinica Pogany", meta: "Locație și echipă" },
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
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <TrustBar />
      <div className="container-wide flex items-center justify-between py-3 lg:py-4">
        <Link href="/" className="no-underline">
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-display font-medium text-[var(--color-brand-navy)] leading-tight tracking-tight">
              Dr. Diana Gheorghiță
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[var(--color-brand-gold-deep)] leading-tight mt-0.5">
              Chirurgie intimă masculină
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <div className="relative" onMouseEnter={() => enter("proc")} onMouseLeave={leave}>
            <button
              className="inline-flex items-center gap-1 text-sm text-zinc-700 hover:text-[var(--color-brand-navy)] transition-colors py-2"
              aria-expanded={openMenu === "proc"}
            >
              Proceduri <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className={`nav-dropdown ${openMenu === "proc" ? "open" : ""}`} style={{ minWidth: 720 }}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                {procedureGroups.map((g) => (
                  <div key={g.heading} className="mb-3">
                    <div className="eyebrow mb-1.5 px-0.5">{g.heading}</div>
                    {g.items.map((it) => (
                      <Link key={it.slug} href={`/proceduri/${it.slug}`} className="nav-dropdown-item no-underline">
                        <div className="nav-dropdown-item-title">{it.title}</div>
                        <div className="nav-dropdown-item-meta">{it.tag}</div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <hr className="divider-gold my-3" />
              <Link href="/proceduri" className="text-sm text-[var(--color-brand-navy)] no-underline hover:text-[var(--color-brand-gold-deep)] inline-flex items-center gap-1 px-1">
                Vezi toate procedurile
              </Link>
            </div>
          </div>

          <div className="relative" onMouseEnter={() => enter("about")} onMouseLeave={leave}>
            <button
              className="inline-flex items-center gap-1 text-sm text-zinc-700 hover:text-[var(--color-brand-navy)] transition-colors py-2"
              aria-expanded={openMenu === "about"}
            >
              Despre <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className={`nav-dropdown ${openMenu === "about" ? "open" : ""}`} style={{ minWidth: 320 }}>
              {aboutLinks.map((a) => (
                <Link key={a.href} href={a.href} className="nav-dropdown-item no-underline">
                  <div className="nav-dropdown-item-title">{a.label}</div>
                  <div className="nav-dropdown-item-meta">{a.meta}</div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/preturi" className="text-sm text-zinc-700 no-underline hover:text-[var(--color-brand-navy)]">Prețuri</Link>
          <Link href="/intrebari-frecvente" className="text-sm text-zinc-700 no-underline hover:text-[var(--color-brand-navy)]">Întrebări frecvente</Link>
          <Link href="/contact" className="text-sm text-zinc-700 no-underline hover:text-[var(--color-brand-navy)]">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-1 text-sm text-zinc-700 no-underline">
            <Phone className="w-4 h-4" /> {SITE.phone}
          </a>
          <Link href="/programare" className="btn btn-primary">
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
          <div className="container-wide py-4 flex flex-col gap-2">
            <details className="group">
              <summary className="text-base text-zinc-800 py-2 cursor-pointer flex justify-between items-center list-none">
                Proceduri <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-3 mt-1 space-y-1">
                {procedureGroups.flatMap((g) => g.items).map((it) => (
                  <Link key={it.slug} href={`/proceduri/${it.slug}`} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-zinc-700 no-underline">
                    {it.title}
                  </Link>
                ))}
                <Link href="/proceduri" onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-[var(--color-brand-gold-deep)] font-medium no-underline">
                  Vezi toate procedurile
                </Link>
              </div>
            </details>
            <details className="group">
              <summary className="text-base text-zinc-800 py-2 cursor-pointer flex justify-between items-center list-none">
                Despre <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-3 mt-1 space-y-1">
                {aboutLinks.map((a) => (
                  <Link key={a.href} href={a.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-zinc-700 no-underline">
                    {a.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/preturi" onClick={() => setMobileOpen(false)} className="text-base text-zinc-800 no-underline py-2">Prețuri</Link>
            <Link href="/intrebari-frecvente" onClick={() => setMobileOpen(false)} className="text-base text-zinc-800 no-underline py-2">Întrebări frecvente</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-base text-zinc-800 no-underline py-2">Contact</Link>
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-1 text-zinc-800 no-underline py-2">
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <Link href="/programare" onClick={() => setMobileOpen(false)} className="btn btn-primary justify-center mt-2">
              Programare consultație
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
