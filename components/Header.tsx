"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import TrustBar from "./TrustBar";
import { SITE } from "@/lib/site";

const navItems = [
  { href: "/proceduri", label: "Proceduri" },
  { href: "/despre", label: "Despre Dr. Diana" },
  { href: "/discretie", label: "Discreție" },
  { href: "/preturi", label: "Preț" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <TrustBar />
      <div className="container-wide flex items-center justify-between py-3 lg:py-4">
        <Link href="/" className="no-underline">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-display font-semibold text-[var(--color-brand-navy)] leading-tight">
              Dr. Diana Gheorghiță
            </span>
            <span className="text-[11px] sm:text-xs text-zinc-500 leading-tight">
              Chirurgie intimă masculină
            </span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((it) => (
            <Link key={it.href} href={it.href} className="text-sm text-zinc-700 no-underline hover:text-[var(--color-brand-navy)]">
              {it.label}
            </Link>
          ))}
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
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-zinc-200 bg-white">
          <div className="container-wide py-4 flex flex-col gap-3">
            {navItems.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="text-base text-zinc-800 no-underline py-2"
              >
                {it.label}
              </Link>
            ))}
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-1 text-zinc-800 no-underline py-2">
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <Link href="/programare" onClick={() => setOpen(false)} className="btn btn-primary justify-center">
              Programare consultație
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
