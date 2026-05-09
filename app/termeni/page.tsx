import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Termeni și condiții", description: "Termeni și condiții de utilizare a site-ului chirurgia-intima.com." };

export default function Page() {
  return (
    <div className="container-narrow py-12 prose-custom">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Termeni", url:"/termeni"}]} />
      <h1 className="font-display">Termeni și condiții</h1>
      <p>Ultima actualizare: 9 mai 2026.</p>
      <h2>Despre site</h2>
      <p>Site-ul chirurgia-intima.com prezintă informații educaționale despre proceduri chirurgicale intime masculine și serviciile Dr. Diana Gheorghiță în Clinica Pogany București.</p>
      <h2>Caracter informativ</h2>
      <p>Conținutul site-ului are caracter exclusiv informativ și nu înlocuiește consultația medicală. Decizia de procedură se ia exclusiv în consultație individuală cu medicul.</p>
      <h2>Confidențialitate</h2>
      <p>Datele furnizate prin formularul de contact sunt prelucrate conform politicii GDPR. Niciodată partajate cu terți.</p>
      <h2>Drepturi de proprietate intelectuală</h2>
      <p>Toate textele, imaginile și layout-ul sunt proprietate Dr. Diana Gheorghiță. Reproducerea fără acord scris este interzisă.</p>
      <h2>Contact</h2>
      <p><a href="mailto:contact@chirurgia-intima.com">contact@chirurgia-intima.com</a></p>
    </div>
  );
}
