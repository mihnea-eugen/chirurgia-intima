import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Politica cookies", description: "Cookies utilizate pe chirurgia-intima.com." };

export default function Page() {
  return (
    <div className="container-narrow py-12 prose-custom">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Cookies", url:"/cookies"}]} />
      <h1 className="font-display">Politica cookies</h1>
      <h2>Ce sunt cookies-urile</h2>
      <p>Fișiere mici stocate în browser care permit recunoașterea unui utilizator la vizite ulterioare și funcționarea normală a site-ului.</p>
      <h2>Tipuri folosite pe acest site</h2>
      <ul>
        <li><strong>Esențiale</strong> — sesiune și preferințe tehnice. Nu pot fi dezactivate.</li>
        <li><strong>Analitice (opționale)</strong> — statistici de utilizare anonime. Puteți op-ta să le respingeți din banner-ul de cookies.</li>
        <li><strong>Publicitare</strong> — NU folosim. Acest site NU are cookies de tracking sau retargeting.</li>
      </ul>
      <h2>Cum gestionați</h2>
      <p>Din setarile browserului vă puteți gestiona consimțământul și șterge cookies stocate.</p>
      <h2>Contact</h2>
      <p><a href="mailto:contact@chirurgia-intima.com">contact@chirurgia-intima.com</a></p>
    </div>
  );
}
