import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = { title: "Blog", description: "Articole educaționale despre chirurgia intimă masculină, recuperare, mit vs realitate." };

export default function Page() {
  return (
    <div className="container-narrow py-12">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Blog", url:"/blog"}]} />
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
