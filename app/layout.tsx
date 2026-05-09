import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaGraph from "@/components/SchemaGraph";
import { getPhysicianSchema, getClinicSchema, getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const lora = Lora({ subsets: ["latin", "latin-ext"], variable: "--font-lora", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: "%s | Dr. Diana Gheorghiță" },
  description: SITE.description,
  applicationName: SITE.shortName,
  authors: [{ name: SITE.physician.name, url: `${SITE.url}/despre` }],
  keywords: ["chirurgie intimă masculină", "faloplastie București", "alungire penis", "circumcizie adulți", "boala Peyronie", "Dr. Diana Gheorghiță"],
  alternates: { canonical: SITE.url },
  openGraph: { type: "website", locale: SITE.locale, url: SITE.url, siteName: SITE.shortName, title: SITE.name, description: SITE.description, images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }] },
  twitter: { card: "summary_large_image", title: SITE.name, description: SITE.description },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1F4E79" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const graphItems = [getOrganizationSchema(), getClinicSchema(), getPhysicianSchema(), getWebSiteSchema()];
  return (
    <html lang="ro" className={`${inter.variable} ${lora.variable}`}>
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
