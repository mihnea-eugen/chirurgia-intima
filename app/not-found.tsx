import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-narrow py-20 text-center">
      <div className="text-6xl font-display font-semibold text-[var(--color-brand-navy)] mb-2">404</div>
      <h1 className="font-display">Pagina nu a fost găsită</h1>
      <p className="text-zinc-700 mb-6">Pagina pe care o cauți nu există sau a fost mutată.</p>
      <div className="flex justify-center gap-3 flex-wrap">
        <Link href="/" className="btn btn-primary">Acasă</Link>
        <Link href="/proceduri" className="btn btn-outline">Toate procedurile</Link>
      </div>
    </div>
  );
}
