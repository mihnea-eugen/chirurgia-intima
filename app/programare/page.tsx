import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { SITE } from "@/lib/site";
import { proceduri } from "@/lib/proceduri";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Programare consultație | Dr. Diana Gheorghiță",
  description: "Programare consultație Dr. Diana Gheorghiță — chirurgie intimă masculină. Telefonic, WhatsApp sau formular online.",
  alternates: { canonical: `${SITE.url}/programare` }
};

export default function ProgramarePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <Breadcrumbs items={[{ name: "Acasă", url: "/" }, { name: "Programare", url: "/programare" }]} />

      <div className="mt-8 mb-12 lg:mb-16">
        <ImagePlaceholder
          label="Hero — Programare consultație"
          hint="Sugestie: foto editorial cu calendar + telefon pe birou neutru. Sau ilustrație conceptuală cu programare confidențială + 3 canale (telefon/WhatsApp/formular)."
          ratio="21/9"
          variant="navy"
        />
      </div>

      <h1 className="font-display">Programare consultație</h1>
      <p className="lead">
        Toate consultațiile sunt confidențiale și se efectuează în clinică privată acreditată din București. Costul consultației este de 250 RON (50 EUR), achitabil la fața locului. Consultația durează 30-45 minute, cu examinare clinică, discuție despre opțiuni și plan terapeutic.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 my-6">
        <a href={`tel:${SITE.phone}`} className="bg-[var(--color-brand-navy)] text-white rounded-xl p-5 no-underline hover:bg-[var(--color-brand-navy-dark)] transition-colors">
          <Phone className="w-6 h-6 mb-2" />
          <div className="font-display font-semibold text-lg">Sună acum</div>
          <div className="opacity-90">{SITE.phone}</div>
          <div className="text-xs opacity-80 mt-1">Luni-Vineri 09:00-19:00</div>
        </a>
        <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Bună ziua, doresc o programare la Dr. Diana.")}`} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-gold)] text-white rounded-xl p-5 no-underline hover:bg-[var(--color-brand-gold-soft)] transition-colors">
          <MessageCircle className="w-6 h-6 mb-2" />
          <div className="font-display font-semibold text-lg">WhatsApp</div>
          <div className="opacity-90">{SITE.whatsapp}</div>
          <div className="text-xs opacity-80 mt-1">Răspuns în 1-3 ore lucrătoare</div>
        </a>
      </div>

      <h2>Sau completați formularul</h2>
      <form
        action={`mailto:${SITE.email}`}
        method="POST"
        encType="text/plain"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 bg-white border border-zinc-200 rounded-xl p-6"
      >
        <label className="text-sm flex flex-col gap-1">
          <span>Nume</span>
          <input name="nume" required className="border border-zinc-300 rounded px-3 py-2" placeholder="Ion Popescu" />
        </label>
        <label className="text-sm flex flex-col gap-1">
          <span>Telefon</span>
          <input name="telefon" required className="border border-zinc-300 rounded px-3 py-2" placeholder="+40 7XX XXX XXX" />
        </label>
        <label className="text-sm flex flex-col gap-1 sm:col-span-2">
          <span>Email (opțional)</span>
          <input name="email" type="email" className="border border-zinc-300 rounded px-3 py-2" placeholder="email@exemplu.com" />
        </label>
        <label className="text-sm flex flex-col gap-1 sm:col-span-2">
          <span>Procedura de interes</span>
          <select name="procedura" className="border border-zinc-300 rounded px-3 py-2 bg-white">
            <option value="">— alegeți —</option>
            {proceduri.map((p) => <option key={p.slug} value={p.title}>{p.title}</option>)}
            <option value="alta">Altă procedură / nu sunt sigur</option>
          </select>
        </label>
        <label className="text-sm flex flex-col gap-1 sm:col-span-2">
          <span>Data preferată (opțional)</span>
          <input name="data" type="date" className="border border-zinc-300 rounded px-3 py-2" />
        </label>
        <label className="text-sm flex flex-col gap-1 sm:col-span-2">
          <span>Mesaj (opțional)</span>
          <textarea name="mesaj" rows={3} className="border border-zinc-300 rounded px-3 py-2" placeholder="Ce vă preocupă? Aveți un istoric care contează?" />
        </label>
        <label className="sm:col-span-2 text-xs flex items-start gap-2">
          <input type="checkbox" required name="gdpr" className="mt-1" />
          <span>Sunt de acord cu prelucrarea datelor personale conform <a href="/gdpr">politicii GDPR</a>.</span>
        </label>
        <button type="submit" className="btn btn-primary sm:col-span-2 justify-center">Trimite cerere</button>
      </form>
      <p className="text-xs text-zinc-500 mt-3">
        Notă: formularul deschide aplicația de email implicită. Pentru programare imediată recomandăm telefonul sau WhatsApp.
      </p>
    </div>
  );
}
