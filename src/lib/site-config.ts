/**
 * ============================================================================
 * TWOFRAME STUDIO - SITE CONFIGURATION & SEO CONSTANTS
 * ============================================================================
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://twoframe.hu";

export const siteConfig = {
  name: "TwoFrame Studio",
  shortName: "TwoFrame",
  legalName: "TwoFrame Studio",
  url: SITE_URL,
  ogImage: `${SITE_URL}/portfolio/live/IMG_4565.webp`,
  logo: `${SITE_URL}/logo.png`,
  email: "kapcsolat@twoframe.hu",
  phone: "+36 70 516 8766",
  locale: "hu_HU",
  language: "hu",
  city: "Budapest",
  country: "Magyarország",
  countryCode: "HU",
  defaultTitle: "TwoFrame Studio | Fotó, videó és vizuális tartalom",
  titleTemplate: "%s | TwoFrame Studio",
  defaultDescription:
    "Koncert-, esemény-, portré- és brand fotózás, valamint kreatív vizuális tartalom előadóknak, eseményeknek és márkáknak Budapesten és országosan.",
  keywords: [
    "TwoFrame Studio",
    "koncertfotózás",
    "rendezvényfotózás",
    "eseményfotózás",
    "koncertfotós Budapest",
    "rendezvényfotós",
    "portréfotózás",
    "előadói promófotózás",
    "brand fotózás",
    "commercial fotózás",
    "üzleti fotózás",
    "vizuális tartalomgyártás",
    "social media tartalomgyártás",
    "videós tartalom",
    "aftermovie készítés",
    "Budapest kreatív stúdió",
  ],
  creator: "Szabó Barnabás",
};
