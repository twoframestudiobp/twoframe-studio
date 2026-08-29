import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Munkák — Válogatott Fotó & Videó Projektek",
  description:
    "Koncertek, turnék, márkaanyagok és karakteres portrésorozatok. Tekintsd meg a TwoFrame Studio válogatott vizuális munkáit és esettanulmányait.",
  alternates: {
    canonical: "/munkak",
  },
  openGraph: {
    title: "Munkák — Válogatott Fotó & Videó Projektek | TwoFrame Studio",
    description:
      "Koncertek, turnék, márkaanyagok és karakteres portrésorozatok. Tekintsd meg a TwoFrame Studio válogatott vizuális munkáit és esettanulmányait.",
    url: `${siteConfig.url}/munkak`,
    images: [
      {
        url: `${siteConfig.url}/portfolio/live/IMG_4565.webp`,
        width: 1200,
        height: 630,
        alt: "TwoFrame Studio — Portfólió és Esettanulmányok",
      },
    ],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
