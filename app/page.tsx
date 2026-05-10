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
  title: "Dr. Diana GheorghiÈÄ | Chirurgie intimÄ masculinÄ BucureÈti",
  description:
    "Singurul medic femeie din RomÃ¢nia specializat sistematic Ã®n chirurgia intimÄ masculinÄ. ISAPS, peste 10 ani experienÈÄ, clinicÄ privatÄ acreditatÄ. Faloplastie, circumcizie, Peyronie, extracÈie kanamicina."
};

const procedureBlurbs: Record<string, string> = {
  "alungire-penis": "Faloplastie dorsalÄ. 2-5 cm cÃ¢Ètig vizual.",
  "ingrosare-lipofilling": "GrÄsime proprie. 1-3 cm circumferinÈÄ permanent.",
  "ingrosare-acid-hialuronic": "Non-chirurgical, reversibil cu hialuronidazÄ.",
  "circumcizie-adulti": "Anestezie localÄ, externare aceeaÈi zi.",
  "peyronie-nesbit": "Tehnica Nesbit. Succes 80-100% pe curburi <60Â°.",
  peyronie: "Ghid complet diagnostic Èi tratament.",
  "p-shot-prp": "PRP autolog pentru funcÈie erectilÄ.",
  "extractie-kanamicina": "ExtracÈie corpi strÄini. Reabilitare anatomie."
};

export default function HomePage() {
  return (
    <>
      <SchemaGraph
        items={[
          getMedicalWebPageSchema({
            name: "Chirurgie intimÄ masculinÄ â Dr. Diana GheorghiÈÄ",
            description: SITE.description,
            url: SITE.url,
            speakable: true
          }),
          getBreadcrumbSchema([{ name: "AcasÄ", url: SITE.url }])
        ]}
      />

      {/* HERO */}
      <section className="section-glow border-b border-zinc-200 overflow-hidden">
        <div className="container-wide pt-[8rem] pb-[5rem] lg:pt-[10rem] lg:pb-[7rem] grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">ISAPS Â· 10+ ani Â· clinicÄ privatÄ acreditatÄ</div>
            <h1 className="font-display leading-[1.1] mb-5">
              Chirurgie intimÄ masculinÄ.
              <br />
              <span className="text-[var(--color-brand-gold-deep)]">Cu profesionalism Èi discreÈie.</span>
            </h1>
            <p className="lead text-zinc-700 mb-7 max-w-xl">
              Singurul medic femeie din RomÃ¢nia specializat sistematic Ã®n chirurgia intimÄ masculinÄ. Faloplastie, circumcizie, boala Peyronie, extracÈie corpi strÄini intrapenieni Èi P-Shot, sub semnÄtura Dr. Diana GheorghiÈÄ. Proceduri cu cifre verificate, citare ÈtiinÈificÄ Èi protocol de discreÈie absolutÄ.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <Link href="/programare" className="btn btn-primary">
                Programare consultaÈie
              </Link>
              <a href={`tel:${SITE.phone}`} className="btn btn-outline tabular-nums">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-[var(--color-brand-navy)] to-[var(--color-brand-navy-dark)] rounded-xl flex items-center justify-center px-8 py-12 lg:py-16 min-h-[360px]">
              <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/60 to-transparent" />
              <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/60 to-transparent" />
              <div className="text-white text-center">
                <Award className="w-10 h-10 mx-auto mb-4 text-[var(--color-brand-gold)]" />
                <div className="font-display text-2xl font-medium mb-2 leading-tight">Dr. Diana GheorghiÈÄ</div>
                <div className="text-sm text-white/80 leading-relaxed max-w-[280px] mx-auto">
                  Medic specialist chirurgie plasticÄ, esteticÄ Èi microchirurgie reconstructivÄ
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[var(--color-brand-gold-soft)]">
                  MembrÄ ISAPS Â· UMF Carol Davila
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCERE SCURTÄ */}
      <section className="bg-white border-b border-zinc-200" data-speakable="true">
        <div className="container-wide py-20 lg:py-28">
          
          <h2 className="font-display text-2xl lg:text-3xl mb-4 max-w-3xl">Cine este Dr. Diana GheorghiÈÄ Èi ce face diferit</h2>
          <p className="text-zinc-700 max-w-3xl text-[1.05rem] leading-relaxed">
            Dr. Diana GheorghiÈÄ este medic specialist chirurgie plasticÄ, esteticÄ Èi microchirurgie reconstructivÄ, membrÄ ISAPS, cu peste {SITE.trust.proceduresPerformed}+ proceduri intime efectuate Èi {SITE.trust.yearsExperience}+ ani de practicÄ. OpereazÄ Ã®n clinicÄ privatÄ acreditatÄ din BucureÈti. Este singurul medic femeie din RomÃ¢nia specializat sistematic Ã®n chirurgia intimÄ masculinÄ, cu opt proceduri principale acoperite: alungire chirurgicalÄ, Ã®ngroÈare cu lipofilling, augmentare cu acid hialuronic, circumcizie adulÈi, boala Peyronie (Nesbit Èi ghid), P-Shot Èi extracÈie corpi strÄini intrapenieni (kanamicina, silicon, vaselinÄ).
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-5 text-sm text-zinc-700 max-w-3xl">
            <li className="flex gap-2"><span className="text-[var(--color-brand-gold-deep)]">â¢</span> Citare ÈtiinÈificÄ Ã®n fiecare paginÄ, surse PubMed, BJUI, AUA, EAU.</li>
            <li className="flex gap-2"><span className="text-[var(--color-brand-gold-deep)]">â¢</span> Protocol GDPR strict, facturare neutrÄ, fÄrÄ fotografii ale pacienÈilor.</li>
            <li className="flex gap-2"><span className="text-[var(--color-brand-gold-deep)]">â¢</span> Rating 4,9/5 din 123 recenzii Google verificate.</li>
            <li className="flex gap-2"><span className="text-[var(--color-brand-gold-deep)]">â¢</span> FinanÈare TBI Bank disponibilÄ, pÃ¢nÄ la 36 de luni.</li>
          </ul>
        </div>
      </section>

      {/* TRUST */}
      <section className="container-wide py-16 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Award, label: "Proceduri intime", value: `${SITE.trust.proceduresPerformed}+` },
            { icon: GraduationCap, label: "Ani de experienÈÄ", value: `${SITE.trust.yearsExperience}+` },
            { icon: ShieldCheck, label: "MembrÄ", value: "ISAPS" },
            { icon: Users, label: "Recenzii Google", value: `${SITE.trust.rating}/5` }
          ].map((s, idx) => (
            <div key={idx} className="card-premium p-6 text-center">
              <s.icon className="w-7 h-7 mx-auto text-[var(--color-brand-gold)] mb-2" />
              <div className="text-2xl font-display font-semibold text-[var(--color-brand-navy)]">{s.value}</div>
              <div className="text-xs uppercase tracking-wide text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCEDURI */}
      <section className="container-wide py-16 lg:py-24">
        <div className="flex justify-between items-end mb-8 flex-wrap gap-3">
          <div>
            <h2 className="text-3xl font-display font-semibold">Proceduri principale</h2>
            <p className="text-zinc-600 mt-1">Opt proceduri principale, descrise complet, cu cifre verificate Èi surse din literatura medicalÄ internaÈionalÄ.</p>
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
      <section className="section-glow border-y border-zinc-200">
        <div className="container-wide py-16">
          <h2 className="text-3xl font-display font-semibold text-center mb-10">De ce Dr. Diana</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: "ConfidenÈialitate",
                text: "Protocol GDPR strict, facturare neutrÄ Cabinet Medical Diana GheorghiÈÄ, fÄrÄ referinÈÄ la diagnostic Ã®n comunicÄri exterioare."
              },
              {
                icon: HeartHandshake,
                title: "Empatie, fÄrÄ judecatÄ",
                text: "BÄrbaÈii cu nelÄmuriri despre dimensiune sau patologie raporteazÄ un nivel mai redus de jenÄ atunci cÃ¢nd sunt consultaÈi de un medic femeie cu profil profesional Èi empatic."
              },
              {
                icon: GraduationCap,
                title: "ExpertizÄ demonstrabilÄ",
                text: "Peste 1.000 de proceduri intime efectuate. Fiecare paginÄ include cifre reale Èi surse din reviste medicale internaÈionale (BJU, J Sex Med, AUA, EAU)."
              }
            ].map((c, idx) => (
              <div key={idx} className="card-premium p-7">
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
        <h2 className="text-3xl font-display font-semibold text-center mb-3">Cifre verificate ÈtiinÈific</h2>
        <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-10">
          FÄrÄ adjective senzaÈionaliste. Doar cifre Èi surse din literatura medicalÄ internaÈionalÄ.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card-premium p-7">
            <div className="text-xs uppercase tracking-wide text-zinc-500 mb-2">Lungime medie globalÄ Ã®n erecÈie</div>
            <div className="text-4xl font-display font-semibold text-[var(--color-brand-navy)] mb-1">13,12 cm</div>
            <div className="text-sm text-zinc-600">Â±1,66 cm. Studiu pe n=15.521 bÄrbaÈi.</div>
            <div className="text-xs text-zinc-500 italic mt-2">
              SursÄ:{" "}
              <a href="https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.13010" target="_blank" rel="noopener noreferrer">
                Veale D et al. BJU International, 2015
              </a>
            </div>
          </div>
          <div className="card-premium p-7">
            <div className="text-xs uppercase tracking-wide text-zinc-500 mb-2">Succes Nesbit pe curburi &lt;60Â°</div>
            <div className="text-4xl font-display font-semibold text-[var(--color-brand-navy)] mb-1">80-100%</div>
            <div className="text-sm text-zinc-600">Cu pierdere de lungime 0,5-2 cm.</div>
            <div className="text-xs text-zinc-500 italic mt-2">
              SursÄ:{" "}
              <a href="https://www.auanet.org/guidelines/peyronies-disease-guideline" target="_blank" rel="noopener noreferrer">
                AUA Guidelines on Peyronie's Disease
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GHID DECIZIE PROCEDURÄ */}
      <section className="container-wide py-16">
        
        <h2 className="text-3xl font-display text-center mb-3">Care procedurÄ vi se potriveÈte</h2>
        <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-10">
          SelecÈie pe baza simptomatologiei Èi obiectivului. Decizia finalÄ se ia Ã®n consultaÈie, cu examen clinic Èi anamnezÄ completÄ.
        </p>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            { problem: "Vreau penis vizibil mai lung", proc: "Alungire penis chirurgicalÄ", slug: "alungire-penis", source: "Aesthet Plast Surg 2020", url: "https://pubmed.ncbi.nlm.nih.gov/31831387/" },
            { problem: "Vreau penis mai gros, permanent", proc: "ÃngroÈare cu lipofilling", slug: "ingrosare-lipofilling", source: "J Sex Med 2019", url: "https://pubmed.ncbi.nlm.nih.gov/" },
            { problem: "Vreau Ã®ngroÈare reversibilÄ", proc: "Augmentare cu acid hialuronic", slug: "ingrosare-acid-hialuronic", source: "J Sex Med 2021 RCT", url: "https://pubmed.ncbi.nlm.nih.gov/" },
            { problem: "CurburÄ penianÄ dureroasÄ", proc: "Tehnica Nesbit, Peyronie", slug: "peyronie-nesbit", source: "AUA Guidelines", url: "https://www.auanet.org/guidelines/peyronies-disease-guideline" },
            { problem: "PrepuÈ strÃ¢ns sau iritat", proc: "Circumcizie adulÈi", slug: "circumcizie-adulti", source: "EAU Guidelines", url: "https://uroweb.org/guidelines" },
            { problem: "Am injectat kanamicina sau silicon", proc: "ExtracÈie corpi strÄini", slug: "extractie-kanamicina", source: "Urology 2018", url: "https://pubmed.ncbi.nlm.nih.gov/" }
          ].map((g, idx) => (
            <Link key={idx} href={`/proceduri/${g.slug}`} className="bg-white border border-zinc-200 rounded-xl p-5 no-underline hover:border-[var(--color-brand-gold)] transition-colors block">
              <div className="text-xs uppercase tracking-wide text-[var(--color-brand-gold-deep)] mb-1">{g.problem}</div>
              <div className="font-display text-lg text-[var(--color-brand-navy)] mb-2">{g.proc}</div>
              <div className="text-xs text-zinc-500">SursÄ recomandare: <span className="text-[var(--color-brand-navy)]">{g.source}</span></div>
            </Link>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-500 mt-6 max-w-2xl mx-auto">
          ConÈinutul are caracter informativ. Pentru indicaÈie individualizatÄ consultaÈi un medic specialist. Surse: <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">PubMed</a>, <a href="https://uroweb.org/guidelines" target="_blank" rel="noopener noreferrer">EAU Guidelines</a>, <a href="https://www.auanet.org/guidelines" target="_blank" rel="noopener noreferrer">AUA Guidelines</a>, <a href="https://www.isaps.org/" target="_blank" rel="noopener noreferrer">ISAPS</a>.
        </p>
      </section>

      {/* TESTIMONIALE */}
      <section className="bg-zinc-50 border-y border-zinc-200">
        <div className="container-wide py-20 lg:py-24">
          
          <h2 className="text-3xl font-display text-center mb-3">Cuvinte de la pacienÈi</h2>
          <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10 text-sm">
            Toate testimonialele sunt anonimizate cu acordul pacienÈilor, conforme GDPR. Numele Èi fotografia nu sunt afiÈate.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { age: "M, 34 ani", text: "Am ales-o pentru profesionalism. Faptul cÄ este medic femeie m-a fÄcut sÄ simt mai puÈinÄ jenÄ Ã®n consultaÈie. A explicat clar limitele a ceea ce se poate face.", proc: "Faloplastie combinatÄ" },
              { age: "M, 52 ani", text: "Trei ani de Peyronie cu durere Èi curburÄ progresivÄ. DupÄ Nesbit am putut relua viaÈa normalÄ. Ca pierdere de lungime â exact cum a anticipat.", proc: "Tehnica Nesbit" },
              { age: "M, 28 ani", text: "FÄcusem o greÈealÄ cu kanamicina la 22 de ani. Dr. Diana a fost prima care mi-a spus Ã®n faÈÄ cÄ trebuie scoasÄ, fÄrÄ sÄ mÄ judece. Am refÄcut lucrurile.", proc: "ExtracÈie kanamicina + lipofilling" }
            ].map((t, idx) => (
              <div key={idx} className="card-premium p-7">
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

      <div className="container-wide py-12 lg:py-16">
        <CTABanner />
      </div>
    </>
  );
}
