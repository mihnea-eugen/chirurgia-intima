import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Despre Dr. Diana Gheorghiță, medic chirurgie plastică București",
  description:
    "Dr. Diana Gheorghiță, medic specialist chirurgie plastică, estetică și microchirurgie reconstructivă. Membră ISAPS, peste 10 ani experiență, peste 1000 de proceduri intime în portofoliu. Operează în clinică privată acreditată din București.",
  alternates: { canonical: `${SITE.url}/despre` }
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <Breadcrumbs items={[{ name: "Acasă", url: "/" }, { name: "Despre Dr. Diana", url: "/despre" }]} />

      <div className="mt-8 mb-12 lg:mb-16">
        <ImagePlaceholder
          label="Portret profesional Dr. Diana Gheorghiță"
          hint="Sugestie: foto profesională cu halat alb, fundal neutru clinică, stil editorial. Înaltă rezoluție, lumină naturală."
          ratio="4/3"
          variant="navy"
        />
      </div>

      <h1 className="font-display">Dr. Diana Gheorghiță</h1>
      <p className="lead text-zinc-700 mt-2">
        Medic specialist chirurgie plastică, estetică și microchirurgie reconstructivă. Membră ISAPS, cu peste {SITE.trust.proceduresPerformed}+ proceduri intime în portofoliu și {SITE.trust.yearsExperience}+ ani de practică continuă în România.
      </p>

      <div className="prose-custom mt-8">
        <h2>Poziționare unică în România</h2>
        <p>
          Dr. Diana Gheorghiță este singurul medic femeie din România care practică sistematic chirurgie intimă masculină la nivel de specialist, în clinică privată acreditată. Diferențiatorii clinici față de competiție sunt măsurabili: empatie profesională demonstrată în 4,9/5 din 123 recenzii Google, protocol GDPR strict cu facturare neutră, citare științifică explicită în fiecare consultație și colaborare reală cu literatura urologică internațională (PubMed, EAU, AUA, BJUI).
        </p>

        <div className="my-10">
          <ImagePlaceholder
            label="Diplome ISAPS și CMR, credențiale verificate"
            hint="Sugestie: compoziție foto cu cele două diplome principale, frame neutru, plan apropiat. Sau ilustrație vectorială cu logo ISAPS + CMR."
            ratio="16/9"
            variant="cream"
          />
        </div>

        <h2>Formație academică</h2>
        <ul>
          <li>Specializare Chirurgie Plastică, Estetică și Microchirurgie Reconstructivă, Spital Universitar București</li>
          <li>Membră ISAPS (International Society of Aesthetic Plastic Surgery)</li>
          <li>Membră Colegiul Medicilor din România</li>
          <li>Stagii de perfecționare în chirurgie genitală internațional</li>
        </ul>

        <h2>Experiență clinică</h2>
        <p>
          Peste {SITE.trust.yearsExperience} ani de practică continuă, peste {SITE.trust.proceduresPerformed} proceduri intime efectuate, focus pe rezultate reproductibile, recuperare predictibilă și siguranță pacient. Toate intervențiile sunt documentate fotografic anonimizat, cu consimțământ informat detaliat și protocol post-operator personalizat.
        </p>

        <h2>Filosofie de practică</h2>
        <p>
          Consultația nu este gratuită, această decizie reduce numărul programărilor neonorate și asigură un timp de calitate cu pacienți motivați. Toate intervențiile chirurgicale sunt efectuate într-o clinică privată acreditată din București, cu echipament modern de bloc operator și echipă de anestezie experimentată.
        </p>

        <h2>Locație</h2>
        <p>
          Cabinetul Dr. Diana funcționează într-o clinică privată acreditată din București, Strada Cluceru Udricani 18.
        </p>

        <div className="my-10">
          <ImagePlaceholder
            label="Locație clinică, exterior și interior cabinet"
            hint="Sugestie: 1-2 fotografii cu fațada clinicii și sala de consultație. Lumină de zi, plan general și plan apropiat. Fără pacienți, fără personal identificabil."
            ratio="21/9"
            variant="gold-soft"
          />
        </div>

        <h2>Verificare credențiale</h2>
        <ul>
          <li><a href="https://www.isaps.org/" target="_blank" rel="noopener noreferrer">Verifică profilul ISAPS</a></li>
          <li><a href="https://www.cmr.ro/" target="_blank" rel="noopener noreferrer">Verifică Colegiul Medicilor din România</a></li>
          <li><a href="https://drdiana.ro/gheorghita/" target="_blank" rel="noopener noreferrer">Profil principal drdiana.ro</a></li>
        </ul>
      </div>

      <CTABanner />
    </div>
  );
}
