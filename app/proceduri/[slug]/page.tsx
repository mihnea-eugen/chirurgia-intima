import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ShieldAlert, Hospital, Stethoscope, HeartPulse, CheckCircle2, AlertTriangle, Phone, ClipboardCheck, MessageCircle, ArrowRight, GraduationCap } from "lucide-react";
import { getProcedureBySlug, getAllProcedureSlugs, proceduri } from "@/lib/proceduri";
import { SITE } from "@/lib/site";
import { getProcedureSchema, getFAQSchema, getBreadcrumbSchema, getMedicalWebPageSchema } from "@/lib/schema";
import SchemaGraph from "@/components/SchemaGraph";
import StatGrid from "@/components/StatGrid";
import FAQ from "@/components/FAQ";
import RecoveryTimeline from "@/components/RecoveryTimeline";
import CitationsList from "@/components/CitationsList";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";

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
    alternates: { canonical: `${SITE.url}/proceduri/${proc.slug}` }
  };
}

export default async function ProcedurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const proc = getProcedureBySlug(slug);
  if (!proc) notFound();
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
      <SchemaGraph items={[
        getMedicalWebPageSchema({ name: p.metaTitle, description: p.metaDescription, url: `${SITE.url}/proceduri/${p.slug}`, speakable: true }),
        getProcedureSchema(p),
        getFAQSchema(p.faqs),
        getBreadcrumbSchema(breadcrumbsAbs)
      ]} />
      <div className="container-wide py-8 lg:py-12">
        <Breadcrumbs items={breadcrumbs} />
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-custom">
            <h1 className="font-display">{p.h1}</h1>
            <p className="lead">{p.lead}</p>
            <h2>Ce este {p.title.toLowerCase()}?</h2>
            <p>{p.whatIs}</p>
            <h3>Când este indicată</h3>
            <ul>{p.whenIndicated.map((it, idx) => <li key={idx}>{it}</li>)}</ul>
            <h3>Când NU este indicată</h3>
            <ul>{p.whenNotIndicated.map((it, idx) => <li key={idx}>{it}</li>)}</ul>
            <h2>Cifre cheie</h2>
            <StatGrid facts={p.facts} />
            <h2>Procedura pas cu pas</h2>
            <ol className="list-decimal pl-5 space-y-3 mt-3">{p.procedureSteps.map((s, idx) => <li key={idx}><strong>{s.title}.</strong> {s.description}</li>)}</ol>
            {p.recovery_timeline.length > 0 && (<><h2>Recuperare săptămânal</h2><RecoveryTimeline steps={p.recovery_timeline} /></>)}
            <h2>Riscuri și complicații</h2>
            <ul className="space-y-3 mt-3 list-none pl-0">{p.risks.map((r, idx) => (<li key={idx} className="bg-zinc-50 border-l-4 border-[var(--color-brand-gold)] p-4 rounded-r"><div className="font-semibold text-[var(--color-brand-navy)] flex items-start gap-2"><AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0 text-[var(--color-brand-gold)]" />{r.title}</div><p className="text-zinc-700 mt-1">{r.description}</p></li>))}</ul>
            <h2>Comparație cu alternative</h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">{p.alternatives.map((a, idx) => (<div key={idx} className="border border-zinc-200 p-4 rounded-lg"><div className="font-semibold text-[var(--color-brand-navy)] flex items-start gap-2 mb-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-brand-gold)]" />{a.title}</div><p className="text-sm text-zinc-700">{a.description}</p></div>))}</div>
            <h2 id="faq">Întrebări frecvente</h2>
            <FAQ items={p.faqs} />
            <h2>Surse științifice citate</h2>
            <CitationsList citations={p.citations} />
            <CTABanner />
          </article>
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-4">
              <div className="bg-[var(--color-brand-navy)] text-white p-5 rounded-xl">
                <div className="text-xs uppercase tracking-wide opacity-80 mb-1">Cost estimat</div>
                <div className="text-3xl font-display font-semibold mb-3">{p.cost}</div>
                <div className="text-xs opacity-80 italic mb-4">Finanțare TBI Bank disponibilă.</div>
                <Link href="/programare" className="btn btn-gold w-full justify-center"><ClipboardCheck className="w-4 h-4" /> Programare</Link>
                <a href={`tel:${SITE.phone}`} className="mt-2 btn w-full justify-center bg-white text-[var(--color-brand-navy)]"><Phone className="w-4 h-4" /> {SITE.phone}</a>
              </div>
              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <h4 className="text-sm uppercase tracking-wide text-zinc-500 mb-3 font-semibold">Detalii</h4>
                <ul className="space-y-3 text-sm">
                  <li><Clock className="inline w-4 h-4" /> <strong>Durată:</strong> {p.duration}</li>
                  <li><HeartPulse className="inline w-4 h-4" /> <strong>Recuperare:</strong> {p.recovery}</li>
                  <li><Stethoscope className="inline w-4 h-4" /> <strong>Anestezie:</strong> {p.anesthesia}</li>
                  <li><Hospital className="inline w-4 h-4" /> <strong>Spitalizare:</strong> {p.hospitalStay}</li>
                  <li><ShieldAlert className="inline w-4 h-4" /> <strong>Tip:</strong> {p.procedureType === "SurgicalProcedure" ? "Chirurgicală" : p.procedureType === "NonSurgicalProcedure" ? "Non-chirurgicală" : "Terapeutică"}</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
