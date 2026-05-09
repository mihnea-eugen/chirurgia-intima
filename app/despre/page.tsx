import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Despre Dr. Diana Gheorghiță, medic chirurgie plastică București",
  description:
    "Dr. Diana Gheorghiță, medic specialist chirurgie plastică, estetică și microchirurgie reconstructivă. Membră ISAPS, peste 10 ani experiență, peste 1000 de proceduri intime în portofoliu. Operează în Clinica Pogany, București.",
  alternates: { canonical: `${SITE.url}/despre` }
};

export default function Page() {
  return (
    <div className="container-narrow py-12">
      <Breadcrumbs items={[{ name: "Acasă", url: "/" }, { name: "Despre Dr. Diana", url: "/despre" }]} />
      <div className="eyebrow mb-2">Bio profesională</div>
      <h1 className="font-display">Dr. Diana Gheorghiță</h1>
      <p className="lead text-zinc-700 mt-2">
        Medic specialist chirurgie plastică, estetică și microchirurgie reconstructivă. Membră ISAPS, cu peste {SITE.trust.proceduresPerformed}+ proceduri intime în portofoliu și {SITE.trust.yearsExperience}+ ani de practică continuă în România.
      </p>

      <div className="prose-custom mt-8">
        <h2>Poziționare unică în România</h2>
        <p>
          Dr. Diana Gheorghiță este singurul medic femeie din România care practică sistematic chirurgie intimă masculină la nivel de specialist, în clinică privată acreditată. Diferențiatorii clinici față de competiție sunt măsurabili: empatie profesională demonstrată în 4,9/5 din 123 recenzii Google, protocol GDPR strict cu facturare neutră, citare științifică explicită în fiecare consultație și colaborare reală cu literatura urologică internațională (PubMed, EAU, AUA, BJUI).
        </p>

        <h2>Formație academică</h2>
        <ul>
          <li>Universitatea de Medicină și Farmacie Carol Davila, București, Facultatea de Medicină generală</li>
          <li>Rezidențiat în chirurgie plastică, estetică și microchirurgie reconstructivă</li>
          <li>Membră ISAPS, International Society of Aesthetic Plastic Surgery</li>
          <li>Membră a Colegiului Medicilor din România</li>
          <li>Educație medicală continuă cu participare la congrese ISAPS, EAU, ESSM</li>
        </ul>

        <h2>Specialități</h2>
        <ul>
          <li>Faloplastie, alungire chirurgicală și îngroșare cu lipofilling, peste 100 de proceduri pe an</li>
          <li>Circumcizie adulți, fimoză, frenuloplastie, preputioplastie</li>
          <li>Boala Peyronie, tehnică Nesbit și plicatură peniană</li>
          <li>Extracție corpi străini intrapenieni, kanamicina, silicon, vaselină</li>
          <li>P-Shot, PRP autolog injectabil pentru funcție erectilă</li>
          <li>Augmentare gland cu acid hialuronic pentru ejaculare precoce</li>
        </ul>

        <h2>Filozofie de practică</h2>
        <p>
          Tonul în consultație este direct, non-judgmental și profesional. Cifrele și sursele științifice sunt prioritare; adjectivele senzaționaliste sunt absente. Pentru fiecare procedură pacientul primește cifre realiste despre câștigul anatomic posibil, durata recuperării, riscurile statistice și rata de regrete documentată în literatura medicală.
        </p>
        <p>
          Consultația nu este gratuită, această decizie reduce no-show rate și asigură un timp de calitate cu pacienți motivați. Toate intervențiile chirurgicale sunt efectuate în Clinica Pogany, clinică privată acreditată, cu echipament modern de bloc operator și echipă de anestezie experimentată.
        </p>

        <h2>Locație</h2>
        <p>
          <strong>Clinica Pogany</strong>, Strada Cluceru Udricani 18, București.
        </p>

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
