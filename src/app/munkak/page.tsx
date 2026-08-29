"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import PortfolioFilters, { FilterCategory } from "@/components/PortfolioFilters";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Sparkles, ArrowRight } from "lucide-react";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const counts = useMemo(() => {
    return {
      all: projects.length,
      live: projects.filter((p) => p.category === "live").length,
      commercial: projects.filter((p) => p.category === "commercial").length,
      portrait: projects.filter((p) => p.category === "portrait").length,
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full flex flex-col">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-12 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Portfólió & Esettanulmányok</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
          Válogatott Munkák
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
          Koncertek, turnék, márkakampányok és karakteres portrésorozatok. Kattints a projektekre
          a részletes esettanulmányok és fotósorozatok megtekintéséhez.
        </p>
      </div>

      {/* Minimal Filter Tabs */}
      <div className="mb-12">
        <PortfolioFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          counts={counts}
        />
      </div>

      {/* Editorial Asymmetric Gallery Grid */}
      <PortfolioGrid projects={filteredProjects} />

      {/* Bottom Conversion Prompt */}
      <section className="mt-28 p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-zinc-950 via-[#0e0e14] to-zinc-950 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold">
            Egyedi Koncepció?
          </span>
          <h2 className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
            Valósítsuk meg a te elképzelésedet is.
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Legyen szó egyszeri koncertrögzítésről, átfogó márkakampányról vagy havi tartalompartnerségről.
          </p>
        </div>
        <Link
          href="/kapcsolat"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-xl shadow-violet-950/40 shrink-0"
        >
          <span>Kérj ajánlatot</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
