import type { Metadata } from "next";
import { MapPin, Hospital, Clock, Stethoscope } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Clinica Pogany", description: "Clinica privată acreditată unde Dr. Diana operează. Echipament chirurgical complet, anestezist propriu, protocol GDPR." };

export default function Page() {
  return (
    <div className="container-narrow py-12">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Clinica Pogany", url:"/clinica-pogany"}]} />
      <h1 className="font-display">Clinica Pogany</h1>
      <p className="lead text-zinc-700 mt-2">Clinică privată acreditată în București unde Dr. Diana operează. Toate procedurile intime masculine se desfășoară aici sub anestezie corespunzătoare și protocol steril modern.</p>
      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <div className="bg-white border border-zinc-200 p-5 rounded-xl"><MapPin className="w-6 h-6 text-[var(--color-brand-gold)]" /><div className="text-xs uppercase tracking-wide text-zinc-500 mt-3">Adresă</div><div className="font-display text-base text-[var(--color-brand-navy)] font-semibold mt-1">{SITE.clinic.streetAddress}<br/>{SITE.clinic.addressLocality}</div></div>
        <div className="bg-white border border-zinc-200 p-5 rounded-xl"><Hospital className="w-6 h-6 text-[var(--color-brand-gold)]" /><div className="text-xs uppercase tracking-wide text-zinc-500 mt-3">Echipament</div><div className="text-zinc-700 mt-1 text-sm">Sală chirurgie sterilă, monitorizare anestezică completă, recovery room.</div></div>
        <div className="bg-white border border-zinc-200 p-5 rounded-xl"><Stethoscope className="w-6 h-6 text-[var(--color-brand-gold)]" /><div className="text-xs uppercase tracking-wide text-zinc-500 mt-3">Echipă</div><div className="text-zinc-700 mt-1 text-sm">Anestezist propriu, asistente specializate, recepție cu protocol confidențialitate.</div></div>
        <div className="bg-white border border-zinc-200 p-5 rounded-xl"><Clock className="w-6 h-6 text-[var(--color-brand-gold)]" /><div className="text-xs uppercase tracking-wide text-zinc-500 mt-3">Program</div><div className="text-zinc-700 mt-1 text-sm">Luni–Vineri 09:00–19:00. Programare prealabilă obligatorie.</div></div>
      </div>
      <CTABanner />
    </div>
  );
}
