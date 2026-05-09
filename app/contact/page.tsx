import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Dr. Diana Gheorghiță. Telefon, WhatsApp, email, adresă Clinica Pogany București." };

export default function Page() {
  return (
    <div className="container-narrow py-12">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Contact", url:"/contact"}]} />
      <h1 className="font-display">Contact</h1>
      <p className="lead text-zinc-700 mt-2">Pentru programare consultație sau întrebări, ne găsiți pe oricare dintre următoarele canale. Confidențialitate absolută.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <a href={`tel:${SITE.phone}`} className="bg-white border border-zinc-200 p-5 rounded-xl no-underline hover:border-[var(--color-brand-gold)]">
          <Phone className="w-6 h-6 text-[var(--color-brand-gold)]" />
          <div className="text-xs uppercase tracking-wide text-zinc-500 mt-3">Telefon</div>
          <div className="font-display text-xl text-[var(--color-brand-navy)] font-semibold">{SITE.phone}</div>
        </a>
        <a href={`https://wa.me/${SITE.whatsapp.replace(/\\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="bg-white border border-zinc-200 p-5 rounded-xl no-underline hover:border-[var(--color-brand-gold)]">
          <MessageCircle className="w-6 h-6 text-[var(--color-brand-gold)]" />
          <div className="text-xs uppercase tracking-wide text-zinc-500 mt-3">WhatsApp</div>
          <div className="font-display text-xl text-[var(--color-brand-navy)] font-semibold">Mesaj direct</div>
        </a>
        <a href={`mailto:${SITE.email}`} className="bg-white border border-zinc-200 p-5 rounded-xl no-underline hover:border-[var(--color-brand-gold)]">
          <Mail className="w-6 h-6 text-[var(--color-brand-gold)]" />
          <div className="text-xs uppercase tracking-wide text-zinc-500 mt-3">Email</div>
          <div className="font-display text-lg text-[var(--color-brand-navy)] font-semibold break-all">{SITE.email}</div>
        </a>
        <div className="bg-white border border-zinc-200 p-5 rounded-xl">
          <MapPin className="w-6 h-6 text-[var(--color-brand-gold)]" />
          <div className="text-xs uppercase tracking-wide text-zinc-500 mt-3">Adresă</div>
          <div className="font-display text-base text-[var(--color-brand-navy)] font-semibold">{SITE.clinic.name}</div>
          <div className="text-sm text-zinc-700 mt-1">{SITE.clinic.streetAddress}<br />{SITE.clinic.addressLocality}, România</div>
        </div>
      </div>
      <div className="bg-[var(--color-brand-cream)] border border-zinc-200 rounded-xl p-5 mt-6 flex items-start gap-3">
        <Clock className="w-5 h-5 text-[var(--color-brand-gold)] mt-0.5" />
        <div>
          <div className="font-semibold text-[var(--color-brand-navy)]">Program consultații</div>
          <p className="text-zinc-700 mt-1">Luni–Vineri 09:00–19:00. Sâmbătă cu programare prealabilă.</p>
        </div>
      </div>
    </div>
  );
}
