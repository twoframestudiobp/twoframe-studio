"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import PortfolioFilters, { FilterCategory } from "@/components/PortfolioFilters";
import PortfolioGrid from "@/components/PortfolioGrid";
import { ArrowRight } from "lucide-react";

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
      <div className="max-w-2xl mb-12 animate-fade-in">
        <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium block mb-3">
          Portfólió
        </span>
        <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-4">
          Válogatott Munkák
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
          Koncertek, turnék, márkakampányok és karakteres portrésorozatok.
          Minden projekt mögött konkrét cél és átgondolt vizuális koncepció áll.
        </p>
      </div>

      {/* Minimal Filter Tabs */}
      <div className="mb-10">
        <PortfolioFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          counts={counts}
        />
      </div>

      {/* Gallery Grid */}
      <PortfolioGrid projects={filteredProjects} />

      {/* Bottom Conversion Section */}
      <section className="mt-28 pt-16 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-2">
            Valósítsuk meg a te elképzelésedet is.
          </h2>
          <p className="text-zinc-500 text-sm font-light">
            Koncert, márkaanyag, portré vagy havi tartalompartnerség.
          </p>
        </div>
        <Link
          href="/kapcsolat"
          className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300"
        >
          <span>Kérj ajánlatot</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
