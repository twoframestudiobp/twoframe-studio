import React from "react";
import { siteConfig } from "@/lib/site-config";

interface JsonLdProps {
  data?: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  // Default Organization & ProfessionalService schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: siteConfig.logo,
    image: siteConfig.ogImage,
    description: siteConfig.defaultDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: "Magyarország",
    },
    knowsAbout: [
      "Koncertfotózás",
      "Rendezvényfotózás",
      "Márkavideók és Reklámfilm",
      "Portréfotózás",
      "Kreatív vizuális tartalomgyártás",
      "Social media tartalom",
    ],
    founder: {
      "@type": "Person",
      name: siteConfig.creator,
      jobTitle: "Alapító & Kreatív Igazgató",
    },
  };

  const schemaToRender = data || defaultSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
    />
  );
}
