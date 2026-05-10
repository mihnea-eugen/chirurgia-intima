import Link from "next/link";
import { Phone, Award, GraduationCap, ShieldCheck, Users, Lock, HeartHandshake, Quote, Scissors, Heart, Sparkles, Wrench, Activity, FlaskConical, ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import SchemaGraph from "@/components/SchemaGraph";
import { SITE } from "@/lib/site";
import { getMedicalWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

const masculin = [
  { slug: "alungire-penis", title: "Alungire chirurgicală", subtitle: "Faloplastie 2-5 cm", icon: Activity },
  { slug: "ingrosare-lipofilling", title: "Îngroșare cu lipofilling", subtitle: "Grăsime proprie, permanent", icon: Sparkles },
  { slug: "ingrosare-acid-hialuronic", title: "Augmentare acid hialuronic", subtitle: "Reversibil 12-24 luni", icon: FlaskConical },
  { slug: "fimoza", title: "Fimoza la adulți", subtitle: "Tratament conservator + chirurgical", icon: Wrench },
  { slug: "circumcizie-adulti", title: "Circumcizie adulți", subtitle: "Anestezie locală, externare aceeași zi", icon: Scissors },
  { slug: "p-shot-prp", title: "P-Shot (Priapus Shot)", subtitle: "PRP autolog regenerativ", icon: Activity },
  { slug: "extractie-kanamicina", title: "Extracție corpi străini", subtitle: "Kanamicină, silicon, vaselină", icon: Wrench }
];

const feminin = [
  { slug: "labioplastie", title: "Labioplastie", subtitle: "Reducere labii mici, tehnica wedge", icon: Sparkles },
  { slug: "vaginoplastie", title: "Vaginoplastie", subtitle: "Rejuvenare vaginală chirurgicală", icon: Activity },
  { slug: "perineorafie", title: "Perineorafie", subtitle: "Refacere perineu post-naștere", icon: Wrench },
  { slug: "himenoplastie", title: "Himenoplastie", subtitle: "Refacere himen, discreție GDPR", icon: Scissors },
  { slug: "augmentare-punct-g", title: "Augmentare punctul G", subtitle: "G-Shot acid hialuronic / lipofilling", icon: FlaskConical }
];

export default function HomePage() {
  return (
    <>
      <SchemaGraph
        items={[
          getMedicalWebPageSchema({
            name: "Chirurgie intimă — Dr. Diana Gheorghiță",
            description: SITE.description,
            url: SITE.url,
            speakable: true
          }),
          getBreadcrumbSchema([{ name: "Acasă", url: SITE.url }])
        ]}
      />

      {/* HERO */}
      <section className="section-glow border-b border-zinc-200 overflow-hidden">
        <div className="container-wide pt-[10rem] pb-[7rem] grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <h1 className="font-display leading-[1.05] mb-6">
              Chirurgie intimă pentru bărbați și femei.
              <br />
              <span className="text-[var(--color-brand-gold-deep)]">Cu profesionalism și discreție absolută.</span>
            </h1>
            <p className="lead text-zinc-700 mb-8 max-w-2xl">
              Dr. Diana Gheorghiță, medic chirurg plastic specializat în chirurgia intimă masculină și feminină, membră ISAPS, peste 1.000 de proceduri intime efectuate, peste 10 ani de practică în clinică privată acreditată din București.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <Link href="/programare" className="btn btn-primary">
                Programare consultație
              </Link>
              <a href={`tel:${SITE.phone}`} className="btn btn-outline tabular-nums">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-[var(--color-brand-navy)] to-[var(--color-brand-navy-dark)] rounded-2xl flex items-center justify-center px-10 py-16 lg:py-20 min-h-[400px] shadow-2xl">
              <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/60 to-transparent" />
              <div className="absolute inset-x-10 bottom-10 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/60 to-transparent" />
              <div className="text-white text-center">
                <Award className="w-12 h-12 mx-auto mb-5 text-[var(--color-brand-gold)]" />
                <div className="font-display text-3xl font-medium mb-3 leading-tight">Dr. Diana Gheorghiță</div>
                <div className="text-sm text-white/80 leading-relaxed max-w-[300px] mx-auto">
                  Medic specialist chirurgie plastică, estetică și microchirurgie reconstructivă
                </div>
                <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-brand-gold-soft)]">
                  Membră ISAPS · UMF Carol Davila
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="container-wide py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Award, label: "Proceduri intime", value: `${SITE.trust.proceduresPerformed}+` },
            { icon: GraduationCap, label: "Ani de experiență", value: `${SITE.trust.yearsExperience}+` },
            { icon: ShieldCheck, label: "Membră", value: "ISAPS" },
            { icon: Users, label: "Recenzii Google", value: `${SITE.trust.rating}/5` }
          ].map((s, idx) => (
            <div key={idx} className="card-premium p-9 text-center">
              <s.icon className="w-9 h-9 mx-auto text-[var(--color-brand-gold)] mb-3" />
              <div className="text-3xl font-display font-semibold text-[var(--color-brand-navy)]">{s.value}</div>
              <div className="text-xs uppercase tracking-wide text-zinc-500 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DOUĂ COLOANE: MASCULIN + FEMININ */}
      <section className="section-glow border-y border-zinc-200">
        <div className="container-wide py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* MASCULIN */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-[var(--color-brand-gold)]" />
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-gold-deep)] font-semibold">Pentru bărbați</div>
              </div>
              <h2 className="font-display text-4xl mb-5 mt-0">Chirurgie intimă masculină</h2>
              <p className="text-zinc-700 mb-10 leading-relaxed text-[1.05rem]">
                Faloplastie, circumcizie, fimoză, P-Shot și extracție corpi străini intrapenieni. 7 proceduri sub semnătura unui chirurg-femeie singular în România pe această nișă.
              </p>
              <div className="space-y-3">
                {masculin.map((p) => (
                  <Link key={p.slug} href={`/proceduri/${p.slug}`} className="card-premium flex items-start gap-4 p-5 no-underline group">
                    <p.icon className="w-6 h-6 text-[var(--color-brand-gold)] mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-lg text-[var(--color-brand-navy)] font-medium leading-tight">{p.title}</div>
                      <div className="text-sm text-zinc-600 mt-1">{p.subtitle}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-[var(--color-brand-gold)] transition-colors flex-shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            </div>

            {/* FEMININ */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-[var(--color-brand-gold)]" />
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-gold-deep)] font-semibold">Pentru femei</div>
              </div>
              <h2 className="font-display text-4xl mb-5 mt-0">Chirurgie intimă feminină</h2>
              <p className="text-zinc-700 mb-10 leading-relaxed text-[1.05rem]">
                Labioplastie wedge, vaginoplastie post-naștere, perineorafie, himenoplastie și G-Shot. 5 proceduri pentru sănătate intimă, încredere și plăcere sexuală — cu protocol GDPR strict.
              </p>
              <div className="space-y-3">
                {feminin.map((p) => (
                  <Link key={p.slug} href={`/proceduri/${p.slug}`} className="card-premium flex items-start gap-4 p-5 no-underline group">
                    <p.icon className="w-6 h-6 text-[var(--color-brand-gold)] mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-lg text-[var(--color-brand-navy)] font-medium leading-tight">{p.title}</div>
                      <div className="text-sm text-zinc-600 mt-1">{p.subtitle}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-[var(--color-brand-gold)] transition-colors flex-shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DE CE DR DIANA */}
      <section className="container-wide py-24 lg:py-32">
        <h2 className="text-4xl font-display font-semibold text-center mb-14">De ce Dr. Diana</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            {
              icon: Lock,
              title: "Confidențialitate absolută",
              text: "Protocol GDPR strict, facturare neutră Cabinet Medical Diana Gheorghiță, fără referință la diagnostic în comunicări exterioare. Discuție privată în consultație, fără fotografii."
            },
            {
              icon: HeartHandshake,
              title: "Empatie, fără judecată",
              text: "Bărbații și femeile cu nelămuriri despre dimensiune, anatomie sau patologie raportează un nivel mai redus de jenă atunci când sunt consultați de un medic-femeie cu profil profesional și empatic."
            },
            {
              icon: GraduationCap,
              title: "Expertiză demonstrabilă",
              text: "Peste 1.000 de proceduri intime efectuate. Fiecare pagină include cifre reale și surse din reviste medicale internaționale (BJU, J Sex Med, AUA, EAU, ISAPS, Cochrane)."
            }
          ].map((c, idx) => (
            <div key={idx} className="card-premium p-9">
              <c.icon className="w-9 h-9 text-[var(--color-brand-gold)] mb-4" />
              <h3 className="font-display text-2xl font-semibold text-[var(--color-brand-navy)] mb-3 mt-0">{c.title}</h3>
              <p className="text-zinc-700 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CIFRE */}
      <section className="section-glow border-y border-zinc-200">
        <div className="container-wide py-24 lg:py-32">
          <h2 className="text-4xl font-display font-semibold text-center mb-3 mt-0">Cifre verificate științific</h2>
          <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-14">
            Fără adjective senzaționaliste. Doar cifre din literatura medicală internațională.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-premium p-9">
              <div className="text-xs uppercase tracking-wide text-zinc-500 mb-3">Lungime medie globală în erecție</div>
              <div className="text-5xl font-display font-semibold text-[var(--color-brand-navy)] mb-2">13,12 cm</div>
              <div className="text-sm text-zinc-600 leading-relaxed">±1,66 cm. Studiu pe n=15.521 bărbați.</div>
              <div className="text-xs text-zinc-500 italic mt-3">
                Sursă:{" "}
                <a href="https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.13010" target="_blank" rel="noopener noreferrer">
                  Veale D et al. BJU International, 2015
                </a>
              </div>
            </div>
            <div className="card-premium p-9">
              <div className="text-xs uppercase tracking-wide text-zinc-500 mb-3">Satisfacție pacientă post-labioplastie wedge</div>
              <div className="text-5xl font-display font-semibold text-[var(--color-brand-navy)] mb-2">94-98%</div>
              <div className="text-sm text-zinc-600 leading-relaxed">Aspect estetic + îmbunătățire funcțională.</div>
              <div className="text-xs text-zinc-500 italic mt-3">
                Sursă:{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33409688/" target="_blank" rel="noopener noreferrer">
                  Sharp G et al. Aesthetic Plast Surg, 2021
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALE */}
      <section className="container-wide py-24 lg:py-32">
        <h2 className="text-4xl font-display font-semibold text-center mb-3 mt-0">Cuvinte de la pacienți</h2>
        <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12 text-sm">
          Testimoniale anonimizate cu acordul pacienților, conforme GDPR. Fără nume, fără fotografii.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { age: "B, 34 ani", text: "Am ales-o pentru profesionalism. Faptul că este medic femeie m-a făcut să simt mai puțină jenă în consultație. A explicat clar limitele a ceea ce se poate face.", proc: "Faloplastie + lipofilling combinat" },
            { age: "F, 38 ani", text: "După două nașteri naturale aveam disconfort fizic și estetic. Vaginoplastia cu perineorafie a refăcut tot. Soțul a observat diferența imediat. Recomand fără rezerve.", proc: "Vaginoplastie + perineorafie" },
            { age: "B, 28 ani", text: "Făcusem o greșeală cu kanamicina la 22 de ani. Dr. Diana a fost prima care mi-a spus în față că trebuie scoasă, fără să mă judece. Am refăcut lucrurile.", proc: "Extracție kanamicina + lipofilling" }
          ].map((t, idx) => (
            <div key={idx} className="card-premium p-9">
              <Quote className="w-7 h-7 text-[var(--color-brand-gold)] mb-4" />
              <p className="text-zinc-700 italic mb-5 leading-relaxed">{t.text}</p>
              <div className="text-xs text-zinc-500 mt-auto pt-4 border-t border-zinc-100">
                <div>{t.age}</div>
                <div className="font-semibold text-[var(--color-brand-navy)] mt-1">{t.proc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="container-wide py-12 lg:py-16">
        <CTABanner />
      </div>
    </>
  );
}
