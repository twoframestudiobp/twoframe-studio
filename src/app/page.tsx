import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "TwoFrame Studio — Vizuális Tartalom Előadóknak és Márkáknak",
      },
    ],
  },
};

const services = [
  {
    num: "01",
    label: "Live & Events",
    title: "Koncertek és Események",
    desc: "Színpadi energiák, backstage pillanatok és magával ragadó aftermovie-k.",
    href: "/szolgaltatasok#live-events",
    query: "concert",
  },
  {
    num: "02",
    label: "Brands & Commercial",
    title: "Márkák és Kampányok",
    desc: "Filmes hatású imázsvideók és social kampányok a konverziók növeléséért.",
    href: "/szolgaltatasok#brands-commercial",
    query: "commercial",
  },
  {
    num: "03",
    label: "Portré & Editorial",
    title: "Portré és Editorial",
    desc: "Erőteljes, letisztult portrék előadóknak, lemezborítókra és sajtóanyagokhoz.",
    href: "/szolgaltatasok#portrait-editorial",
    query: "portrait",
  },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);

  return (
    <div className="flex flex-col w-full">

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden pb-20 sm:pb-28">
        {/* Full-bleed background image — brighter so photography is visible */}
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source media="(max-width: 768px)" srcSet="/images/hero-mobile.webp" type="image/webp" />
          <source media="(min-width: 769px)" srcSet="/images/hero-desktop.webp" type="image/webp" />
          <img
            src="/images/hero-mobile.webp"
            alt="TwoFrame Studio — Vizuális Tartalom Előadóknak és Márkáknak"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width={400}
            height={600}
            className="w-full h-full object-cover object-center"
          />
        </picture>
        {/* Gradient: heavy bottom blend into page, lighter top to keep image visible */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#08080a] via-[#08080a]/55 to-[#08080a]/15" />

        {/* Content — anchored to bottom */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
          {/* Location tag */}
          <div className="mb-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-400 font-medium">
              TwoFrame Studio &ensp;/&ensp; Budapest
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white leading-[1.02] mb-6 max-w-4xl">
            Vizuális tartalom<br />
            <span className="text-gradient-purple">előadóknak,</span>{" "}
            eseményeknek<br className="hidden sm:inline" /> és márkáknak.
          </h1>

          {/* Supporting line + CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <p className="text-sm sm:text-base text-zinc-400 font-light max-w-sm leading-relaxed">
              Fotó, videó és kreatív tartalom,<br />
              amely azonnal megkülönbözteti a márkádat.
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/kapcsolat"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] bg-white text-zinc-950 hover:bg-violet-100 transition-all duration-300"
              >
                Kérj ajánlatot
              </Link>
              <Link
                href="/munkak"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-zinc-300 hover:text-white transition-colors group"
              >
                <span>Munkáink</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
          <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-zinc-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SELECTED WORK
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium block mb-2">
              Kiemelt projektek
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Válogatott Munkák
            </h2>
          </div>
          <Link
            href="/munkak"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors group shrink-0"
          >
            <span>Összes munka</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric 2+2 editorial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={false}
              tall={idx === 0}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — Editorial horizontal list, NOT cards
          ═══════════════════════════════════════ */}
      <section className="border-t border-white/[0.07] bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
          {/* Header */}
          <div className="mb-16">
            <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium block mb-3">
              Szakterületek
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight max-w-lg">
              Minden megbízás<br />más. Minden képkocka<br />számít.
            </h2>
          </div>

          {/* Horizontal list — editorial style */}
          <div className="divide-y divide-white/[0.07]">
            {services.map((s) => (
              <div key={s.num} className="group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-center py-8 sm:py-10">
                <span className="sm:col-span-1 text-[11px] font-mono text-zinc-600 tracking-widest group-hover:text-violet-400 transition-colors">
                  {s.num}
                </span>
                <div className="sm:col-span-3">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 font-medium">{s.label}</span>
                </div>
                <h3 className="sm:col-span-4 text-lg sm:text-xl font-light text-white group-hover:text-zinc-100 transition-colors">
                  {s.title}
                </h3>
                <p className="sm:col-span-3 text-sm text-zinc-500 font-light leading-relaxed">
                  {s.desc}
                </p>
                <div className="sm:col-span-1 flex justify-end">
                  <Link
                    href={s.href}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-zinc-400 group-hover:bg-violet-600 group-hover:border-violet-500 group-hover:text-white transition-all duration-300"
                    aria-label={`${s.title} — részletek`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Content Partnership callout — below list, not a glassy SaaS card */}
          <div className="mt-16 pt-10 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div className="max-w-lg">
              <span className="text-[11px] uppercase tracking-[0.28em] text-violet-400 font-medium block mb-3">
                Content Partnership
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
                Rendszeres vizuális tartalom,<br />minden hónapban.
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Márkáknak és előadóknak, akik folyamatos, egységes vizuális jelenlétet szeretnének — havi megállapodás alapján.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-start sm:items-end gap-3">
              <Link
                href="/kapcsolat?tipus=partnership"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300"
              >
                <span>Dolgozzunk együtt</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-[11px] text-zinc-500">Egyedi havi konstrukciók</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STUDIO STATEMENT / QUOTE
          ═══════════════════════════════════════ */}
      <section className="py-28 px-6 sm:px-8 max-w-4xl mx-auto">
        <div className="border-l-2 border-violet-500/40 pl-8">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-snug tracking-tight mb-6">
            „Nem sablonokat követünk. Olyan vizuális nyelvet teremtünk, amely megragadja a néző
            figyelmét és megkülönbözteti a márkádat."
          </blockquote>
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium">
              Szabó Barnabás &ensp;·&ensp; Alapító &amp; Kreatív Igazgató
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA
          ═══════════════════════════════════════ */}
      <section className="border-t border-white/[0.07] bg-[#060608]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-2">
              Következő projekt?
            </h2>
            <p className="text-zinc-500 text-sm font-light">
              Meséld el az elképzeléseidet. Hamarosan felvesszük a kapcsolatot.
            </p>
          </div>
          <Link
            href="/kapcsolat"
            className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300"
          >
            <span>Kérj ajánlatot</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
