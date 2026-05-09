import type { Metadata } from "next";
import { Phone, MessageCircle, ClipboardCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Programare consultație", description: "Programare consultație Dr. Diana Gheorghiță. Consultație 70 EUR. Telemedicină disponibilă." };

export default function Page() {
  return (
    <div className="container-narrow py-12">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Programare", url:"/programare"}]} />
      <h1 className="font-display">Programare consultație</h1>
      <p className="lead text-zinc-700 mt-2">Consultația se desfășoară 30-45 minute la Clinica Pogany sau prin telemedicină. Cost: 70 EUR.</p>
      <div className="bg-[var(--color-brand-cream)] border border-zinc-200 rounded-xl p-6 mt-8">
        <h3 className="font-display text-xl">Pentru programare imediată</h3>
        <div className="flex flex-wrap gap-3 mt-4">
          <a href={`tel:${SITE.phone}`} className="btn btn-primary"><Phone className="w-4 h-4" /> Sună acum {SITE.phone}</a>
          <a href={`https://wa.me/${SITE.whatsapp.replace(/\\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="btn btn-gold"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
          <a href={`mailto:${SITE.email}`} className="btn btn-outline">Email</a>
        </div>
      </div>
      <div className="bg-white border border-zinc-200 rounded-xl p-6 mt-6">
        <h3 className="font-display text-xl">Ce conține consultația</h3>
        <ul className="mt-3 space-y-2 text-zinc-700">
          <li>• Examinare clinică completă, măsurători standardizate</li>
          <li>• Discuție deschisă despre obiective și așteptări</li>
          <li>• Recomandare procedură sau combinație de proceduri</li>
          <li>• Plan financiar (TBI Bank disponibil)</li>
          <li>• Calendar pre/post-op detaliat</li>
        </ul>
      </div>
      <p className="text-sm text-zinc-500 italic mt-4">Consultația este plătită și nu se deduce din prețul procedurii.</p>
    </div>
  );
}
