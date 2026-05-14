import type { Metadata } from "next";
import { proceduri } from "@/lib/proceduri";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Prețuri genitoplastie București | Femei și bărbați | Dr. Diana",
  description: "Prețuri transparente pentru toate procedurile de genitoplastie M+F (faloplastie, labioplastie, himenoplastie, augmentare punctul G). Finanțare TBI Bank disponibilă până la 36 luni.",
};

const proceduriFeminine = proceduri.filter(p => p.category?.startsWith("feminin"));
const proceduriMasculine = proceduri.filter(p => !p.category?.startsWith("feminin"));

function TabelProceduri({ items, titlu }: { items: typeof proceduri; titlu: string }) {
  return (
    <div className="mt-10">
      <h2 className="font-display text-2xl sm:text-3xl text-[var(--color-brand-navy)] mb-4">{titlu}</h2>
      <div className="overflow-x-auto rounded-lg border border-zinc-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[var(--color-brand-navy)] text-white">
              <th className="text-left p-3 text-sm sm:text-base">Procedură</th>
              <th className="text-left p-3 text-sm sm:text-base">Cost</th>
              <th className="text-left p-3 text-sm hidden sm:table-cell">Durată</th>
              <th className="text-left p-3 text-sm hidden md:table-cell">Recuperare</th>
            </tr>
          </thead>
          <tbody>
            {items.map(p => (
              <tr key={p.slug} className="border-b border-zinc-200 hover:bg-zinc-50">
                <td className="p-3 font-semibold text-[var(--color-brand-navy)]">
                  <a href={`/proceduri/${p.slug}`} className="hover:underline">{p.title}</a>
                </td>
                <td className="p-3 font-medium">{p.cost}</td>
                <td className="p-3 text-sm hidden sm:table-cell">{p.duration}</td>
                <td className="p-3 text-sm hidden md:table-cell">{p.recovery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Prețuri", url:"/preturi"}]} />

      <h1 className="font-display mt-8">Prețuri genitoplastie București</h1>
      <p className="lead text-zinc-700 mt-2 max-w-3xl">
        Prețuri transparente pentru toate procedurile de genitoplastie feminină și masculină efectuate de Dr. Diana Gheorghiță. Consultația se plătește separat și nu se deduce din prețul procedurii. Finanțare TBI Bank disponibilă până la 36 luni.
      </p>

      <TabelProceduri items={proceduriFeminine} titlu="Proceduri feminine" />
      <TabelProceduri items={proceduriMasculine} titlu="Proceduri masculine" />

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg border border-zinc-200 p-5">
          <h3 className="font-semibold text-[var(--color-brand-navy)]">Consultația</h3>
          <p className="text-sm text-zinc-700 mt-1">70 EUR, 30 până la 45 minute, examinare clinică și plan personalizat. Nu se deduce din costul procedurii.</p>
        </div>
        <div className="rounded-lg border border-zinc-200 p-5">
          <h3 className="font-semibold text-[var(--color-brand-navy)]">Finanțare TBI Bank</h3>
          <p className="text-sm text-zinc-700 mt-1">Plată în rate fără dobândă sau cu dobândă redusă, până la 36 luni. Aprobat în 24 ore.</p>
        </div>
      </div>

      <p className="text-sm text-zinc-500 mt-6 italic">
        Prețurile pot varia în funcție de complexitatea cazului. Stabilirea finală a prețului se face în consultație. Costurile includ intervenția, anestezia, externarea aceeași zi și controalele post-procedurale standard.
      </p>

      <div className="mt-12">
        <CTABanner />
      </div>
    </div>
  );
}
