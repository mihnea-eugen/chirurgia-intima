import Link from "next/link";
import { Phone, MessageCircle, ClipboardCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export default function CTABanner({ title }: { title?: string }) {
  return (
    <section className="bg-[var(--color-brand-cream)] border border-zinc-200 rounded-xl px-8 py-10 lg:px-12 lg:py-14 my-12">
      <h3 className="text-2xl lg:text-3xl font-display text-[var(--color-brand-navy)] mb-3 max-w-3xl">
        {title || "Programați o consultație confidențială"}
      </h3>
      <p className="text-zinc-700 mb-7 max-w-3xl leading-relaxed">
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
