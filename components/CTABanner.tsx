import Link from "next/link";
import { Phone, MessageCircle, ClipboardCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export default function CTABanner({ title }: { title?: string }) {
  return (
    <section className="bg-[var(--color-brand-cream)] border border-zinc-200 rounded-xl p-6 lg:p-8 my-10">
      <h3 className="text-2xl font-display font-semibold text-[var(--color-brand-navy)] mb-2">
        {title || "Sunați când sunteți pregătit. Nu există grabă."}
      </h3>
      <p className="text-zinc-700 mb-5">
        Programați o consultație confidențială sau completați quiz-ul pentru o evaluare personalizată a candidaturii.
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
