import Link from "next/link";
import { Phone, ClipboardCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export default function CTABanner({ title }: { title?: string }) {
  return (
    <section className="card-glow rounded-2xl px-8 py-12 lg:px-14 lg:py-16 my-0">
      <h3 className="text-3xl lg:text-4xl font-display text-[var(--color-brand-navy)] mb-4 max-w-3xl">
        {title || "Programați o consultație confidențială"}
      </h3>
      <div className="gradient-divider mb-6 max-w-xs"></div>
      <p className="text-zinc-700 mb-8 max-w-3xl leading-relaxed text-[1.05rem]">
        Discutați direct cu Dr. Diana Gheorghiță despre opțiunile chirurgicale, cifrele realiste și pașii următori. Toate consultațiile sunt private, conforme GDPR, cu facturare neutră.
      </p>
      <div className="flex flex-wrap gap-3 items-center">
        <Link href="/programare" className="btn btn-primary not-prose">
          <ClipboardCheck className="w-4 h-4" /> Programare consultație
        </Link>
        <a href={`tel:${SITE.phone}`} className="btn btn-outline not-prose">
          <Phone className="w-4 h-4" /> {SITE.phone}
        </a>
        <a
          href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold not-prose"
          aria-label="Contact WhatsApp"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.711.306 1.265.489 1.697.626.713.226 1.362.194 1.875.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </section>
  );
}
