import Link from "next/link";
import { Phone, MessageCircle, ClipboardCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export default function CTABanner({ title }: { title?: string }) {
  return (
    <section className="card-glow rounded-2xl px-8 py-12 lg:px-14 lg:py-16 my-12">
      <h3 className="text-3xl lg:text-4xl font-display text-[var(--color-brand-navy)] mb-4 max-w-3xl">
        {title || "Programați o consultație confidențială"}
      </h3>
      <div className="gradient-divider mb-6 max-w-xs"></div>
      <p className="text-zinc-700 mb-8 max-w-3xl leading-relaxed text-[1.05rem]">
        Discutați direct cu Dr. Diana Gheorghiță despre opțiunile chirurgicale, cifrele realiste și pașii următori. Toate consultațiile sunt private, conforme GDPR, cu facturare neutră.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/programare" className="btn btn-primary">
          <ClipboardCheck className="w-4 h-4" /> Programare consultație
        </Link>
        <a href={`tel:${SITE.phone}`} className="btn btn-outline">
          <Phone className="w-4 h-4" /> {SITE.phone}
        </a>
        <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </section>
  );
}
