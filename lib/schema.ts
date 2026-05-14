import { SITE } from "./site";
import type { Procedure } from "./proceduri";

const PHYSICIAN_ID = `${SITE.url}/#physician-diana`;
const CLINIC_ID = `${SITE.url}/#clinic`;
const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

function parsePriceEUR(cost: string): number | null {
  // "3.200 EUR" → 3200, "1.500 EUR" → 1500, "La consultație" → null
  const m = cost.match(/(\d{1,3}(?:[.,]\d{3})?)\s*EUR/);
  if (!m) return null;
  return parseInt(m[1].replace(/[.,]/g, ""), 10);
}

export function getPhysicianSchema() {
  return {
    "@type": ["Physician", "Person"],
    "@id": PHYSICIAN_ID,
    name: SITE.physician.name,
    legalName: SITE.physician.legalName,
    jobTitle: SITE.physician.jobTitle,
    image: {
      "@type": "ImageObject",
      url: `${SITE.url}${SITE.physician.image}`,
      width: 1200,
      height: 1200
    },
    url: `${SITE.url}/despre`,
    telephone: SITE.phone,
    email: SITE.email,
    gender: "Female",
    medicalSpecialty: ["PlasticSurgery", "Reconstructive Microsurgery", "Aesthetic Surgery"],
    knowsAbout: SITE.physician.knowsAbout,
    sameAs: SITE.physician.sameAs,
    alumniOf: [
      { "@type": "Organization", name: "International Society of Aesthetic Plastic Surgery (ISAPS)", url: "https://www.isaps.org/" }
    ],
    memberOf: [
      { "@type": "Organization", name: "ISAPS", url: "https://www.isaps.org/" },
      { "@type": "Organization", name: "Colegiul Medicilor din România", url: "https://www.cmr.ro/" }
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Medic specialist Chirurgie Plastică, Estetică și Microchirurgie Reconstructivă" }
    ],
    worksFor: { "@id": CLINIC_ID },
    description: `Medic specialist Chirurgie Plastică, Estetică și Microchirurgie Reconstructivă cu peste ${SITE.trust.yearsExperience} ani experiență, membră ISAPS, autoare a peste ${SITE.trust.proceduresPerformed} proceduri intime în portofoliu.`
  };
}

export function getClinicSchema() {
  return {
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    name: SITE.clinic.name,
    url: SITE.url,
    telephone: SITE.clinic.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.clinic.streetAddress,
      addressLocality: SITE.clinic.addressLocality,
      addressRegion: SITE.clinic.addressRegion,
      postalCode: SITE.clinic.postalCode,
      addressCountry: SITE.clinic.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.clinic.geo.lat,
      longitude: SITE.clinic.geo.lng
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" }
    ],
    employee: { "@id": PHYSICIAN_ID },
    medicalSpecialty: ["PlasticSurgery", "Aesthetic Surgery"],
    paymentAccepted: ["Cash", "Credit Card", "TBI Bank Financing"],
    currenciesAccepted: ["RON", "EUR"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.trust.rating,
      reviewCount: SITE.trust.reviewCount,
      bestRating: 5,
      worstRating: 1
    }
  };
}

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png`, width: 600, height: 60 },
    sameAs: SITE.physician.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "RO",
      availableLanguage: ["Romanian", "English"]
    },
    founder: { "@id": PHYSICIAN_ID },
    parentOrganization: { "@id": CLINIC_ID }
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "ro-RO",
    publisher: { "@id": ORG_ID }
  };
}

export function getProcedureSchema(procedure: Procedure) {
  const priceEUR = parsePriceEUR(procedure.cost);
  const schema: any = {
    "@type": "MedicalProcedure",
    "@id": `${SITE.url}/proceduri/${procedure.slug}#procedure`,
    name: procedure.title,
    alternateName: procedure.alternateName || [],
    procedureType: procedure.procedureType,
    bodyLocation: procedure.bodyLocation,
    description: procedure.shortDescription,
    howPerformed: procedure.procedureSteps.map((s) => `${s.title}: ${s.description}`).join(" "),
    preparation: "Analize preoperatorii, oprire fumat 4 săptămâni pre-op, oprire anticoagulante 7 zile pre-op (la indicație).",
    followup: "Control la 7 zile, 1 lună, 3 luni și 6 luni post-procedură.",
    expectedPrognosis: procedure.shortDescription,
    indication: procedure.whenIndicated.map((i) => ({ "@type": "MedicalIndication", name: i })),
    contraindication: procedure.whenNotIndicated,
    status: "ApprovedTreatment",
    performer: { "@id": PHYSICIAN_ID },
    study: procedure.citations.map((c) => ({ "@type": "MedicalStudy", name: c.source, url: c.url })),
    url: `${SITE.url}/proceduri/${procedure.slug}`
  };
  // Add offer with price only if we have a real EUR amount
  if (priceEUR) {
    schema.offers = {
      "@type": "Offer",
      price: priceEUR,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      seller: { "@id": PHYSICIAN_ID },
      url: `${SITE.url}/proceduri/${procedure.slug}`
    };
  }
  return schema;
}

export function getFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url
    }))
  };
}

export function getSpeakableSchema() {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: [".lead", ".facts", ".faq-answer"]
  };
}

export function getMedicalWebPageSchema(opts: {
  name: string;
  description: string;
  url: string;
  speakable?: boolean;
}) {
  return {
    "@type": "MedicalWebPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: "ro-RO",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PHYSICIAN_ID },
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    lastReviewed: new Date().toISOString().split("T")[0],
    reviewedBy: { "@id": PHYSICIAN_ID },
    ...(opts.speakable ? { speakable: getSpeakableSchema() } : {})
  };
}

export function buildGraph(items: any[]) {
  return {
    "@context": "https://schema.org",
    "@graph": items
  };
}
