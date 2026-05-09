import type { Metadata } from "next";
import Link from "next/link";
import { proceduri } from "@/lib/proceduri";
import ProcedureCard from "@/components/ProcedureCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Proceduri intime masculine",
  description: "8 proceduri pillar pentru chirurgia intimă masculină — faloplastie, lipofilling, acid hialuronic, circumcizie, Peyronie Nesbit, P-Shot, extracție kanamicina."
};

const categories: Record<string, string> = {
  augmentare: "Augmentare (mărire) penis",
  preput: "Prepuț, gland, igienă",
  curbura: "Curbură, formă, funcție",
  reparator: "Reparator, corectiv, complicații",
  regenerativ: "Funcție sexuală, regenerativ"
};

export default function ProceduriPage() {
  const grouped = Object.keys(categories).map(cat => ({
    cat, label: categories[cat], items: proceduri.filter(p => p.category === cat)
  })).filter(g => g.items.length > 0);
  return (
    <div className="container-wide py-12">
      <Breadcrumbs items={[{name:"Acasă", url:"/"}, {name:"Proceduri", url:"/proceduri"}]} />
      <h1 className="font-display">Proceduri intime masculine</h1>
      <p className="lead text-zinc-700 max-w-3xl mt-2">Spectrul complet al chirurgiei intime masculine, organizate pe 5 cluștere terapeutice. Toate procedurile cu citare științifică, cifre realiste, FAQ și recuperare detaliată.</p>
      {grouped.map(g => (
        <section key={g.cat} className="mt-12">
          <h2 className="font-display">{g.label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {g.items.map(p => <ProcedureCard key={p.slug} procedure={p} />)}
          </div>
        </section>
      ))}
      <CTABanner />
    </div>
  );
}
