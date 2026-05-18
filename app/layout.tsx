import type { Metadata, Viewport } from "next";
import Script from "next/script";
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

const GA_ID = "G-793GEPJ7LD";

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
  verification: {
    google: "zZK3pYvkJsIcSDWYyCVu7znw4TxkG5wpEO1XeNaNhZc"
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2A3142"
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <SchemaGraph items={graphItems} />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
