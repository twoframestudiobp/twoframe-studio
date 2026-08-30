import React from "react";
import { siteConfig } from "@/lib/site-config";

interface JsonLdProps {
  data?: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  // Default Organization, WebSite & ProfessionalService schema for AI agents & search engines
  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.defaultDescription,
        inLanguage: "hu-HU",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: siteConfig.logo,
        image: siteConfig.ogImage,
        description: siteConfig.defaultDescription,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressCountry: siteConfig.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 47.4979,
          longitude: 19.0402,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Magyarország",
          },
          {
            "@type": "City",
            name: "Budapest",
          },
        ],
        knowsAbout: [
          "Koncertfotózás",
          "Fesztivál aftermovie",
          "Színpadi fényshow rögzítés",
          "Márkakampány fotózás",
          "Lookbook és divatfotózás",
          "Portré és editorial fotózás",
          "Rövid formátumú social videók",
        ],
        founder: {
          "@type": "Person",
          name: siteConfig.creator,
          jobTitle: "Alapító & Kreatív Igazgató",
          url: `${siteConfig.url}/rolam`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "TwoFrame Studio Szolgáltatások",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Live & Events — Koncert- és eseményfotózás / videózás",
                description: "Színpadi energiák, backstage dokumentáció és 4K aftermovie készítés.",
                url: `${siteConfig.url}/szolgaltatasok#live-events`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial & Brands — Márka- és kampánytartalom",
                description: "Filmes hatású imázsvideók, lookbook fotózás és social tartalomgyártás.",
                url: `${siteConfig.url}/szolgaltatasok#brands-commercial`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Portré & Editorial — Előadói és karakterportrék",
                description: "Karakteres stúdió- és külső helyszíni portrék előadóknak, lemezborítókra és sajtóba.",
                url: `${siteConfig.url}/szolgaltatasok#portrait-editorial`,
              },
            },
          ],
        },
      },
    ],
  };

  const schemaToRender = data || defaultSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
    />
  );
}
