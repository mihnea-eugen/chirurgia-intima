import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  ShieldAlert,
  Hospital,
  Banknote,
  Stethoscope,
  HeartPulse,
  CheckCircle2,
  AlertTriangle,
  Phone,
  ClipboardCheck,
  MessageCircle,
  ArrowRight,
  GraduationCap
} from "lucide-react";
import {
  getProcedureBySlug,
  getAllProcedureSlugs,
  proceduri
} from "@/lib/proceduri";
import { SITE } from "@/lib/site";
import {
  getProcedureSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getMedicalWebPageSchema
} from "@/lib/schema";
import SchemaGraph from "@/components/SchemaGraph";
import StatGrid from "@/components/StatGrid";
import FAQ from "@/components/FAQ";
import RecoveryTimeline from "@/components/RecoveryTimeline";
import CitationsList from "@/components/CitationsList";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export function generateStaticParams() {
  return getAllProcedureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const proc = getProcedureBySlug(slug);
  if (!proc) return { title: "Procedură" };
  return {
    title: proc.metaTitle,
    description: proc.metaDescription,
    alternates: { canonical: `${SITE.url}/proceduri/${proc.slug}` },
    openGraph: {
      title: proc.metaTitle,
      description: proc.metaDescription,
      url: `${SITE.url}/proceduri/${proc.slug}`,
      type: "article"
    }
  };
}

export default async function ProcedurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const proc = getProcedureBySlug(slug);
  if (!proc) {
    notFound();
  }
  // After notFound() throws, TS should narrow proc — assert non-null defensively
  const p = proc!;

  const breadcrumbs = [
    { name: "Acasă", url: "/" },
    { name: "Proceduri", url: "/proceduri" },
    { name: p.title, url: `/proceduri/${p.slug}` }
  ];
  const breadcrumbsAbs = breadcrumbs.map((b) => ({ ...b, url: b.url.startsWith("/") ? `${SITE.url}${b.url}` : b.url }));

  const otherProcs = proceduri.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <SchemaGraph
        items={[
          getMedicalWebPageSchema({
            name: p.metaTitle,
            description: p.metaDescription,
            url: `${SITE.url}/proceduri/${p.slug}`,
            speakable: true
          }),
          getProcedureSchema(p),
          getFAQSchema(p.faqs),
          getBreadcrumbSchema(breadcrumbsAbs)
        ]}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-8 mb-12 lg:mb-16">
          <ImagePlaceholder
            label={`Hero: ${p.title}`}
            hint={`Sugestie: foto cabinet anonimizată sau grafic concept pentru ${p.primaryKeyword}. Fără pacienți, fără informații care identifică persoane.`}
            ratio="21/9"
            variant="navy"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {/* ARTICLE */}
          <article className="lg:col-span-2 prose-custom">
            <div className="mb-2 inline-block bg-zinc-100 text-zinc-700 text-xs px-2 py-1 rounded uppercase tracking-wide">
              {p.category === "augmentare" ? "Augmentare" : p.category === "preput" ? "Prepuț, igienă" : p.category === "reparator" ? "Reparator" : p.category === "regenerativ" ? "Regenerativ" : p.category === "feminin-labii" ? "Femei: Labii" : p.category === "feminin-vagin" ? "Femei: Vagin și perineu" : "Femei: Reconstrucție"}
            </div>
            <h1 className="font-display">{p.h1}</h1>
            <p className="lead">{p.lead}</p>

            <h2>Despre procedură</h2>
            <p>{p.whatIs}</p>

            {p.whenIndicated.length > 0 && (
              <>
                <h3>Când este indicată</h3>
                <ul>
                  {p.whenIndicated.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </>
            )}

            {p.whenNotIndicated.length > 0 && (
              <>
                <h3>Când NU este indicată</h3>
                <ul>
                  {p.whenNotIndicated.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </>
            )}

            <h2>Cifre cheie</h2>
            <StatGrid facts={p.facts} />

            <h2>Procedura pas cu pas</h2>
            <ol className="list-decimal pl-5 space-y-3 mt-3">
              {p.procedureSteps.map((s, idx) => (
                <li key={idx}>
                  <strong>{s.title}.</strong> {s.description}
                </li>
              ))}
            </ol>

            <div className="my-10">
              <ImagePlaceholder
                label="Schema tehnică intervenție"
                hint="Sugestie: ilustrație medicală anatomică (NU foto pacient). Anonimizat 100%, doar diagrama tehnicii chirurgicale."
                ratio="16/9"
                variant="cream"
              />
            </div>

            {p.recovery_timeline.length > 0 && (
              <>
                <h2>Recuperare săptămânal</h2>
                <RecoveryTimeline steps={p.recovery_timeline} />
              </>
            )}

            <h2>Riscuri și complicații</h2>
            <ul className="not-prose space-y-3 mt-3 list-none pl-0">
              {p.risks.map((r, idx) => (
                <li key={idx} className="bg-zinc-50 border-l-4 border-[var(--color-brand-gold)] p-4 rounded-r">
                  <div className="font-semibold text-[var(--color-brand-navy)] flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0 text-[var(--color-brand-gold)]" />
                    {r.title}
                  </div>
                  <p className="text-zinc-700 mt-1">{r.description}</p>
                </li>
              ))}
            </ul>

            <h2>Comparație cu alternative</h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {p.alternatives.map((a, idx) => (
                <div key={idx} className="border border-zinc-200 p-4 rounded-lg bg-white">
                  <div className="font-semibold text-[var(--color-brand-navy)] flex items-start gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-brand-gold)]" />
                    {a.title}
                  </div>
                  <p className="text-sm text-zinc-700">{a.description}</p>
                </div>
              ))}
            </div>

            <h2 id="faq">Întrebări frecvente</h2>
            <FAQ items={p.faqs} />

            <h2>Surse științifice citate</h2>
            <CitationsList citations={p.citations} />

            <CTABanner />

            <h2>Alte proceduri</h2>
            <div className="grid sm:grid-cols-3 gap-3 mt-3">
              {otherProcs.map((p) => (
                <Link key={p.slug} href={`/proceduri/${p.slug}`} className="border border-zinc-200 rounded-lg p-3 no-underline hover:border-[var(--color-brand-gold)] transition-colors">
                  <div className="text-xs uppercase text-zinc-500 mb-1 tracking-wide">Procedură</div>
                  <div className="font-semibold text-[var(--color-brand-navy)]">{p.title}</div>
                  <div className="inline-flex items-center gap-1 text-xs text-zinc-500 mt-1">
                    Vezi detalii <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-4">
              <div className="bg-[var(--color-brand-navy)] text-white p-5 rounded-xl">
                <div className="text-xs uppercase tracking-wide opacity-80 mb-1">Cost estimat</div>
                <div className="text-3xl font-display font-semibold mb-3">{p.cost}</div>
                <div className="text-xs opacity-80 italic mb-4">Finanțare TBI Bank disponibilă, până la 36 luni.</div>
                <Link href="/programare" className="btn btn-gold w-full justify-center">
                  <ClipboardCheck className="w-4 h-4" /> Programare consultație
                </Link>
                <a href={`tel:${SITE.phone}`} className="mt-2 btn w-full justify-center bg-white text-[var(--color-brand-navy)]">
                  <Phone className="w-4 h-4" /> {SITE.phone}
                </a>
                <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="mt-2 btn w-full justify-center bg-white/15 text-white border border-white/30 hover:bg-white/25">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <h4 className="text-sm uppercase tracking-wide text-zinc-500 mb-3 font-semibold">Detalii procedură</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-[var(--color-brand-gold)]" /><span><strong>Durată:</strong> {p.duration}</span></li>
                  <li className="flex items-start gap-2"><HeartPulse className="w-4 h-4 mt-0.5 text-[var(--color-brand-gold)]" /><span><strong>Recuperare:</strong> {p.recovery}</span></li>
                  <li className="flex items-start gap-2"><Stethoscope className="w-4 h-4 mt-0.5 text-[var(--color-brand-gold)]" /><span><strong>Anestezie:</strong> {p.anesthesia}</span></li>
                  <li className="flex items-start gap-2"><Hospital className="w-4 h-4 mt-0.5 text-[var(--color-brand-gold)]" /><span><strong>Spitalizare:</strong> {p.hospitalStay}</span></li>
                  <li className="flex items-start gap-2"><HeartPulse className="w-4 h-4 mt-0.5 text-[var(--color-brand-gold)]" /><span><strong>Activitate sexuală:</strong> {p.sexualActivity}</span></li>
                  <li className="flex items-start gap-2"><ShieldAlert className="w-4 h-4 mt-0.5 text-[var(--color-brand-gold)]" /><span><strong>Tip:</strong> {p.procedureType === "SurgicalProcedure" ? "Chirurgicală" : p.procedureType === "NonSurgicalProcedure" ? "Non-chirurgicală" : "Terapeutică"}</span></li>
                </ul>
              </div>

              <div className="bg-[var(--color-brand-cream)] rounded-xl p-5 border border-zinc-200">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-[var(--color-brand-gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display font-semibold text-[var(--color-brand-navy)] mb-1">Dr. Diana Gheorghiță</div>
                    <p className="text-sm text-zinc-700">
                      Medic specialist Chirurgie Plastică, Estetică și Microchirurgie Reconstructivă. Membră ISAPS. Peste {SITE.trust.proceduresPerformed} proceduri intime.
                    </p>
                    <Link href="/despre" className="text-sm text-[var(--color-brand-navy)] underline mt-2 inline-block">Despre Dr. Diana</Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
