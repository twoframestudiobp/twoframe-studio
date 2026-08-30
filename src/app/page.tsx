import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import ProjectCard from "@/components/ProjectCard";
import AnimatedHeroLogo from "@/components/AnimatedHeroLogo";
import { ArrowRight, ArrowUpRight, Sparkles, Users, Camera, Film } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TwoFrame Studio — Vizuális Tartalom Előadóknak, Eseményeknek és Márkáknak",
  description:
    "Koncertfotózás, aftermovie videók, márkakampányok és havi Content Partnership együttműködések Budapestről. Professzionális vizuális megoldások előadóknak és rendezvényeknek.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col min-h-screen">
      {/* ═══════════════════════════════════════
          HERO SECTION — Two-column layout with Animated TwoFrame Logo
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center px-6 sm:px-8 pb-16 pt-32 max-w-7xl mx-auto w-full">
        {/* Ambient subtle glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col animate-fade-in z-10">
            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 text-[11px] font-mono tracking-wider uppercase mb-8 w-max">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Elérhető új projektekre • 2026</span>
            </div>

            {/* Main Statement Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.08] mb-8">
              Vizuális tartalom <br />
              <span className="text-zinc-400 font-normal">előadóknak, eseményeknek</span> <br />
              és márkáknak.
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 font-light max-w-xl leading-relaxed mb-10">
              Koncertfotózás, turnéfilmek, kreatív portrék és márkaépítés.
              Olyan képkockák, amelyek megőrzik a pillanat nyers energiáját.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/munkak"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
              >
                <span>Munkák megtekintése</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/kapcsolat"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-medium uppercase tracking-[0.22em] border border-white/15 text-white hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300"
              >
                <span>Kapcsolatfelvétel</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Animated Dual-Frame Logo */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end animate-fade-in">
            <AnimatedHeroLogo />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
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
          SERVICES — Editorial horizontal list
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
              <div key={s.id} className="group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-center py-8 sm:py-10">
                <span className="sm:col-span-1 text-[11px] font-mono text-zinc-600 tracking-widest group-hover:text-violet-400 transition-colors">
                  {s.number}
                </span>
                <div className="sm:col-span-3">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 font-medium">{s.title}</span>
                </div>
                <h3 className="sm:col-span-4 text-lg sm:text-xl font-light text-white group-hover:text-zinc-100 transition-colors">
                  {s.tagline}
                </h3>
                <p className="sm:col-span-3 text-sm text-zinc-500 font-light leading-relaxed">
                  {s.description.slice(0, 110)}...
                </p>
                <div className="sm:col-span-1 flex justify-end">
                  <Link
                    href={`/szolgaltatasok#${s.id}`}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-zinc-400 group-hover:bg-violet-600 group-hover:border-violet-500 group-hover:text-white transition-all duration-300"
                    aria-label={`${s.title} — részletek`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Content Partnership callout */}
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
          TWOFRAME AGENCY — Model & Talent Division Showcase
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-purple-950/30 via-[#0e0e14] to-[#08080a] border border-purple-800/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/50 text-purple-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Márkadivízió · TwoFrame Agency</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                Arcok. Karakterek. <br />
                <span className="text-purple-300 font-normal">Lehetőségek.</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-xl">
                A <strong>TwoFrame Agency</strong> a TwoFrame Studio modell- és talentképviseleti divíziója. Összekapcsoljuk a tehetségek menedzsmentjét a prémium vizuális tartalomgyártással.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <Users className="w-4 h-4 text-purple-400 mb-1.5" />
                  <div className="text-xs font-medium text-white">Modellképviselet</div>
                  <div className="text-[10px] text-zinc-400">Fashion &amp; Commercial</div>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <Camera className="w-4 h-4 text-purple-400 mb-1.5" />
                  <div className="text-xs font-medium text-white">Portfóliógyártás</div>
                  <div className="text-[10px] text-zinc-400">TwoFrame Stúdió háttér</div>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <Film className="w-4 h-4 text-purple-400 mb-1.5" />
                  <div className="text-xs font-medium text-white">Célzott Casting</div>
                  <div className="text-[10px] text-zinc-400">Márkáknak &amp; Stáboknak</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://twoframestudiobp.github.io/twoframe-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] bg-purple-600 hover:bg-purple-500 text-white transition-all duration-300 shadow-lg shadow-purple-950/50"
                >
                  <span>TwoFrame Agency megnyitása</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-purple-900/30 text-center space-y-4">
                <div className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
                  TWOFRAME ÖKOSZISZTÉMA
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">
                  Studio + Agency
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  A kreatív vizuális tartalomgyártás és a professzionális karakterképviselet egyetlen integrált rendszerben.
                </p>
                <div className="pt-2">
                  <span className="text-[10px] text-purple-300 font-mono px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40">
                    twoframe-agency.hu / agency.twoframe.hu
                  </span>
                </div>
              </div>
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
