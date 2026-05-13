import type { Metadata, Viewport } from "next";
import { Inter_Tight, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaGraph from "@/components/SchemaGraph";
import {
  getPhysicianSchema,
  getClinicSchema,
  getOrganizationSchema,
  getWebSiteSchema
} from "@/lib/schema";
import { SITE } from "@/lib/site";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: "%s | Dr. Diana Gheorghiță"
  },
  description: SITE.description,
  applicationName: SITE.shortName,
  authors: [{ name: SITE.physician.name, url: `${SITE.url}/despre` }],
  generator: "Next.js",
  keywords: [
    "genitoplastie", "genitoplastie masculină", "genitoplastie feminină",
    "faloplastie București",
    "alungire penis chirurgicală",
    "îngroșare penis",
    "circumcizie adulți",
    "extracție kanamicina",
    "Dr. Diana Gheorghiță"
  ],
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.shortName,
    title: SITE.name,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    site: SITE.twitter
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2E4F"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const graphItems = [
    getOrganizationSchema(),
    getClinicSchema(),
    getPhysicianSchema(),
    getWebSiteSchema()
  ];
  return (
    <html lang="ro" className={`${interTight.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <SchemaGraph items={graphItems} />
      </head>
      <body>
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
