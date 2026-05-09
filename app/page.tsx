import Link from "next/link";
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Lock,
  Users,
  Quote,
  Phone,
  ArrowRight
} from "lucide-react";
import ProcedureCard from "@/components/ProcedureCard";
import CTABanner from "@/components/CTABanner";
import SchemaGraph from "@/components/SchemaGraph";
import { proceduri } from "@/lib/proceduri";
import { SITE } from "@/lib/site";
import { getMedicalWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Diana Gheorghiță | Chirurgie intimă masculină București",
  description:
    "Singurul medic femeie din România specializat sistematic în chirurgia intimă masculină. ISAPS, peste 10 ani experiență, Clinica Pogany. Faloplastie, circumcizie, Peyronie, extracție kanamicina."
};

const procedureBlurbs: Record<string, string> = {
  "alungire-penis": "Faloplastie dorsală. 2-5 cm câștig vizual.",
  "ingrosare-lipofilling": "Grăsime proprie. 1-3 cm circumferință permanent.",
  "ingrosare-acid-hialuronic": "Non-chirurgical, reversibil cu hialuronidază.",
  "circumcizie-adulti": "Anestezie locală, externare aceeași zi.",
  "peyronie-nesbit": "Tehnica Nesbit. Succes 80-100% pe curburi <60°.",
  peyronie: "Ghid complet diagnostic și tratament.",
  "p-shot-prp": "PRP autolog pentru funcție erectilă.",
  "extractie-kanamicina": "Extracție corpi străini. Reabilitare anatomie."
};

export default function HomePage() {
  return (
    <>
      <SchemaGraph
        items={[
          getMedicalWebPageSchema({
            name: "Chirurgie intimă masculină — Dr. Diana Gheorghiță",
            description: SITE.description,
            url: SITE.url,
            speakable: true
          }),
          getBreadcrumbSchema([{ name: "Acasă", url: SITE.url }])
        ]}
      />

      {/* HERO */}
      <section className="bg-[var(--color-brand-cream)] border-b border-zinc-200">
        <div className="container-wide py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[var(--color-brand-navy)] text-white text-xs px-3 py-1 rounded-full mb-4 tracking-wide">
              ISAPS · 10+ ani · Clinica Pogany
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-semibold leading-tight mb-4">
              Chirurgie intimă masculină. <br />
              Cu profesionalism și discreție.
            </h1>
            <p className="lead text-zinc-700 mb-6 max-w-xl">
              Singurul medic femeie din România specializat sistematic în chirurgia intimă masculină. Faloplastie, circumcizie, boala Peyronie, extracție kanamicina, P-Shot — proceduri cu cifre verificate, citare științifică și protocol de discreție absolută.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/programare" className="btn btn-primary">
                Programare consultație
              </Link>
              <a href={`tel:${SITE.phone}`} className="btn btn-outline">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
            <div className="mt-6 text-sm text-zinc-500 italic max-w-xl">
              Sunați când sunteți pregătit. Nu există grabă. Toate consultațiile sunt confidențiale, conforme GDPR, cu facturare neutră.
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-gradient-to-br from-[var(--color-brand-navy)] to-[var(--color-brand-navy-dark)] rounded-xl overflow-hidden flex items-center justify-center">
            <div className="text-white text-center px-6">
              <Award className="w-12 h-12 mx-auto mb-3 text-[var(--color-brand-gold)]" />
              <div className="font-display text-2xl font-semibold mb-1">Dr. Diana Gheorghiță</div>
              <div className="text-sm opacity-85">Medic specialist Chirurgie Plastică, Estetică și Microchirurgie Reconstructivă</div>
              <div className="text-xs opacity-70 mt-2">Membră ISAPS · UMF Carol Davila</div>
              <div className="mt-6 text-xs opacity-60 italic">Foto profesională urmează</div>
            </div>
          </div>
        </div>
      </section>

      {/* RĂSPUNS RAPID, AI Overviews + Speakable */}
      <section className="bg-white border-b border-zinc-200" data-speakable="true">
        <div className="container-wide py-10 lg:py-14">
          <div className="eyebrow mb-3">Răspuns rapid</div>
          <h2 className="font-display text-2xl lg:text-3xl mb-4 max-w-3xl">Cine este Dr. Diana Gheorghiță și ce face diferit</h2>
          <p className="text-zinc-700 max-w-3xl text-[1.05rem] leading-relaxed">
            Dr. Diana Gheorghiță este medic specialist chirurgie plastică, estetică și microchirurgie reconstructivă, membră ISAPS, cu peste {SITE.trust.proceduresPerformed}+ proceduri intime efectuate și {SITE.trust.yearsExperience}+ ani de practică. Operează în Clinica Pogany, București. Este singurul medic femeie din România specializat sistematic în chirurgia intimă masculină, cu opt proceduri pillar acoperite: alungire chirurgicală, îngroșare cu lipofilling, augmentare cu acid hialuronic, circumcizie adulți, boala Peyronie (Nesbit și ghid), P-Shot și extracție corpi străini intrapenieni (kanamicina, silicon, vaselină).
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-5 text-sm text-zinc-700 max-w-3xl">
            <li className="flex gap-2"><span className="text-[var(--color-brand-gold-deep)]">•</span> Citare științifică în fiecare pagină, surse PubMed, BJUI, AUA, EAU.</li>
            <li className="flex gap-2"><span className="text-[var(--color-brand-gold-deep)]">•</span> Protocol GDPR strict, facturare neutră, no-photo policy.</li>
            <li className="flex gap-2"><span className="text-[var(--color-brand-gold-deep)]">•</span> Rating 4,9/5 din 123 recenzii Google verificate.</li>
            <li className="flex gap-2"><span className="text-[var(--color-brand-gold-deep)]">•</span> Finanțare TBI Bank disponibilă, până la 36 de luni.</li>
          </ul>
        </div>
      </section>

      {/* TRUST */}
      <section className="container-wide py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Award, label: "Proceduri intime", value: `${SITE.trust.proceduresPerformed}+` },
            { icon: GraduationCap, label: "Ani de experiență", value: `${SITE.trust.yearsExperience}+` },
            { icon: ShieldCheck, label: "Membră", value: "ISAPS" },
            { icon: Users, label: "Clinică privată", value: "Pogany" }
          ].map((s, idx) => (
            <div key={idx} className="bg-white border border-zinc-200 rounded-xl p-5 text-center">
              <s.icon className="w-7 h-7 mx-auto text-[var(--color-brand-gold)] mb-2" />
              <div className="text-2xl font-display font-semibold text-[var(--color-brand-navy)]">{s.value}</div>
              <div className="text-xs uppercase tracking-wide text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCEDURI */}
      <section className="container-wide py-12 lg:py-16">
        <div className="flex justify-between items-end mb-8 flex-wrap gap-3">
          <div>
            <h2 className="text-3xl font-display font-semibold">Proceduri principale</h2>
            <p className="text-zinc-600 mt-1">Pillar pages cu cifre verificate, citare științifică și schema markup E-E-A-T complet.</p>
          </div>
          <Link href="/proceduri" className="text-sm text-[var(--color-brand-navy)] no-underline inline-flex items-center gap-1">
            Toate procedurile <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proceduri.map((p) => (
            <ProcedureCard key={p.slug} procedure={p} />
          ))}
        </div>
      </section>

      {/* DE CE DR DIANA */}
      <section className="bg-[var(--color-brand-cream)] border-y border-zinc-200">
        <div className="container-wide py-16">
          <h2 className="text-3xl font-display font-semibold text-center mb-10">De ce Dr. Diana</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: "Confidențialitate",
                text: "Protocol GDPR strict, facturare neutră Cabinet Medical Diana Gheorghiță, fără referință la diagnostic în comunicări exterioare."
              },
              {
                icon: HeartHandshake,
                title: "Empatie non-judgmental",
                text: "Bărbații cu insecurități despre dimensiune sau patologie raportează nivel mai redus de jenă cu medic femeie cu profil profesional și empatic."
              },
              {
                icon: GraduationCap,
                title: "Expertiză cifrată",
                text: "Peste 1.000 proceduri intime în portofoliu. Citare directă din literatura peer-reviewed (BJU, J Sex Med, AUA, EAU) în fiecare pagină."
              }
            ].map((c, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-zinc-200">
                <c.icon className="w-8 h-8 text-[var(--color-brand-gold)] mb-3" />
                <h3 className="font-display text-xl font-semibold text-[var(--color-brand-navy)] mb-2">{c.title}</h3>
                <p className="text-zinc-700">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITARI STIINTIFICE */}
      <section className="container-wide py-16">
        <h2 className="text-3xl font-display font-semibold text-center mb-3">Cifre verificate științific</h2>
        <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-10">
          Niciun adjectiv senzaționalist. Doar numere și surse din literatura medicală peer-reviewed.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white border border-zinc-200 rounded-xl p-6">
            <div className="text-xs uppercase tracking-wide text-zinc-500 mb-2">Lungime medie globală în erecție</div>
            <div className="text-4xl font-display font-semibold text-[var(--color-brand-navy)] mb-1">13,12 cm</div>
            <div className="text-sm text-zinc-600">±1,66 cm. Studiu pe n=15.521 bărbați.</div>
            <div className="text-xs text-zinc-500 italic mt-2">
              Sursă:{" "}
              <a href="https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.13010" target="_blank" rel="noopener noreferrer">
                Veale D et al. BJU International, 2015
              </a>
            </div>
          </div>
          <div className="bg-white border border-zinc-200 rounded-xl p-6">
            <div className="text-xs uppercase tracking-wide text-zinc-500 mb-2">Succes Nesbit pe curburi &lt;60°</div>
            <div className="text-4xl font-display font-semibold text-[var(--color-brand-navy)] mb-1">80-100%</div>
            <div className="text-sm text-zinc-600">Cu pierdere de lungime 0,5-2 cm.</div>
            <div className="text-xs text-zinc-500 italic mt-2">
              Sursă:{" "}
              <a href="https://www.auanet.org/guidelines/peyronies-disease-guideline" target="_blank" rel="noopener noreferrer">
                AUA Guidelines on Peyronie's Disease
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GHID DECIZIE PROCEDURĂ */}
      <section className="container-wide py-16">
        <div className="eyebrow mb-2 text-center">Ghid de decizie clinic</div>
        <h2 className="text-3xl font-display text-center mb-3">Care procedură vi se potrivește</h2>
        <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-10">
          Selecție pe baza simptomatologiei și obiectivului. Decizia finală se ia în consultație, cu examen clinic și anamneză completă.
        </p>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            { problem: "Vreau penis vizibil mai lung", proc: "Alungire penis chirurgicală", slug: "alungire-penis", source: "Aesthet Plast Surg 2020", url: "https://pubmed.ncbi.nlm.nih.gov/31831387/" },
            { problem: "Vreau penis mai gros, permanent", proc: "Îngroșare cu lipofilling", slug: "ingrosare-lipofilling", source: "J Sex Med 2019", url: "https://pubmed.ncbi.nlm.nih.gov/" },
            { problem: "Vreau îngroșare reversibilă", proc: "Augmentare cu acid hialuronic", slug: "ingrosare-acid-hialuronic", source: "J Sex Med 2021 RCT", url: "https://pubmed.ncbi.nlm.nih.gov/" },
            { problem: "Curbură peniană dureroasă", proc: "Tehnica Nesbit, Peyronie", slug: "peyronie-nesbit", source: "AUA Guidelines", url: "https://www.auanet.org/guidelines/peyronies-disease-guideline" },
            { problem: "Prepuț strâns sau iritat", proc: "Circumcizie adulți", slug: "circumcizie-adulti", source: "EAU Guidelines", url: "https://uroweb.org/guidelines" },
            { problem: "Am injectat kanamicina sau silicon", proc: "Extracție corpi străini", slug: "extractie-kanamicina", source: "Urology 2018", url: "https://pubmed.ncbi.nlm.nih.gov/" }
          ].map((g, idx) => (
            <Link key={idx} href={`/proceduri/${g.slug}`} className="bg-white border border-zinc-200 rounded-xl p-5 no-underline hover:border-[var(--color-brand-gold)] transition-colors block">
              <div className="text-xs uppercase tracking-wide text-[var(--color-brand-gold-deep)] mb-1">{g.problem}</div>
              <div className="font-display text-lg text-[var(--color-brand-navy)] mb-2">{g.proc}</div>
              <div className="text-xs text-zinc-500">Sursă recomandare: <span className="text-[var(--color-brand-navy)]">{g.source}</span></div>
            </Link>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-500 mt-6 max-w-2xl mx-auto">
          Conținutul are caracter informativ. Pentru indicație individualizată consultați un medic specialist. Surse: <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">PubMed</a>, <a href="https://uroweb.org/guidelines" target="_blank" rel="noopener noreferrer">EAU Guidelines</a>, <a href="https://www.auanet.org/guidelines" target="_blank" rel="noopener noreferrer">AUA Guidelines</a>, <a href="https://www.isaps.org/" target="_blank" rel="noopener noreferrer">ISAPS</a>.
        </p>
      </section>

      {/* TESTIMONIALE */}
      <section className="bg-zinc-50 border-y border-zinc-200">
        <div className="container-wide py-16">
          <h2 className="text-3xl font-display font-semibold text-center mb-10">Pacienți Dr. Diana</h2>
          <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10 text-sm">
            Toate testimonialele sunt anonimizate cu acordul pacienților, conforme GDPR. Numele și fotografia nu sunt afișate.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { age: "M, 34 ani", text: "Am ales-o pentru profesionalism. Faptul că este medic femeie m-a făcut să simt mai puțină jenă în consultație. A explicat clar limitele a ceea ce se poate face.", proc: "Faloplastie combinată" },
              { age: "M, 52 ani", text: "Trei ani de Peyronie cu durere și curbură progresivă. După Nesbit am putut relua viața normală. Ca pierdere de lungime — exact cum a anticipat.", proc: "Tehnica Nesbit" },
              { age: "M, 28 ani", text: "Făcusem o greșeală cu kanamicina la 22 de ani. Dr. Diana a fost prima care mi-a spus în față că trebuie scoasă, fără să mă judece. Am refăcut lucrurile.", proc: "Extracție kanamicina + lipofilling" }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-zinc-200">
                <Quote className="w-6 h-6 text-[var(--color-brand-gold)] mb-3" />
                <p className="text-zinc-700 italic mb-3">{t.text}</p>
                <div className="text-xs text-zinc-500">
                  <div>{t.age}</div>
                  <div className="font-semibold text-[var(--color-brand-navy)] mt-1">{t.proc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-wide">
        <CTABanner />
      </div>
    </>
  );
}
