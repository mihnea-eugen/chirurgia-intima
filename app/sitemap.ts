import type { MetadataRoute } from "next";
import { proceduri } from "@/lib/proceduri";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: today, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/proceduri`, lastModified: today, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE.url}/despre`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/de-ce-medic-femeie`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/clinica-pogany`, lastModified: today, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE.url}/discretie`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/programare`, lastModified: today, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE.url}/preturi`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/contact`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/quiz-candidatura`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/intrebari-frecvente`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/dictionar-termeni`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.6 }
  ];
  const procedurePages: MetadataRoute.Sitemap = proceduri.map((p) => ({
    url: `${SITE.url}/proceduri/${p.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 1.0
  }));
  return [...staticPages, ...procedurePages];
}
