import type { Metadata } from "next";
import { ShieldCheck, Lock, EyeOff, FileX } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = { title: "Discreție și confidențialitate", description: "Protocol GDPR strict, facturare neutră, no-photo policy, raportare publică zero. Standardul de discreție pentru chirurgia intimă masculină." };

const items = [
  { i: ShieldCheck, t: "Protocol GDPR strict", d: "Date pacient stocate exclusiv pe servere RO/UE conforme GDPR. Niciodată partajate cu terți." },
  { i: Lock, t: "Facturare neutră", d: "Extrasul de cont va afișa doar 'Cabinet Medical Diana Gheorghiță' — fără descrierea procedurii." },
  { i: EyeOff, t: "No-photo policy", d: "Nu luăm foto pacient fără acord scris explicit. Galeriile cu rezultate sunt complet anonime." },
  { i: FileX, t: "Zero raportare publică", d: "Niciodată nu apareți în postari sociale, articole sau cazuri publice. Discuțiile cu Dr. Diana sunt strict private." }
];

export default function Page() {
  return (
    <div className="container-narrow py-12">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Discreție", url:"/discretie"}]} />
      <h1 className="font-display">Discreție și confidențialitate</h1>
      <p className="lead text-zinc-700 mt-2">Element diferențiator major pentru chirurgia intimă masculină. Niciun competitor RO nu operează cu acest protocol de discreție.</p>
      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {items.map((it, idx) => {
          const Icon = it.i;
          return (
            <div key={idx} className="bg-white border border-zinc-200 p-5 rounded-xl">
              <Icon className="w-6 h-6 text-[var(--color-brand-gold)]" />
              <h3 className="text-lg font-display mt-3">{it.t}</h3>
              <p className="text-zinc-700 text-sm mt-2">{it.d}</p>
            </div>
          );
        })}
      </div>
      <CTABanner />
    </div>
  );
}
