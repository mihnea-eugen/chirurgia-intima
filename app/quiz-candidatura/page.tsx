import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = { title: "Quiz candidatură", description: "Quiz candidatură pentru proceduri intime masculine. Evaluare anonimă cu raport personalizat." };

export default function Page() {
  return (
    <div className="container-narrow py-12">
      <Breadcrumbs items={[{name:"Acasă", url:"/"},{name:"Quiz candidatură", url:"/quiz-candidatura"}]} />
      <h1 className="font-display">Quiz candidatură</h1>
      <p className="lead text-zinc-700 mt-2">Quiz interactiv 12-16 întrebări care evaluează candidatura pentru fiecare procedură și generează un raport personalizat cu cost estimat, recuperare și plan finanțare.</p>
      <div className="bg-[var(--color-brand-cream)] border border-zinc-200 rounded-xl p-6 mt-8">
        <h3 className="font-display text-xl">În construcție</h3>
        <p className="text-zinc-700 mt-2">Quiz-ul lansabil în lunile următoare. Până atunci, contactați-ne direct pentru evaluare individuală.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/programare" className="btn btn-primary">Programare consultație</Link>
          <Link href="/proceduri" className="btn btn-outline">Toate procedurile</Link>
        </div>
      </div>
      <CTABanner />
    </div>
  );
}
