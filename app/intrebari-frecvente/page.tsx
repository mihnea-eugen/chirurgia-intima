import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import SchemaGraph from "@/components/SchemaGraph";
import { getFAQSchema } from "@/lib/schema";

export const metadata: Metadata = { title: "Întrebări frecvente", description: "Răspunsuri la cele mai frecvente întrebări despre chirurgia intimă masculină: confidențialitate, recuperare, finanțare, anestezie." };

const faqs = [
  { q: "Cum garantați confidențialitatea?", a: "Protocol GDPR strict, facturare neutră (Cabinet Medical Diana Gheorghiță), niciodată raportare publică, no-photo policy fără acord scris." },
  { q: "Pot plăti în rate?", a: "Da. Finanțare TBI Bank disponibilă până la 36 luni pentru toate procedurile chirurgicale." },
  { q: "Consultația se deduce din prețul procedurii?", a: "NU. Consultația este plătită separat (70 EUR) și nu se deduce." },
  { q: "Sunt mai în vârstă, pot face faloplastie?", a: "Vârsta nu este o contraindicație absolută. Importante sunt sănătatea cardio-pulmonară și absența comorbidităților decompensate. Evaluare individuală." },
  { q: "Cât timp durează recuperarea completă?", a: "Variabilă: 5-7 zile pentru lipofilling, 14-21 zile pentru Peyronie Nesbit, 4-8 săptămâni pentru extracție kanamicina + reabilitare 6-12 luni." },
  { q: "Ce anestezie folosiți?", a: "Locala cu sedare în 60-80% cazuri. Rahidiană sau generală pentru cazuri complexe (Peyronie, extracții, faloplastii combinate)." },
  { q: "Pot vedea galeria înainte/după?", a: "Da, în consultație. Galeriile cu rezultate sunt complet anonimizate și prezentate doar pacienților în evaluare." },
  { q: "Cât aștept de la consultație până la procedură?", a: "Tipic 2-4 săptămâni — timp pentru analize și pregătire psihologică. Cazuri urgente (parafimoză, infecții) operație în 24-48h." },
  { q: "Pacienți din afara Bucureștiului?", a: "Da, acceptăm. Telemedicina pre-consultație disponibilă. Cazare parteneră la solicitare." },
  { q: "Cum scoatem firele post-op?", a: "Sutură resorbabilă în 90% cazuri (se desprinde singură în 14-28 zile). Pentru sutură nerezorbabilă, control medical la săptămâna 2-3." }
];

export default function Page() {
  return (
    <div className="container-narrow py-12">
      <SchemaGraph items={[getFAQSchema(faqs)]} />
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Întrebări frecvente", url:"/intrebari-frecvente"}]} />
      <h1 className="font-display">Întrebări frecvente</h1>
      <p className="lead text-zinc-700 mt-2">Răspunsuri concise pentru cele mai frecvente întrebări înainte de consultație.</p>
      <div className="mt-8">
        <FAQ items={faqs} />
      </div>
      <CTABanner />
    </div>
  );
}
