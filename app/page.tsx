import Link from "next/link";
import { Phone, ClipboardCheck, Award, ShieldCheck, Heart, ArrowRight, Star } from "lucide-react";
import { proceduri } from "@/lib/proceduri";
import { SITE } from "@/lib/site";
import ProcedureCard from "@/components/ProcedureCard";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[var(--color-brand-cream)] to-white">
        <div className="container-wide py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand-navy)]/10 text-[var(--color-brand-navy)] px-4 py-1.5 rounded-full text-sm mb-6">
              <Award className="w-4 h-4" />
              Singurul medic femeie din România specializat sistematic în chirurgia intimă masculină
            </div>
            <h1 className="font-display">Chirurgie intimă masculină. Cu profesionalism și discreție.</h1>
            <p className="lead text-zinc-700 mt-6">
              Faloplastie, circumcizie, Peyronie, extracție corpi străini și alte proceduri intime, sub semnătura Dr. Diana Gheorghiță. Peste {SITE.trust.proceduresPerformed}+ proceduri intime în portofoliu, {SITE.trust.yearsExperience}+ ani experiență, membră ISAPS.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/programare" className="btn btn-primary">
                <ClipboardCheck className="w-4 h-4" /> Programare consultație
              </Link>
              <Link href="/quiz-candidatura" className="btn btn-outline">Quiz candidatură</Link>
              <a href={`tel:${SITE.phone}`} className="btn btn-ghost">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="bg-white border border-zinc-200 rounded-xl p-5 text-center">
              <div className="text-3xl font-display font-semibold text-[var(--color-brand-gold)]">{SITE.trust.proceduresPerformed}+</div>
              <div className="text-sm text-zinc-600 mt-1">proceduri intime</div>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-5 text-center">
              <div className="text-3xl font-display font-semibold text-[var(--color-brand-gold)]">{SITE.trust.yearsExperience}+</div>
              <div className="text-sm text-zinc-600 mt-1">ani experiență</div>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-5 text-center">
              <div className="text-3xl font-display font-semibold text-[var(--color-brand-gold)] inline-flex items-center gap-1"><Star className="w-7 h-7 fill-[var(--color-brand-gold)]" />{SITE.trust.rating}</div>
              <div className="text-sm text-zinc-600 mt-1">{SITE.trust.reviewCount} recenzii Google</div>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-5 text-center">
              <div className="text-3xl font-display font-semibold text-[var(--color-brand-gold)]">ISAPS</div>
              <div className="text-sm text-zinc-600 mt-1">membră certificată</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[var(--color-brand-gray-light)]">
        <div className="container-wide">
          <h2 className="font-display text-center mb-3">Proceduri intime masculine</h2>
          <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">8 proceduri pillar acoperă spectrul complet — de la augmentare și corecție curbură până la reabilitare după autoinjectări.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {proceduri.map((p) => <ProcedureCard key={p.slug} procedure={p} />)}
          </div>
          <div className="text-center mt-10"><Link href="/proceduri" className="btn btn-outline">Vezi toate <ArrowRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
