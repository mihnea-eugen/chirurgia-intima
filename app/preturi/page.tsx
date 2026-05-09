import type { Metadata } from "next";
import { proceduri } from "@/lib/proceduri";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = { title: "Prețuri proceduri intime masculine", description: "Prețuri transparente toate procedurile intime masculine. Finanțare TBI Bank disponibilă." };

export default function Page() {
  return (
    <div className="container-wide py-12">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Prețuri", url:"/preturi"}]} />
      <h1 className="font-display">Prețuri proceduri intime masculine</h1>
      <p className="lead text-zinc-700 mt-2">Prețuri transparente. Finanțare TBI Bank disponibilă. Consultația se plătește și nu se deduce din prețul procedurii.</p>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[var(--color-brand-navy)] text-white">
              <th className="text-left p-3">Procedură</th>
              <th className="text-left p-3">Cost</th>
              <th className="text-left p-3 hidden sm:table-cell">Durată</th>
              <th className="text-left p-3 hidden md:table-cell">Recuperare</th>
            </tr>
          </thead>
          <tbody>
            {proceduri.map(p => (
              <tr key={p.slug} className="border-b border-zinc-200 hover:bg-zinc-50">
                <td className="p-3 font-semibold text-[var(--color-brand-navy)]">{p.title}</td>
                <td className="p-3">{p.cost}</td>
                <td className="p-3 text-sm hidden sm:table-cell">{p.duration}</td>
                <td className="p-3 text-sm hidden md:table-cell">{p.recovery}</td>
              </tr>
            ))}
            <tr className="border-b border-zinc-200">
              <td className="p-3 font-semibold text-[var(--color-brand-navy)]">Consultație</td>
              <td className="p-3">70 EUR</td>
              <td className="p-3 text-sm hidden sm:table-cell">30-45 min</td>
              <td className="p-3 text-sm hidden md:table-cell">—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-zinc-500 mt-4 italic">Prețurile pot varia în funcție de complexitatea cazului. Stabilirea finală a prețului se face în consultație. Finanțare TBI Bank disponibilă până la 36 luni.</p>
      <CTABanner />
    </div>
  );
}
