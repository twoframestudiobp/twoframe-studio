import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Rólam — Szabó Barnabás Kreatív Igazgató",
  description:
    "Szabó Barnabás, a TwoFrame Studio alapítója és kreatív igazgatója. Vizuális történetmesélés, modern tartalomkészítés és tartós kreatív partnerségek.",
  alternates: { canonical: "/rolam" },
  openGraph: {
    title: "Rólam — Szabó Barnabás Kreatív Igazgató | TwoFrame Studio",
    description:
      "Szabó Barnabás, a TwoFrame Studio alapítója és kreatív igazgatója. Vizuális történetmesélés, modern tartalomkészítés és tartós kreatív partnerségek.",
    url: `${siteConfig.url}/rolam`,
    images: [
      {
        url: `${siteConfig.url}/portfolio/portrait/IMG_4579.webp`,
        width: 1200,
        height: 630,
        alt: "Szabó Barnabás — TwoFrame Studio",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Two-column editorial profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-28">
        {/* Left: Portrait Image */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-900" style={{ borderRadius: "3px" }}>
            <Image
              src="/portfolio/portrait/IMG_4579.webp"
              alt="Szabó Barnabás — TwoFrame Studio Alapító & Kreatív Igazgató"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-400 font-medium block mb-1">
                Alapító &amp; Kreatív Igazgató
              </span>
              <h2 className="text-xl font-light text-white">
                Szabó Barnabás
              </h2>
            </div>
          </div>
        </div>

        {/* Right: Statement */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium">
            Rólam
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1]">
            Vizuális történetmesélés kompromisszumok nélkül.
          </h1>

          <div className="space-y-4 text-zinc-400 font-light text-base leading-relaxed max-w-lg">
            <p>
              A <strong className="text-white font-normal">TwoFrame Studio</strong>-t azzal a vízióval
              hoztam létre, hogy a zenei szféra nyers energiáját és a modern márkavilág
              kifinomult esztétikáját ötvözzük.
            </p>
            <p>
              Akár egy aréna koncert fellépéséről, akár egy feltörekvő
              ruhamárka kampányáról van szó — a célunk mindig
              ugyanaz: olyan anyagokat alkotni, amelyek azonnal megragadják a figyelmet és
              hosszú távon építik a brand értékét.
            </p>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex items-center gap-4">
            <Link
              href="/kapcsolat"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300"
            >
              <span>Vedd fel a kapcsolatot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/munkak"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              <span>Munkáink</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Workflow / How We Work — clean editorial 4-step */}
      <div className="pt-16 border-t border-white/[0.07]">
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium block mb-3">
            Hogyan dolgozunk
          </span>
          <h3 className="text-2xl sm:text-3xl font-light text-white">
            A koncepciótól a kész kampányig.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              num: "01",
              title: "Koncepció",
              desc: "Megértjük az előadó vagy márka céljait, moodboardot és forgatási tervet készítünk.",
            },
            {
              num: "02",
              title: "Forgatás & Fotózás",
              desc: "Professzionális kamerákkal és határozott rendezéssel rögzítjük az anyagot.",
            },
            {
              num: "03",
              title: "Color Grading & Edit",
              desc: "Egyedi filmes színkorrekció, precíz retusálás és ritmikus vágás.",
            },
            {
              num: "04",
              title: "Átadás",
              desc: "Többféle felbontásban, social-ready formátumokban, azonnali publikálásra készen.",
            },
          ].map((step) => (
            <div key={step.num} className="flex flex-col gap-3">
              <span className="text-[11px] font-mono text-violet-400/70 tracking-widest">
                {step.num}
              </span>
              <h4 className="text-sm font-medium text-white">{step.title}</h4>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
