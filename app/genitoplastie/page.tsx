import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Award, Activity, Scissors, Sparkles, Wrench, FlaskConical, ClipboardCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { getMedicalWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";
import SchemaGraph from "@/components/SchemaGraph";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Genitoplastie București, Dr. Diana Gheorghiță | M+F, ISAPS",
  description:
    "Genitoplastie pentru bărbați și femei în București, Dr. Diana Gheorghiță. Faloplastie, circumcizie, fimoză, labioplastie, perineorafie, himenoplastie. Membră ISAPS, peste 10 ani experiență, clinică privată acreditată.",
  alternates: { canonical: `${SITE.url}/genitoplastie` },
  openGraph: {
    title: "Genitoplastie București, Dr. Diana Gheorghiță",
    description:
      "Specialista în genitoplastie pentru bărbați și femei. Faloplastie, circumcizie, labioplastie, perineorafie, himenoplastie, P-Shot, G-Shot.",
    url: `${SITE.url}/genitoplastie`,
    type: "article"
  }
};

const masculin = [
  { slug: "alungire-penis", title: "Alungire chirurgicală", subtitle: "Faloplastie, câștig 2-5 cm", icon: Activity },
  { slug: "ingrosare-lipofilling", title: "Îngroșare cu lipofilling", subtitle: "Grăsime proprie, permanent", icon: Sparkles },
  { slug: "ingrosare-acid-hialuronic", title: "Augmentare acid hialuronic", subtitle: "Reversibil 12-24 luni", icon: FlaskConical },
  { slug: "fimoza", title: "Fimoza la adulți", subtitle: "Tratament conservator + chirurgical", icon: Wrench },
  { slug: "circumcizie", title: "Circumcizie", subtitle: "Anestezie locală, externare aceeași zi", icon: Scissors },
  { slug: "p-shot-prp", title: "P-Shot, plasmă proprie penis", subtitle: "Tratament regenerativ", icon: Activity },
  { slug: "extractie-kanamicina", title: "Extracție corpi străini", subtitle: "Kanamicină, silicon, vaselină", icon: Wrench }
];

const feminin = [
  { slug: "labioplastie", title: "Labioplastie", subtitle: "Reducere labii mici, rezecție în pană", icon: Sparkles },
  { slug: "perineorafie", title: "Perineorafie", subtitle: "Refacere perineu post-naștere", icon: Wrench },
  { slug: "himenoplastie", title: "Himenoplastie", subtitle: "Refacere himen, discreție GDPR", icon: Scissors },
  { slug: "augmentare-punct-g", title: "Augmentare punctul G", subtitle: "G-Shot, acid hialuronic sau grăsime", icon: FlaskConical }
];

export default function GenitoplastiePage() {
  const breadcrumbs = [
    { name: "Acasă", url: `${SITE.url}/` },
    { name: "Genitoplastie", url: `${SITE.url}/genitoplastie` }
  ];

  return (
    <>
      <SchemaGraph
        items={[
          getMedicalWebPageSchema({
            name: "Genitoplastie București, Dr. Diana Gheorghiță",
            description:
              "Genitoplastie masculină și feminină în București. Faloplastie, circumcizie, fimoză, labioplastie, perineorafie, himenoplastie, P-Shot, G-Shot.",
            url: `${SITE.url}/genitoplastie`,
            speakable: true
          }),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        {/* HERO */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-widest text-[var(--color-brand-gold-deep)] mb-4">Specialitate</div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Genitoplastie pentru bărbați și femei
            </h1>
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              Genitoplastia înseamnă chirurgia organelor genitale: reconstrucție, augmentare, corecție funcțională și estetică. Acoperă atât intervențiile pentru bărbați (faloplastie, circumcizie, fimoză, P-Shot, extracție corpi străini), cât și pentru femei (labioplastie, perineorafie, himenoplastie, G-Shot, augmentare punctul G).
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mb-8">
              Dr. Diana Gheorghiță este unul dintre puținii medici chirurgi plastici din România care operează ambele sexe pentru proceduri intime, cu peste 10 ani de practică continuă în clinică privată acreditată din București.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/programare" className="btn btn-primary">
                <ClipboardCheck className="w-4 h-4" /> Programare consultație
              </Link>
              <a href={`tel:${SITE.phone}`} className="btn btn-outline tabular-nums">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ImagePlaceholder
              label="Hero: Genitoplastie M+F"
              hint="Sugestie: ilustrație vectorială cu cele două categorii (M și F), paletă navy/gold. Sau foto editorial clinică."
              ratio="4/5"
              variant="navy"
            />
          </div>
        </div>

        {/* CE INSEAMNĂ */}
        <div className="bg-[var(--color-brand-cream)] rounded-2xl p-8 sm:p-12 mb-16 border border-zinc-200">
          <h2 className="font-display text-3xl mb-6 text-[var(--color-brand-navy)]">Ce înseamnă genitoplastia</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-[var(--color-brand-navy)]">Definiție clinică</h3>
              <p className="text-zinc-700 leading-relaxed">
                Genitoplastia (greacă: <em>genitus</em> + <em>plassein</em>, modelare) cuprinde toate intervențiile chirurgicale și non-chirurgicale care vizează corectarea, reconstrucția sau augmentarea organelor genitale externe. Se realizează atât pentru indicații medicale (fimoză, distensie post-naștere, dispareunie), cât și estetice sau de îmbunătățire funcțională.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-[var(--color-brand-navy)]">Pentru cine</h3>
              <p className="text-zinc-700 leading-relaxed">
                Pentru bărbați și femei adulți, peste 18 ani, motivați și informați. Fiecare procedură presupune consultație inițială cu examinare clinică, măsurători, discuție anatomică, așteptări realiste și protocol post-operator personalizat. Toate intervențiile se efectuează cu consimțământ informat detaliat și protocol GDPR strict.
              </p>
            </div>
          </div>
        </div>

        {/* GENITOPLASTIE MASCULINĂ */}
        <div className="mb-16">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="font-display text-3xl text-[var(--color-brand-navy)]">Genitoplastie masculină</h2>
            <span className="text-sm text-zinc-500">{masculin.length} proceduri</span>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-8 max-w-2xl">
            Faloplastie, lipofilling, augmentare cu acid hialuronic, circumcizie, fimoză, P-Shot și extracție corpi străini intrapenieni.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {masculin.map((p) => { const Icon = p.icon; return (
              <Link
                key={p.slug}
                href={`/proceduri/${p.slug}`}
                className="group rounded-xl bg-white border border-zinc-200 p-5 no-underline hover:border-[var(--color-brand-gold)] transition-colors"
              >
                <Icon className="w-8 h-8 text-[var(--color-brand-gold)] mb-3" />
                <div className="font-semibold text-[var(--color-brand-navy)] mb-1">{p.title}</div>
                <div className="text-sm text-zinc-600 mb-3">{p.subtitle}</div>
                <div className="inline-flex items-center gap-1 text-xs text-zinc-500 group-hover:text-[var(--color-brand-gold-deep)]">
                  Vezi detalii <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            )})}
          </div>
        </div>

        {/* GENITOPLASTIE FEMININĂ */}
        <div className="mb-16">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="font-display text-3xl text-[var(--color-brand-navy)]">Genitoplastie feminină</h2>
            <span className="text-sm text-zinc-500">{feminin.length} proceduri</span>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-8 max-w-2xl">
            Labioplastie wedge, perineorafie post-naștere, himenoplastie și G-Shot. Protocol GDPR strict pentru toate procedurile.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {feminin.map((p) => { const Icon = p.icon; return (
              <Link
                key={p.slug}
                href={`/proceduri/${p.slug}`}
                className="group rounded-xl bg-white border border-zinc-200 p-5 no-underline hover:border-[var(--color-brand-gold)] transition-colors"
              >
                <Icon className="w-8 h-8 text-[var(--color-brand-gold)] mb-3" />
                <div className="font-semibold text-[var(--color-brand-navy)] mb-1">{p.title}</div>
                <div className="text-sm text-zinc-600 mb-3">{p.subtitle}</div>
                <div className="inline-flex items-center gap-1 text-xs text-zinc-500 group-hover:text-[var(--color-brand-gold-deep)]">
                  Vezi detalii <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            )})}
          </div>
        </div>

        {/* TRUST */}
        <div className="bg-[var(--color-brand-navy)] rounded-2xl p-8 sm:p-12 mb-16 text-white">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-10 h-10 text-[var(--color-brand-gold)] flex-shrink-0" />
              <div>
                <div className="font-display text-2xl mb-1">{SITE.trust.yearsExperience}+ ani</div>
                <div className="text-sm text-white/70">Practică continuă, clinică privată acreditată din București</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="w-10 h-10 text-[var(--color-brand-gold)] flex-shrink-0" />
              <div>
                <div className="font-display text-2xl mb-1">Membră ISAPS</div>
                <div className="text-sm text-white/70">International Society of Aesthetic Plastic Surgery</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Activity className="w-10 h-10 text-[var(--color-brand-gold)] flex-shrink-0" />
              <div>
                <div className="font-display text-2xl mb-1">{SITE.trust.proceduresPerformed}+ proceduri</div>
                <div className="text-sm text-white/70">Genitoplastie efectuată în portofoliu</div>
              </div>
            </div>
          </div>
        </div>

        <CTABanner />
      </div>
    </>
  );
}
