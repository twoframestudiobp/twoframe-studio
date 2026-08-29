"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Camera,
  Film,
  Zap,
  Repeat,
  CheckCircle2,
} from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Lightbox from "@/components/Lightbox";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 sm:px-8">
        {/* Background Visual Area */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/IMG_4565.webp"
            alt="TwoFrame Studio Live Visual"
            fill
            priority
            className="object-cover object-center scale-105 filter brightness-[0.32] contrast-[1.08]"
          />
          {/* Gradients to blend with near-black page background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/60 to-[#08080a]/40" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#08080a]/50 to-[#08080a]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Subtle Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-medium">
              TwoFrame Studio • Budapest
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.1] mb-6 max-w-4xl">
            Vizuális tartalom <br className="hidden sm:inline" />
            <span className="text-gradient-purple font-medium">
              előadóknak, eseményeknek
            </span>{" "}
            és márkáknak.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-zinc-300 font-light max-w-2xl leading-relaxed mb-10">
            Fotó, videó és kreatív tartalom, amely nem csak jól néz ki — hanem{" "}
            <span className="text-white font-normal">építi a brandedet</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/kapcsolat"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300 shadow-xl shadow-violet-950/50 hover:shadow-violet-900/80 group"
            >
              <span>Kérj ajánlatot</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/munkak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-medium uppercase tracking-[0.2em] bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 hover:text-white transition-all duration-300"
            >
              <span>Munkáink</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Görgess</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ================= SELECTED WORK PREVIEW ================= */}
      <section id="selected-work" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/[0.08] pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Válogatott Munkák</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal text-white tracking-tight">
              Kiemelt Vizuális Projektek
            </h2>
          </div>

          <Link
            href="/munkak"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400 hover:text-violet-400 transition-colors group self-start md:self-auto"
          >
            <span>Összes munka megtekintése</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={idx < 2}
              onOpenLightbox={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* ================= THREE SERVICE CATEGORIES ================= */}
      <section className="py-24 px-6 sm:px-8 bg-[#0a0a0e] border-y border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold block mb-3">
              Főbb Területek
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
              Szakterületeink
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light">
              Minden megbízást egyedi látásmóddal, kompromisszummentes technikai
              felszereltséggel és a modern vizuális trendek maximális ismeretével valósítunk meg.
            </p>
          </div>

          {/* 3 Main Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* 1. LIVE & EVENTS */}
            <div className="editorial-card rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-zinc-700 group-hover:text-violet-500/30 transition-colors">
                <Zap className="w-12 h-12" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-500 tracking-wider">01</span>
                <h3 className="text-xl font-medium text-white tracking-tight mt-3 mb-2 group-hover:text-violet-300 transition-colors">
                  LIVE & EVENTS
                </h3>
                <p className="text-xs uppercase tracking-wider text-violet-400 font-medium mb-4">
                  Koncertek, fellépések és események vizuális dokumentálása.
                </p>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  Színpadi energiák, backstage pillanatok és magával ragadó aftermovie-k, amelyek
                  újra átélhetővé teszik az eseményt.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <Link
                  href="/szolgaltatasok#live-events"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-300 group-hover:text-white font-medium"
                >
                  <span>Részletek</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-zinc-500">Fotó & Videó</span>
              </div>
            </div>

            {/* 2. BRANDS & COMMERCIAL */}
            <div className="editorial-card rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-zinc-700 group-hover:text-violet-500/30 transition-colors">
                <Film className="w-12 h-12" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-500 tracking-wider">02</span>
                <h3 className="text-xl font-medium text-white tracking-tight mt-3 mb-2 group-hover:text-violet-300 transition-colors">
                  BRANDS & COMMERCIAL
                </h3>
                <p className="text-xs uppercase tracking-wider text-violet-400 font-medium mb-4">
                  Fotó- és videótartalom márkáknak, vendéglátóhelyeknek és vállalkozásoknak.
                </p>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  Filmes hatású imázsvideók, éttermi és enteriőr hangulatképek, social media
                  kampányok a konverziók növeléséért.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <Link
                  href="/szolgaltatasok#brands-commercial"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-300 group-hover:text-white font-medium"
                >
                  <span>Részletek</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-zinc-500">Kampányok</span>
              </div>
            </div>

            {/* 3. PORTRAIT & EDITORIAL */}
            <div className="editorial-card rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-zinc-700 group-hover:text-violet-500/30 transition-colors">
                <Camera className="w-12 h-12" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-500 tracking-wider">03</span>
                <h3 className="text-xl font-medium text-white tracking-tight mt-3 mb-2 group-hover:text-violet-300 transition-colors">
                  PORTRAIT & EDITORIAL
                </h3>
                <p className="text-xs uppercase tracking-wider text-violet-400 font-medium mb-4">
                  Portré, előadói promo, modell és personal branding tartalom.
                </p>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  Erőteljes, letisztult portrék stúdióban vagy egyedi helyszíneken, lemezborítók és
                  sajtóanyagok megkülönböztető karakterrel.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <Link
                  href="/szolgaltatasok#portrait-editorial"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-300 group-hover:text-white font-medium"
                >
                  <span>Részletek</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-zinc-500">Editorial</span>
              </div>
            </div>
          </div>

          {/* ================= FOURTH HIGHLIGHTED SECTION: CONTENT PARTNERSHIP ================= */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-950/40 via-[#100f1c] to-[#0d0d14] border border-violet-500/30 p-8 sm:p-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs uppercase tracking-widest font-semibold w-max">
                  <Repeat className="w-3.5 h-3.5" />
                  <span>Kiemelt Együttműködés</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-normal text-white tracking-tight">
                  CONTENT PARTNERSHIP
                </h3>

                <p className="text-base sm:text-lg text-zinc-200 font-light leading-relaxed">
                  Rendszeres vizuális tartalom olyan márkáknak és előadóknak, akik folyamatosan
                  szeretnének friss és professzionális anyagokat.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-zinc-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Havi rendszeres fotó- és videógyártás</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Garantált prioritás és gyors átadás</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Social Media formátumok (Reels / TikTok)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Egységes, prémium márkaesztétika</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
                <Link
                  href="/kapcsolat?type=partnership"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-white text-zinc-950 hover:bg-violet-300 transition-all duration-300 shadow-xl"
                >
                  <span>Dolgozzunk együtt</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <span className="text-xs text-zinc-400 tracking-wide font-light">
                  Egyedi havi konstrukciók
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STUDIO STATEMENT ================= */}
      <section className="py-24 px-6 sm:px-8 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold block mb-4">
          TwoFrame Filozófia
        </span>
        <blockquote className="text-2xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight mb-8">
          „Nem sablonokat követünk. Olyan vizuális nyelvet teremtünk, amely megragadja a néző
          figyelmét és azonnal megkülönbözteti a márkádat.”
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-[1px] bg-violet-500/50" />
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
            Szabó Barnabás • Alapító & Kreatív Igazgató
          </span>
          <div className="w-10 h-[1px] bg-violet-500/50" />
        </div>
      </section>

      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-b from-[#08080a] to-[#040406] border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Készen állsz a következő projektre?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl mb-8">
            Oszd meg velünk az elképzeléseidet, és készítünk egy személyre szabott kreatív
            javaslatot és árajánlatot.
          </p>
          <Link
            href="/kapcsolat"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300 shadow-xl shadow-violet-950/60"
          >
            <span>Kérj ajánlatot most</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        project={selectedProject}
        projects={projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </div>
  );
}
