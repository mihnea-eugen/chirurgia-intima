import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Genitoplastie București, Dr. Diana Gheorghiță | M+F",
  description: "Genitoplastie pentru bărbați și femei în București, Dr. Diana Gheorghiță. Faloplastie, circumcizie, fimoză, labioplastie, perineorafie, himenoplastie. Membră ISAPS."
};

export default function GenitoplastiePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <div className="text-xs uppercase tracking-widest text-[var(--color-brand-gold-deep)] mb-4">Specialitate</div>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
        Genitoplastie pentru bărbați și femei
      </h1>
      <p className="text-lg text-zinc-700 leading-relaxed mb-6 max-w-3xl">
        Genitoplastia înseamnă chirurgia organelor genitale, atât pentru bărbați (faloplastie, circumcizie, fimoză, P-Shot, extracție corpi străini), cât și pentru femei (labioplastie, perineorafie, himenoplastie, G-Shot).
      </p>
      <p className="text-lg text-zinc-700 leading-relaxed mb-8 max-w-3xl">
        Dr. Diana Gheorghiță, medic chirurg plastic specializat în genitoplastie pentru ambele sexe, peste 10 ani experiență, clinică privată acreditată din București.
      </p>
      <div className="flex flex-wrap gap-4 items-center">
        <Link href="/proceduri" className="btn btn-primary">
          Vezi toate procedurile
        </Link>
        <Link href="/programare" className="btn btn-outline">
          Programare consultație
        </Link>
      </div>
    </div>
  );
}
