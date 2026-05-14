import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mulțumesc! Cererea a fost primită | Dr. Diana Gheorghiță",
  description: "Mulțumesc pentru cererea de programare. Dr. Diana Gheorghiță sau echipa va reveni în 24 ore cu detalii.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE.url}/multumesc` }
};

export default function MultumescPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-brand-cream)] mb-6">
          <CheckCircle2 className="w-12 h-12 text-[var(--color-brand-gold)]" />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--color-brand-navy)] mb-6 leading-tight">
          Mulțumesc, am primit cererea
        </h1>
        <p className="text-lg text-zinc-700 leading-relaxed max-w-2xl mx-auto">
          Echipa Dr. Diana Gheorghiță va reveni în maximum 24 ore (zile lucrătoare) cu detalii despre programare, prețuri și pașii următori.
        </p>
      </div>

      <div className="bg-[var(--color-brand-cream)] rounded-2xl p-8 sm:p-12 border border-zinc-200 mb-10">
        <h2 className="font-display text-2xl text-[var(--color-brand-navy)] mb-6">Ce urmează</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <Clock className="w-8 h-8 text-[var(--color-brand-gold)] flex-shrink-0" />
            <div>
              <div className="font-semibold text-[var(--color-brand-navy)] mb-1">În 24 ore</div>
              <p className="text-sm text-zinc-700">Vă contactăm telefonic sau WhatsApp pentru confirmare oră și data programării.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-8 h-8 text-[var(--color-brand-gold)] flex-shrink-0" />
            <div>
              <div className="font-semibold text-[var(--color-brand-navy)] mb-1">Consultație confidențială</div>
              <p className="text-sm text-zinc-700">Toate discuțiile sunt private, sub protocol GDPR, cu facturare neutră.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-brand-navy)] rounded-2xl p-8 sm:p-12 text-white mb-10">
        <h2 className="font-display text-2xl mb-4">Aveți o întrebare urgentă?</h2>
        <p className="text-white/80 mb-6">Contactați-ne direct, nu așteptați call-back.</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="not-prose inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium bg-white text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-gold)] hover:text-white transition-all"
          >
            <Phone className="w-4 h-4" /> {SITE.phone}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="not-prose inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-white bg-[#25D366] hover:bg-[#1DA851] transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.711.306 1.265.489 1.697.626.713.226 1.362.194 1.875.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="not-prose inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium bg-white/15 text-white border border-white/30 hover:bg-white/25 transition-all"
          >
            <Mail className="w-4 h-4" /> {SITE.email}
          </a>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/proceduri"
          className="not-prose inline-flex items-center gap-2 text-[var(--color-brand-navy)] hover:text-[var(--color-brand-gold-deep)] font-medium"
        >
          ← Înapoi la proceduri
        </Link>
      </div>
    </div>
  );
}
