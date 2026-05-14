"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";
import { proceduri } from "@/lib/proceduri";
import { Phone } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function ProgramarePage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const nume = (fd.get("nume") as string) || "";
    const telefon = (fd.get("telefon") as string) || "";
    const email = (fd.get("email") as string) || "";
    const procedura = (fd.get("procedura") as string) || "";
    const data = (fd.get("data") as string) || "";
    const mesaj = (fd.get("mesaj") as string) || "";

    const subject = `Programare consultatie, ${nume}`;
    const body =
      `Nume: ${nume}\n` +
      `Telefon: ${telefon}\n` +
      `Email: ${email}\n` +
      `Procedura: ${procedura}\n` +
      `Data preferata: ${data}\n` +
      `Mesaj: ${mesaj}`;

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailto;
    } catch {
      /* ignore */
    }

    setTimeout(() => router.push("/multumesc"), 800);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <Breadcrumbs items={[{ name: "Acasă", url: "/" }, { name: "Programare", url: "/programare" }]} />

      <h1 className="font-display mt-8">Programare consultație</h1>
      <p className="lead text-zinc-700 max-w-3xl">
        Toate consultațiile sunt confidențiale și se efectuează în Clinica Pogany, București. Costul consultației este de 70 EUR și nu se deduce din prețul procedurii. Consultația durează 30 până la 45 de minute, cu examinare clinică și plan terapeutic personalizat.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-8">
        <a href={`tel:${SITE.phone}`} className="bg-[var(--color-brand-navy)] text-white rounded-xl p-5 no-underline hover:bg-[var(--color-brand-navy-dark)] transition-colors">
          <Phone className="w-6 h-6 mb-2" />
          <div className="font-display font-semibold text-lg">Sună acum</div>
          <div className="opacity-90">{SITE.phone}</div>
          <div className="text-xs opacity-80 mt-1">Luni până vineri, 09:00 până 19:00</div>
        </a>
        <a
          href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Bună ziua, doresc o programare la Dr. Diana.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white rounded-xl p-5 no-underline transition-colors"
          style={{ backgroundColor: "var(--color-brand-gold)" }}
        >
          <WhatsAppIcon className="w-6 h-6 mb-2" />
          <div className="font-display font-semibold text-lg">WhatsApp</div>
          <div className="opacity-90">{SITE.whatsapp}</div>
          <div className="text-xs opacity-80 mt-1">Răspuns în 1 până la 3 ore lucrătoare</div>
        </a>
      </div>

      <h2 className="font-display text-2xl text-[var(--color-brand-navy)] mt-12 mb-4">Sau completați formularul</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white border border-zinc-200 rounded-xl p-6"
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
            <option value="alta">Altă procedură sau nu sunt sigur</option>
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
          <span>Sunt de acord cu prelucrarea datelor personale conform <a href="/gdpr" className="underline">politicii GDPR</a>.</span>
        </label>
        <button type="submit" disabled={submitting} className="btn btn-primary sm:col-span-2 justify-center">
          {submitting ? "Se trimite..." : "Trimite cerere"}
        </button>
      </form>
      <p className="text-xs text-zinc-500 mt-3">
        Formularul deschide aplicația de email implicită cu datele pre-completate. Pentru programare imediată recomandăm telefon sau WhatsApp.
      </p>
    </div>
  );
}
