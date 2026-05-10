import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "Blog", description: "Articole educaționale despre chirurgia intimă masculină, recuperare, mit vs realitate." };

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Blog", url:"/blog"}]} />

      <div className="mt-8 mb-12 lg:mb-16">
        <ImagePlaceholder
          label="Hero — Blog"
          hint="Sugestie: ilustrație concept cu pen + pagini + lupă pe text medical, paletă navy/gold. Sau foto editorial cu medic + caiet + cărți medicale."
          ratio="21/9"
          variant="navy"
        />
      </div>

      <h1 className="font-display">Blog</h1>
      <p className="lead text-zinc-700 mt-2">Articole educaționale despre chirurgia intimă masculină. Calendar editorial 30+ articole în primele 90 zile lansare. Lansare iminentă.</p>
      <div className="bg-[var(--color-brand-cream)] border border-zinc-200 rounded-xl p-6 mt-8">
        <h3 className="font-display text-xl">Până atunci</h3>
        <p className="text-zinc-700 mt-2">Pentru informații detaliate despre fiecare procedură cu cifre, FAQ și citare științifică, vezi paginile dedicate.</p>
        <Link href="/proceduri" className="btn btn-primary mt-4 inline-flex">Toate procedurile</Link>
      </div>
      <CTABanner />
    </div>
  );
}
