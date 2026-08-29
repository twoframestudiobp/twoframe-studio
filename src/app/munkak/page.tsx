"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Lightbox from "@/components/Lightbox";
import { Sparkles, ArrowRight } from "lucide-react";

type CategoryFilter = "all" | "live" | "commercial" | "portrait";

const filterTabs = [
  { id: "all" as CategoryFilter, label: "Összes munka" },
  { id: "live" as CategoryFilter, label: "Live & Events" },
  { id: "commercial" as CategoryFilter, label: "Commercial & Brands" },
  { id: "portrait" as CategoryFilter, label: "Portrait & Editorial" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="max-w-3xl mb-12 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Portfólió</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
          Válogatott Munkáink
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
          Koncertek, turnék, márkaanyagok és karakteres portrésorozatok. Minden képkockát
          átgondolt kompozícióval és egyedi vizuális látásmóddal készítünk el.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/[0.08] scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          const count =
            tab.id === "all"
              ? projects.length
              : projects.filter((p) => p.category === tab.id).length;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-all whitespace-nowrap flex items-center gap-2.5 ${
                isActive
                  ? "bg-white text-zinc-950 font-semibold shadow-lg shadow-white/10"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-zinc-900 text-white font-mono"
                    : "bg-white/10 text-zinc-400 font-mono"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Editorial Masonry/Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            priority={idx < 3}
            onOpenLightbox={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Bottom Conversion Prompt */}
      <div className="mt-24 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-zinc-950 via-[#0e0e14] to-zinc-950 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold block mb-2">
            Egyedi Elképzelésed Van?
          </span>
          <h3 className="text-2xl sm:text-3xl font-normal text-white">
            Készítsük el a te vizuális anyagaidat is.
          </h3>
          <p className="text-sm text-zinc-400 font-light mt-1 max-w-xl">
            Legyen szó egyszeri koncertfotózásról, átfogó imázskampányról vagy havi tartalomgyártásról.
          </p>
        </div>
        <Link
          href="/kapcsolat"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-lg shrink-0"
        >
          <span>Kérj ajánlatot</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        project={selectedProject}
        projects={filteredProjects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </div>
  );
}
