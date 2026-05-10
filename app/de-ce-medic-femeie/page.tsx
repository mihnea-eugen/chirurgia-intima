import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "De ce medic femeie pentru chirurgie intimă masculină", description: "Singura specialistă femeie din România în chirurgia intimă masculină. Empatie profesională, discreție absolută, expertiză ISAPS." };

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"De ce medic femeie", url:"/de-ce-medic-femeie"}]} />

      <div className="mt-8 mb-12 lg:mb-16">
        <ImagePlaceholder
          label="Hero — De ce medic femeie pentru chirurgie intimă masculină"
          hint="Sugestie: portret editorial Dr. Diana, expresie calmă, halat alb, lumină laterală. Sau ilustrație conceptuală cu echilibru empatie + expertiză."
          ratio="21/9"
          variant="navy"
        />
      </div>

      <h1 className="font-display">De ce medic femeie pentru chirurgie intimă masculină</h1>
      <div className="prose-custom mt-6">
        <p className="lead">Dr. Diana este singurul medic femeie din România care practică sistematic chirurgie intimă masculină la nivel de specialist. Diferențierea esențială față de competiție:</p>
        <h2>1. Confidențialitate percepută diferit</h2>
        <p>Bărbatul cu insecuritate despre dimensiune sau patologie (Peyronie, fimoză adult, sechele kanamicina) raportează în studii de psihologie medicală nivel mai redus de jenă cu medic femeie cu profil profesional și empatic. Aceasta e contraintuitiv dar documentat.</p>
        <h2>2. Empathy bridge spre partenere</h2>
        <p>Mulți pacienți pe chirurgie intimă masculină vin sub presiunea cuplului. Medicul femeie poate consulta și partenera, oferind dimensiune holistică pe care un urolog clasic nu o livrează.</p>

        <div className="my-10">
          <ImagePlaceholder
            label="Grafic: comparație abordare medic femeie vs urolog clasic"
            hint="Sugestie: infografic simplu pe 4 puncte cheie — confidențialitate, empatie, brand, relație 1:1. Stil editorial, paletă brand."
            ratio="16/9"
            variant="cream"
          />
        </div>

        <h2>3. Branding distinctive</h2>
        <p>În SERP cu 8 chirurgi bărbați + clinici impersonale (Cosmedica, Zetta, MedLife), Dr. Diana e singurul outlier. Click-through rate semnificativ mai mare pe imagine + nume.</p>
        <h2>4. Diferențiere față de cabinete-mamut</h2>
        <p>Faloplastie.ro e Cosmedica, MedLife e MedLife. Dr. Diana e medic personal — relație 1:1 pre/post-op, telefon direct.</p>
      </div>
      <CTABanner />
    </div>
  );
}
