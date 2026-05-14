import type { Metadata } from "next";
import Link from "next/link";
import { proceduri } from "@/lib/proceduri";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Genitoplastie București, femei și bărbați | Dr. Diana Gheorghiță",
  description: "Genitoplastie pentru femei și bărbați în București cu Dr. Diana Gheorghiță. Labioplastie, himenoplastie, augmentare punctul G, faloplastie, circumcizie, fimoză. Membră ISAPS, peste 10 ani experiență, 140 recenzii 4,9/5.",
};

const proceduriFeminine = proceduri.filter(p => p.category?.startsWith("feminin"));
const proceduriMasculine = proceduri.filter(p => !p.category?.startsWith("feminin"));

function ProcedureCard({ p }: { p: (typeof proceduri)[number] }) {
  return (
    <Link
      href={`/proceduri/${p.slug}`}
      className="block rounded-xl border border-zinc-200 bg-white p-6 hover:border-[var(--color-brand-gold)] hover:shadow-md transition"
    >
      <h3 className="font-display text-xl text-[var(--color-brand-navy)] mb-2">{p.title}</h3>
      <p className="text-sm text-zinc-600 line-clamp-3 mb-4">{p.shortDescription}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-[var(--color-brand-navy)]">{p.cost}</span>
        <span className="text-zinc-500">{p.duration}</span>
      </div>
    </Link>
  );
}

export default function GenitoplastiePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <Breadcrumbs items={[{ name: "Acasă", url: "/" }, { name: "Genitoplastie", url: "/genitoplastie" }]} />

      <div className="mt-8">
        <div className="text-xs uppercase tracking-widest text-[var(--color-brand-gold-deep)] mb-4">Specialitate Dr. Diana</div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
          Genitoplastie pentru femei și bărbați
        </h1>
        <p className="text-lg text-zinc-700 leading-relaxed mb-4 max-w-3xl">
          Genitoplastia este chirurgia organelor genitale cu scop estetic, funcțional sau reconstructiv. Dr. Diana Gheorghiță practică toate procedurile principale pentru ambele sexe în București, cu protocol de discreție GDPR și consultație privată.
        </p>
        <p className="text-lg text-zinc-700 leading-relaxed mb-8 max-w-3xl">
          Medic specialist în chirurgie plastică, estetică și microchirurgie reconstructivă, membră ISAPS, peste 10 ani experiență, 140 recenzii 4,9/5 pe Google.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <Link href="/programare" className="btn btn-primary">Programare consultație</Link>
          <Link href="/preturi" className="btn btn-outline">Vezi prețurile</Link>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-brand-navy)] mb-2">Genitoplastie feminină</h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">Proceduri pentru armonia anatomică, confortul funcțional și încrederea intimă a pacientelor.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proceduriFeminine.map(p => <ProcedureCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-brand-navy)] mb-2">Genitoplastie masculină</h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">Proceduri pentru augmentare, reparare, regenerare și tratamente urologice estetice.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proceduriMasculine.map(p => <ProcedureCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="mt-16 rounded-2xl bg-[var(--color-brand-cream)] p-8 sm:p-10 lg:p-12">
        <h2 className="font-display text-2xl sm:text-3xl text-[var(--color-brand-navy)] mb-6">De ce Dr. Diana pentru genitoplastie</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-display text-[var(--color-brand-gold-deep)] mb-1">10+</div>
            <div className="text-sm text-zinc-700">Ani experiență chirurgie plastică și reconstructivă.</div>
          </div>
          <div>
            <div className="text-3xl font-display text-[var(--color-brand-gold-deep)] mb-1">1.000+</div>
            <div className="text-sm text-zinc-700">Proceduri intime efectuate, M și F, în București.</div>
          </div>
          <div>
            <div className="text-3xl font-display text-[var(--color-brand-gold-deep)] mb-1">4,9/5</div>
            <div className="text-sm text-zinc-700">140 recenzii Google, evaluări post-procedură reale.</div>
          </div>
          <div>
            <div className="text-3xl font-display text-[var(--color-brand-gold-deep)] mb-1">ISAPS</div>
            <div className="text-sm text-zinc-700">Membră Societatea Internațională de Chirurgie Estetică.</div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl sm:text-3xl text-[var(--color-brand-navy)] mb-4">Întrebări frecvente</h2>
        <div className="space-y-4 max-w-3xl">
          <details className="border border-zinc-200 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer text-[var(--color-brand-navy)]">Ce înseamnă genitoplastie?</summary>
            <p className="mt-2 text-zinc-700">Genitoplastia este ansamblul intervențiilor chirurgicale și non-chirurgicale care modifică structura sau aspectul organelor genitale externe, cu scop estetic, funcțional sau reconstructiv. Include proceduri pentru ambele sexe.</p>
          </details>
          <details className="border border-zinc-200 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer text-[var(--color-brand-navy)]">Care este nivelul de discreție?</summary>
            <p className="mt-2 text-zinc-700">Protocol GDPR strict, consultație în cameră privată, factură neutră fără diagnostic explicit, plată cash sau card, comunicare doar pe telefonul indicat. Niciun mesaj public nu identifică procedura.</p>
          </details>
          <details className="border border-zinc-200 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer text-[var(--color-brand-navy)]">Există finanțare în rate?</summary>
            <p className="mt-2 text-zinc-700">Da, prin TBI Bank, partener Dr. Diana. Plată în rate până la 36 luni, aprobare în 24 ore, condițiile finale se discută la consultație.</p>
          </details>
          <details className="border border-zinc-200 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer text-[var(--color-brand-navy)]">Unde se efectuează intervențiile?</summary>
            <p className="mt-2 text-zinc-700">În Clinica Pogany, București, Strada Mugur Mugurel 4. Clinică privată acreditată, dotată complet pentru chirurgie ambulatorie.</p>
          </details>
        </div>
      </section>

      <div className="mt-16">
        <CTABanner />
      </div>
    </div>
  );
}
