import type { Metadata } from "next";
import Link from "next/link";
import { Award, BadgeCheck, GraduationCap, Hospital, Stethoscope } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import StatGrid from "@/components/StatGrid";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Despre Dr. Diana Gheorghiță", description: "Medic specialist Chirurgie Plastică, Estetică și Microchirurgie Reconstructivă. Membră ISAPS. Peste 10 ani experiență, peste 1000 proceduri intime." };

export default function Page() {
  return (
    <div className="container-narrow py-12">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Despre", url:"/despre"}]} />
      <h1 className="font-display">Dr. Diana Gheorghiță</h1>
      <p className="lead text-zinc-700 mt-2">Medic specialist Chirurgie Plastică, Estetică și Microchirurgie Reconstructivă. Membră ISAPS. Peste {SITE.trust.proceduresPerformed}+ proceduri intime, {SITE.trust.yearsExperience}+ ani experiență.</p>
      <div className="prose-custom mt-8">
        <h2>Poziționare unică</h2>
        <p>Dr. Diana este singurul medic femeie din România care practică sistematic chirurgie intimă masculină la nivel de specialist, în clinică privată acreditată (Pogany), cu pregătire ISAPS. Diferențierea esențială față de competiție: empatie profesională, discreție GDPR strictă, citare științifică explicită în fiecare consultație.</p>
        <h2>Formație</h2>
        <ul>
          <li>Universitatea de Medicină și Farmacie Carol Davila București</li>
          <li>Rezidențiat Chirurgie Plastică, Estetică și Microchirurgie Reconstructivă</li>
          <li>Membră ISAPS — International Society of Aesthetic Plastic Surgery</li>
          <li>Membră Colegiul Medicilor din România</li>
        </ul>
        <h2>Specialități</h2>
        <ul>
          <li>Faloplastie (alungire + îngroșare): peste 100 proceduri/an</li>
          <li>Circumcizie adulți, fimoză, frenuloplastie</li>
          <li>Boala Peyronie — tehnică Nesbit, plicatură</li>
          <li>Extracție corpi străini (kanamicina, silicon, vaselină)</li>
          <li>P-Shot / PRP penis</li>
          <li>Augmentare gland HA pentru ejaculare precoce</li>
        </ul>
        <h2>Locație</h2>
        <p><strong>Clinica Pogany</strong>, Strada Cluceru Udricani 18, București.</p>
        <h2>Verificare credințiale</h2>
        <ul>
          <li><a href="https://www.isaps.org/" target="_blank" rel="noopener noreferrer">Verifică ISAPS</a></li>
          <li><a href="https://www.cmr.ro/" target="_blank" rel="noopener noreferrer">Verifică Colegiul Medicilor</a></li>
          <li><a href="https://drdiana.ro/gheorghita/" target="_blank" rel="noopener noreferrer">Profil drdiana.ro</a></li>
        </ul>
      </div>
      <CTABanner />
    </div>
  );
}
