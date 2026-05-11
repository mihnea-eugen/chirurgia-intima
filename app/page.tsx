import Link from "next/link";
import { Phone, Award, GraduationCap, ShieldCheck, Users, Lock, HeartHandshake, Quote, Scissors, Sparkles, Wrench, Activity, FlaskConical, ArrowRight } from "lucide-react";
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
  { slug: "p-shot-prp", title: "P-Shot, plasmă proprie pentru penis", subtitle: "Tratament regenerativ cu plasmă", icon: Activity },
  { slug: "extractie-kanamicina", title: "Extracție corpi străini", subtitle: "Kanamicină, silicon, vaselină", icon: Wrench }
];

const feminin = [
  { slug: "labioplastie", title: "Labioplastie", subtitle: "Reducere labii mici prin rezecție în pană", icon: Sparkles },
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
            name: "Chirurgie intimă, Dr. Diana Gheorghiță",
            description: SITE.description,
            url: SITE.url,
            speakable: true
          }),
          getBreadcrumbSchema([{ name: "Acasă", url: SITE.url }])
        ]}
      />

      {/* HERO */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-white via-zinc-50 to-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
                Chirurgie intimă pentru bărbați și femei.
                <br />
                <span className="text-[var(--color-brand-gold-deep)]">Cu profesionalism și discreție absolută.</span>
              </h1>
              <p className="text-lg text-zinc-700 leading-relaxed mb-10 max-w-2xl">
                Dr. Diana Gheorghiță, medic chirurg plastic specializat în chirurgia intimă masculină și feminină. Membră ISAPS, peste 1.000 de proceduri intime, peste 10 ani de practică în clinică privată acreditată din București.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/programare" className="btn btn-primary">
                  Programare consultație
                </Link>
                <a href={`tel:${SITE.phone}`} className="btn btn-outline tabular-nums">
                  <Phone className="w-4 h-4" /> {SITE.phone}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-br from-[var(--color-brand-navy)] to-[var(--color-brand-navy-dark)] rounded-2xl p-12 sm:p-16 shadow-2xl">
                <div className="text-white text-center">
                  <Award className="w-14 h-14 mx-auto mb-6 text-[var(--color-brand-gold)]" />
                  <div className="font-display text-3xl sm:text-4xl font-medium mb-4 leading-tight">Dr. Diana Gheorghiță</div>
                  <div className="text-base text-white/80 leading-relaxed mb-6">
                    Medic specialist chirurgie plastică, estetică și microchirurgie reconstructivă
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-brand-gold-soft)] pt-6 border-t border-white/20">
                    Membră ISAPS · 10+ ani experiență
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Award, label: "Proceduri intime", value: `${SITE.trust.proceduresPerformed}+` },
              { icon: GraduationCap, label: "Ani de experiență", value: `${SITE.trust.yearsExperience}+` },
              { icon: ShieldCheck, label: "Membră", value: "ISAPS" },
              { icon: Users, label: "Recenzii Google", value: `${SITE.trust.rating}/5` }
            ].map((s, idx) => (
              <div key={idx} className="text-center p-8 rounded-xl bg-[var(--color-brand-cream)] border border-zinc-200">
                <s.icon className="w-10 h-10 mx-auto text-[var(--color-brand-gold)] mb-4" />
                <div className="text-3xl font-display font-semibold text-[var(--color-brand-navy)] mb-2">{s.value}</div>
                <div className="text-xs uppercase tracking-wide text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOUĂ COLOANE: BĂRBAȚI + FEMEI */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-6">Proceduri intime</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              12 proceduri sub semnătura unui chirurg plastic-femeie, cu protocol GDPR strict și factură neutră.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* MASCULIN */}
            <div>
              <div className="mb-8 pb-6 border-b border-zinc-300">
                <div className="text-xs uppercase tracking-widest text-[var(--color-brand-gold-deep)] font-semibold mb-3">Pentru bărbați</div>
                <h3 className="font-display text-3xl mb-4">Chirurgie intimă masculină</h3>
                <p className="text-zinc-700 leading-relaxed">
                  Faloplastie, circumcizie, fimoză, P-Shot (plasmă proprie) și extracție corpi străini intrapenieni. 7 proceduri sub semnătura unui chirurg-femeie singular în România pe această nișă.
                </p>
              </div>
              <div className="space-y-4">
                {masculin.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/proceduri/${p.slug}`}
                    className="flex items-start gap-5 p-6 rounded-xl bg-white border border-zinc-200 hover:border-[var(--color-brand-gold)] hover:shadow-md transition-all no-underline group"
                  >
                    <p.icon className="w-6 h-6 text-[var(--color-brand-gold)] mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-lg text-[var(--color-brand-navy)] font-medium leading-tight mb-1">{p.title}</div>
                      <div className="text-sm text-zinc-600">{p.subtitle}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-[var(--color-brand-gold)] transition-colors flex-shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            </div>

            {/* FEMININ */}
            <div>
              <div className="mb-8 pb-6 border-b border-zinc-300">
                <div className="text-xs uppercase tracking-widest text-[var(--color-brand-gold-deep)] font-semibold mb-3">Pentru femei</div>
                <h3 className="font-display text-3xl mb-4">Chirurgie intimă feminină</h3>
                <p className="text-zinc-700 leading-relaxed">
                  Labioplastie prin rezecție în pană, vaginoplastie post-naștere, perineorafie, himenoplastie și G-Shot. 5 proceduri pentru sănătate intimă, încredere și plăcere sexuală, cu protocol GDPR strict.
                </p>
              </div>
              <div className="space-y-4">
                {feminin.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/proceduri/${p.slug}`}
                    className="flex items-start gap-5 p-6 rounded-xl bg-white border border-zinc-200 hover:border-[var(--color-brand-gold)] hover:shadow-md transition-all no-underline group"
                  >
                    <p.icon className="w-6 h-6 text-[var(--color-brand-gold)] mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-lg text-[var(--color-brand-navy)] font-medium leading-tight mb-1">{p.title}</div>
                      <div className="text-sm text-zinc-600">{p.subtitle}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-[var(--color-brand-gold)] transition-colors flex-shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DE CE DR. DIANA */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-center mb-16">De ce Dr. Diana</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={idx} className="p-10 rounded-xl bg-[var(--color-brand-cream)] border border-zinc-200">
                <c.icon className="w-10 h-10 text-[var(--color-brand-gold)] mb-6" />
                <h3 className="font-display text-2xl font-semibold text-[var(--color-brand-navy)] mb-4 leading-tight">{c.title}</h3>
                <p className="text-zinc-700 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIFRE */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4">Cifre verificate științific</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Fără adjective senzaționaliste. Doar cifre din literatura medicală internațională.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-xl bg-white border border-zinc-200">
              <div className="text-xs uppercase tracking-wide text-zinc-500 mb-4">Lungime medie globală în erecție</div>
              <div className="text-5xl font-display font-semibold text-[var(--color-brand-navy)] mb-3">13,12 cm</div>
              <div className="text-sm text-zinc-600 leading-relaxed mb-4">±1,66 cm. Studiu pe n=15.521 bărbați.</div>
              <div className="text-xs text-zinc-500 italic">
                Sursa:{" "}
                <a href="https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.13010" target="_blank" rel="noopener noreferrer" className="underline">
                  Veale D et al. BJU International, 2015
                </a>
              </div>
            </div>
            <div className="p-10 rounded-xl bg-white border border-zinc-200">
              <div className="text-xs uppercase tracking-wide text-zinc-500 mb-4">Satisfacție pacientă post-labioplastie wedge</div>
              <div className="text-5xl font-display font-semibold text-[var(--color-brand-navy)] mb-3">94-98%</div>
              <div className="text-sm text-zinc-600 leading-relaxed mb-4">Aspect estetic + îmbunătățire funcțională.</div>
              <div className="text-xs text-zinc-500 italic">
                Sursa:{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33409688/" target="_blank" rel="noopener noreferrer" className="underline">
                  Sharp G et al. Aesthetic Plast Surg, 2021
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALE */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4">Cuvinte de la pacienți</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-sm leading-relaxed">
              Testimoniale anonimizate cu acordul pacienților, conforme GDPR. Fără nume, fără fotografii.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { age: "B, 34 ani", text: "Am ales-o pentru profesionalism. Faptul că este medic femeie m-a făcut să simt mai puțină jenă în consultație. A explicat clar limitele a ceea ce se poate face.", proc: "Faloplastie + lipofilling combinat" },
              { age: "F, 38 ani", text: "După două nașteri naturale aveam disconfort fizic și estetic. Vaginoplastia cu perineorafie a refăcut tot. Soțul a observat diferența imediat. Recomand fără rezerve.", proc: "Vaginoplastie + perineorafie" },
              { age: "B, 28 ani", text: "Făcusem o greșeală cu kanamicina la 22 de ani. Dr. Diana a fost prima care mi-a spus în față că trebuie scoasă, fără să mă judece. Am refăcut lucrurile.", proc: "Extracție kanamicina + lipofilling" }
            ].map((t, idx) => (
              <div key={idx} className="p-10 rounded-xl bg-[var(--color-brand-cream)] border border-zinc-200 flex flex-col">
                <Quote className="w-8 h-8 text-[var(--color-brand-gold)] mb-6 flex-shrink-0" />
                <p className="text-zinc-700 italic leading-relaxed mb-8 flex-1">{t.text}</p>
                <div className="text-xs text-zinc-500 pt-6 border-t border-zinc-200">
                  <div>{t.age}</div>
                  <div className="font-semibold text-[var(--color-brand-navy)] mt-1">{t.proc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <CTABanner />
        </div>
      </section>
    </>
  );
}
