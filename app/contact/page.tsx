import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { SITE } from "@/lib/site";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Dr. Diana Gheorghiță | Telefon, WhatsApp, adresă",
  description: "Contact Dr. Diana Gheorghiță, chirurgie intimă masculină. Telefon, WhatsApp, email, adresă clinică privată acreditată București.",
  alternates: { canonical: `${SITE.url}/contact` }
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <Breadcrumbs items={[{ name: "Acasă", url: "/" }, { name: "Contact", url: "/contact" }]} />

      <div className="mt-8 mb-12 lg:mb-16">
        <ImagePlaceholder
          label="Hero: Contact și locație"
          hint="Sugestie: foto fațadă clinică sau plan recepție cabinet, lumină naturală. Sau ilustrație conceptuală cu telefon + WhatsApp + email + hartă."
          ratio="21/9"
          variant="navy"
        />
      </div>

      <h1 className="font-display">Contact</h1>
      <p className="lead">
        Toate canalele de contact pentru pacienți și pacienți internaționali. Confidențialitate garantată în orice canal.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 my-6">
        <a href={`tel:${SITE.phone}`} className="bg-white border border-zinc-200 rounded-xl p-5 no-underline">
          <Phone className="w-6 h-6 mb-2 text-[var(--color-brand-gold)]" />
          <div className="font-display font-semibold">Telefon</div>
          <div className="text-zinc-700">{SITE.phone}</div>
        </a>
        <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="bg-white border border-zinc-200 rounded-xl p-5 no-underline">
          <MessageCircle className="w-6 h-6 mb-2 text-[var(--color-brand-gold)]" />
          <div className="font-display font-semibold">WhatsApp</div>
          <div className="text-zinc-700">{SITE.whatsapp}</div>
        </a>
        <a href={`mailto:${SITE.email}`} className="bg-white border border-zinc-200 rounded-xl p-5 no-underline">
          <Mail className="w-6 h-6 mb-2 text-[var(--color-brand-gold)]" />
          <div className="font-display font-semibold">Email</div>
          <div className="text-zinc-700">{SITE.email}</div>
        </a>
        <div className="bg-white border border-zinc-200 rounded-xl p-5">
          <Clock className="w-6 h-6 mb-2 text-[var(--color-brand-gold)]" />
          <div className="font-display font-semibold">Program</div>
          <div className="text-zinc-700">Luni-Vineri 09:00-19:00</div>
        </div>
      </div>

      <h2>Locație</h2>
      <div className="flex items-start gap-3 text-zinc-700">
        <MapPin className="w-5 h-5 mt-0.5 text-[var(--color-brand-gold)]" />
        <div>
          {SITE.clinic.name}<br />
          {SITE.clinic.streetAddress}<br />
          {SITE.clinic.addressLocality}, {SITE.clinic.postalCode}
        </div>
      </div>

      <div className="my-6">
        <ImagePlaceholder
          label="Foto fațadă clinică + indicator intrare"
          hint="Sugestie: 2 fotografii cu fațada clădirii și indicatorul către cabinet. Lumină de zi, fără pacienți, fără personal identificabil."
          ratio="16/9"
          variant="cream"
        />
      </div>

      <div className="mt-4 aspect-video w-full bg-zinc-100 rounded-xl border border-zinc-200 overflow-hidden">
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.clinic.streetAddress + " " + SITE.clinic.addressLocality)}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hartă clinică privată acreditată"
        />
      </div>
    </div>
  );
}
