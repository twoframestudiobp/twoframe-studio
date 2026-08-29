"use client";

import React from "react";
import { Project } from "@/data/projects";
import PortfolioProject from "./PortfolioProject";

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  if (projects.length === 0) {
    return (
      <div className="py-24 text-center border border-dashed border-white/10 rounded-2xl p-12">
        <p className="text-zinc-400 text-sm font-light">
          Ebben a kategóriában jelenleg nincs megjeleníthető projekt.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
      {projects.map((project, idx) => (
        <PortfolioProject
          key={project.slug}
          project={project}
          priority={idx < 2}
        />
      ))}
    </div>
  );
}
