import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "Politica de protecție a datelor (GDPR)", description: "Politica GDPR pentru chirurgia-intima.com. Drepturi pacient, stocare date, cookies." };

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 prose-custom">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"GDPR", url:"/gdpr"}]} />

      <div className="mt-8 mb-12 lg:mb-16 not-prose">
        <ImagePlaceholder
          label="Hero: Politica GDPR"
          hint="Sugestie: ilustrație concept cu lacăt + scut + reguli scrise, paletă navy/gold. Sau icon GDPR official + scut."
          ratio="21/9"
          variant="navy"
        />
      </div>

      <h1 className="font-display">Politica de protecție a datelor (GDPR)</h1>
      <p>Ultima actualizare: 9 mai 2026.</p>
      <h2>Operator de date</h2>
      <p>Cabinet Medical Diana Gheorghiță, București, România.</p>
      <h2>Date colectate</h2>
      <ul><li>Date personale (nume, telefon, email) furnizate la programare</li><li>Date medicale (în consultație, sub strictă confidențialitate medical-pacient)</li><li>Date tehnice (cookies tehnice, IP) pentru funcționarea site-ului</li></ul>
      <h2>Drepturi pacient</h2>
      <ul><li>Dreptul la acces: puteți solicita oricând informațiile stocate</li><li>Dreptul la ștergere ("dreptul de a fi uitat")</li><li>Dreptul la rectificare</li><li>Dreptul la portabilitate</li><li>Dreptul de opoziție</li></ul>
      <h2>Stocare</h2>
      <p>Date stocate exclusiv pe servere România/UE conforme GDPR. Acces restrictionat la personalul medical implicat în tratament.</p>
      <h2>Cookies</h2>
      <p>Folosim doar cookies tehnice esențiale funcționării site-ului. Niciun cookie publicitar fără consimțământ explicit.</p>
      <h2>Contact pentru cereri GDPR</h2>
      <p>Email: <a href="mailto:contact@chirurgia-intima.com">contact@chirurgia-intima.com</a></p>
    </div>
  );
}
