import type { Metadata } from "next";
import Link from "next/link";
import { proceduri } from "@/lib/proceduri";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ArrowRight, Activity, Sparkles, FlaskConical, Wrench, Scissors } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proceduri intime, bărbați și femei | Dr. Diana Gheorghiță",
  description: "12 proceduri de chirurgie intimă: 7 pentru bărbați (faloplastie, lipofilling, fimoză, circumcizie, P-Shot, extracție corpi străini) și 5 pentru femei (labioplastie, vaginoplastie, perineorafie, himenoplastie, G-Shot).",
  alternates: { canonical: `${SITE.url}/proceduri` }
};

const iconMap: Record<string, typeof Activity> = {
  "alungire-penis": Activity,
  "ingrosare-lipofilling": Sparkles,
  "ingrosare-acid-hialuronic": FlaskConical,
  "fimoza": Wrench,
  "circumcizie-adulti": Scissors,
  "p-shot-prp": Activity,
  "extractie-kanamicina": Wrench,
  "labioplastie": Sparkles,
  "vaginoplastie": Activity,
  "perineorafie": Wrench,
  "himenoplastie": Scissors,
  "augmentare-punct-g": FlaskConical
};

export default function ProceduriIndexPage() {
  const masculin = proceduri.filter(p => ["augmentare", "preput", "reparator", "regenerativ"].includes(p.category));
  const feminin = proceduri.filter(p => p.category.startsWith("feminin"));

  const breadcrumbs = [
    { name: "Acasă", url: "/" },
    { name: "Proceduri", url: "/proceduri" }
  ];

  return (
    <>
      {/* HERO */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-white via-zinc-50 to-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-8">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                Proceduri intime
                <br />
                <span className="text-[var(--color-brand-gold-deep)]">12 intervenții, 1 chirurg-femeie</span>
              </h1>
              <p className="text-lg text-zinc-700 leading-relaxed max-w-2xl">
                7 proceduri pentru bărbați și 5 pentru femei, sub semnătura unui medic-femeie specializat sistematic în chirurgia intimă. Fiecare procedură are propria pagină cu cifre verificate, surse științifice și ghid recuperare săptămânal.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ImagePlaceholder
                label="Hero pagina Proceduri"
                hint="Sugestie: foto cabinet medical curat, instrument chirurgical inox, fără pacient. Sau: grafic abstract cu 12 cercuri simbolizând cele 12 proceduri."
                ratio="4/3"
                variant="navy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MASCULIN */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-[var(--color-brand-gold)]" />
            <div className="text-xs uppercase tracking-widest font-semibold text-[var(--color-brand-gold-deep)]">Pentru bărbați</div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl mb-4">Chirurgie intimă masculină</h2>
          <p className="text-zinc-600 leading-relaxed mb-12 max-w-2xl">
            Faloplastie, circumcizie, fimoză, P-Shot și extracție corpi străini intrapenieni. {masculin.length} proceduri pillar.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {masculin.map(p => {
              const Icon = iconMap[p.slug] || Activity;
              return (
                <Link key={p.slug} href={`/proceduri/${p.slug}`} className="group rounded-xl bg-white border border-zinc-200 hover:border-[var(--color-brand-gold)] hover:shadow-lg transition-all overflow-hidden no-underline flex flex-col">
                  <ImagePlaceholder
                    label={p.title}
                    ratio="16/9"
                    variant="cream"
                    className="border-0 rounded-none"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className="w-5 h-5 text-[var(--color-brand-gold)] mt-0.5 flex-shrink-0" />
                      <div className="font-display text-lg text-[var(--color-brand-navy)] leading-tight font-medium">{p.title}</div>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4 flex-1">{p.shortDescription}</p>
                    <div className="text-xs font-semibold text-[var(--color-brand-gold-deep)] inline-flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                      Vezi detalii <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEMININ */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-[var(--color-brand-gold)]" />
            <div className="text-xs uppercase tracking-widest font-semibold text-[var(--color-brand-gold-deep)]">Pentru femei</div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl mb-4">Chirurgie intimă feminină</h2>
          <p className="text-zinc-600 leading-relaxed mb-12 max-w-2xl">
            Labioplastie wedge, vaginoplastie post-naștere, perineorafie, himenoplastie și G-Shot. {feminin.length} proceduri sub protocol GDPR strict.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {feminin.map(p => {
              const Icon = iconMap[p.slug] || Sparkles;
              return (
                <Link key={p.slug} href={`/proceduri/${p.slug}`} className="group rounded-xl bg-white border border-zinc-200 hover:border-[var(--color-brand-gold)] hover:shadow-lg transition-all overflow-hidden no-underline flex flex-col">
                  <ImagePlaceholder
                    label={p.title}
                    ratio="16/9"
                    variant="gold-soft"
                    className="border-0 rounded-none"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className="w-5 h-5 text-[var(--color-brand-gold)] mt-0.5 flex-shrink-0" />
                      <div className="font-display text-lg text-[var(--color-brand-navy)] leading-tight font-medium">{p.title}</div>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4 flex-1">{p.shortDescription}</p>
                    <div className="text-xs font-semibold text-[var(--color-brand-gold-deep)] inline-flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                      Vezi detalii <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <CTABanner />
        </div>
      </section>
    </>
  );
}
