import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "Dicționar termeni medicali", description: "Glosar termeni în chirurgia intimă masculină: faloplastie, fimoză, Peyronie, lipofilling, granulom și altele." };

const termeni = [
  { t: "Faloplastie", d: "Procedură chirurgicală estetică sau reconstructivă a penisului. Include alungire și îngroșare." },
  { t: "Ligamentoliză", d: "Secționarea parțială a ligamentului suspensor pentru alungirea vizuală a penisului." },
  { t: "Lipofilling", d: "Augmentare cu grăsime proprie procesată Coleman, injectată în țesut subcutan." },
  { t: "Acid hialuronic", d: "Filler dermal reticulat folosit pentru augmentare non-chirurgicală. Reversibil cu hialuronidază." },
  { t: "Fimoză", d: "Imposibilitate de retragere a prepuțului peste gland. Indicație pentru circumcizie sau preputioplastie." },
  { t: "Lichen scleros", d: "Boală dermatologică inflamatorie care produce fimoză cicatricială." },
  { t: "Boala Peyronie (IPP)", d: "Afecțiune fibroinflamatorie a tunicii albuginee cu plăci care produc curbură peniană." },
  { t: "Tehnica Nesbit", d: "Excizie eliptică a tunicii albuginee pe partea opusă plăcii pentru corectarea curburii." },
  { t: "Plicatură", d: "Tehnică de plicatură 16-stitch (Lue) pentru corectarea curburii fara excizie." },
  { t: "P-Shot, plasmă proprie", d: "Injectare plasmă îmbogățită cu trombocite (PRP) pentru regenerare țesut penian." },
  { t: "Kanamicina", d: "Antibiotic interzis pentru injectare subcutanată genitală. Produce granulom și fibroză." },
  { t: "Granulom penian", d: "Reacție inflamatorie cronică față de corp străin injectat (kanamicina, silicon, vaselină)." },
  { t: "Frenuloplastie", d: "Secționarea sau plastia frenului prepuțial scurt." },
  { t: "Preputioplastie", d: "Lărgire chirurgicală a prepuțului — alternativă conservativă la circumcizie." },
  { t: "Parafimoză", d: "Strangulare a glandului de prepuțul retras — urgență medicală." },
  { t: "Liposucție suprapubiană", d: "Îndepărtarea grăsimii pubiene pentru descoperirea vizuală a penisului." },
  { t: "Penis ascuns", d: "Penis ascuns sub piele pubiană (cunoscut și ca sindromul hidden penis), corectabil prin liposucție și faloplastie." },
  { t: "Tunica albuginee", d: "Înveliș fibros al corpilor cavernoși implicat în mecanismul erectil." },
  { t: "Corpii cavernoși", d: "Structuri vasculare ce se umplu cu sânge în erecție." },
  { t: "ISAPS", d: "International Society of Aesthetic Plastic Surgery — organizația profesională globală a chirurgilor estetici." }
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Dicționar termeni", url:"/dictionar-termeni"}]} />

      <div className="mt-8 mb-12 lg:mb-16">
        <ImagePlaceholder
          label="Hero — Dicționar termeni medicali"
          hint="Sugestie: ilustrație conceptuală cu carte deschisă + lupă peste termeni medicali. Sau foto editorial cu dicționar tipărit + carnet de notițe."
          ratio="21/9"
          variant="navy"
        />
      </div>

      <h1 className="font-display">Dicționar termeni medicali</h1>
      <p className="lead text-zinc-700 mt-2">Glosar de 20+ termeni utilizați în chirurgia intimă masculină, explicați pe înțelesul tuturor.</p>
      <dl className="mt-8 space-y-4">
        {termeni.map((it, idx) => (
          <div key={idx} className="bg-white border border-zinc-200 rounded-xl p-4">
            <dt className="font-semibold text-[var(--color-brand-navy)]">{it.t}</dt>
            <dd className="text-zinc-700 mt-1 text-sm">{it.d}</dd>
          </div>
        ))}
      </dl>
      <CTABanner />
    </div>
  );
}
