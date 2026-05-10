import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/site";
import { Lock, EyeOff, FileWarning, MessageSquareOff, ShieldCheck, FileX } from "lucide-react";

export const metadata: Metadata = {
  title: "Discreție și confidențialitate, protocol GDPR strict",
  description:
    "Protocol GDPR strict pentru pacienți de chirurgie intimă masculină. Facturare neutră, comunicare discretă, no-photo policy fără acord scris, zero raportare publică, servere RO/UE.",
  alternates: { canonical: `${SITE.url}/discretie` }
};

const cards = [
  { i: ShieldCheck, t: "Protocol GDPR strict", d: "Date pacient stocate exclusiv pe servere RO/UE conforme GDPR și Regulament 679/2016. Nu sunt partajate niciodată cu terți. Drept de ștergere oricând la cerere scrisă." },
  { i: FileWarning, t: "Facturare neutră", d: "Extrasul de cont va afișa doar „Cabinet Medical Diana Gheorghiță” fără descrierea procedurii. Banca, partenera de viață sau contabilul nu pot deduce natura intervenției." },
  { i: EyeOff, t: "No-photo policy", d: "Nu fotografiem pacientul fără acord scris explicit. Galeriile cu rezultate sunt prezentate exclusiv în consultație, complet anonime, niciodată online." },
  { i: FileX, t: "Zero raportare publică", d: "Niciodată nu apăreți în postări sociale, articole sau cazuri publice. Discuțiile cu Dr. Diana sunt strict private, sub secret medical profesional." },
  { i: Lock, t: "Acces limitat la date", d: "Doar Dr. Diana și asistenta medicală desemnată au acces la dosarul tău. Echipa administrativă vede doar datele de facturare neutre." },
  { i: MessageSquareOff, t: "Comunicare discretă", d: "WhatsApp, SMS și email confirmare programare fără referință explicită la procedură în textul mesajelor. Tu controlezi cât și cum se discută." }
];

export default function Page() {
  return (
    <div className="container-narrow py-12">
      <Breadcrumbs items={[{ name: "Acasă", url: "/" }, { name: "Discreție", url: "/discretie" }]} />
      <h1 className="font-display">Discreție și confidențialitate</h1>
      <p className="lead">
        Pentru pacienții de chirurgie intimă masculină, discreția nu este un bonus, este o condiție. Aplicăm un protocol explicit care acoperă comunicarea, facturarea, datele personale și prelevarea de imagini. Niciun competitor din România nu operează cu acest nivel de transparență privind confidențialitatea.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {cards.map((c, i) => (
          <div key={i} className="bg-white border border-zinc-200 rounded-xl p-5">
            <c.i className="w-7 h-7 text-[var(--color-brand-gold)] mb-2" />
            <div className="font-display text-lg font-medium text-[var(--color-brand-navy)]">{c.t}</div>
            <p className="text-sm text-zinc-700 mt-1.5 leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="prose-custom">
        <h2>Cookies și tracking</h2>
        <p>
          Folosim cookies analitice (Google Analytics 4) și de marketing (Meta CAPI) doar cu consimțământul tău explicit. Poți refuza tracking-ul oricând fără afectarea funcționalității site-ului. Pentru analiza traficului folosim Google Search Console și DataForSEO, fără urmărire individuală.
        </p>

        <h2>Drepturile tale GDPR</h2>
        <ul>
          <li>Drept de acces la datele tale personale stocate.</li>
          <li>Drept de rectificare a oricărei informații incorecte.</li>
          <li>Drept de ștergere, „dreptul de a fi uitat”.</li>
          <li>Drept de portabilitate, primești datele în format standard exportabil.</li>
          <li>Drept de opoziție la prelucrare, în condițiile legii.</li>
          <li>Drept de a nu fi supus unei decizii automate, inclusiv profilare.</li>
        </ul>
        <p>
          Pentru oricare dintre aceste drepturi, contactează direct <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Răspuns garantat în 30 de zile, conform GDPR.
        </p>
      </div>

      <CTABanner />
    </div>
  );
}
