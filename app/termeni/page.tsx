import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termeni și condiții | Dr. Diana",
  alternates: { canonical: `${SITE.url}/termeni` }
};

export default function TermeniPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 prose-custom">
      <Breadcrumbs items={[{ name: "Acasă", url: "/" }, { name: "Termeni", url: "/termeni" }]} />

      <div className="mt-8 mb-12 lg:mb-16 not-prose">
        <ImagePlaceholder
          label="Hero: Termeni și condiții"
          hint="Sugestie: ilustrație conceptuală cu document semnat + ștampilă + balanță. Stil minimal monocrom navy."
          ratio="21/9"
          variant="navy"
        />
      </div>

      <h1 className="font-display">Termeni și condiții</h1>
      <p className="lead">Conținutul site-ului are caracter informativ general. Nu constituie diagnostic sau prescripție medicală. Decizia terapeutică se ia exclusiv în consultație, după examinare clinică.</p>
      <h2>Drepturi de autor</h2>
      <p>Conținutul și structura site-ului sunt protejate prin drepturi de autor. Reutilizarea fără acord scris este interzisă.</p>
      <h2>Limitarea răspunderii</h2>
      <p>Cifrele și statisticile prezentate sunt extrase din literatura medicală internațională citată în fiecare pagină. Rezultatele individuale pot varia, iar decizia terapeutică se ia exclusiv în consultație, după examinare clinică.</p>
    </div>
  );
}
