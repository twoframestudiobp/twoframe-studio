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
      <div className="py-20 text-center">
        <p className="text-zinc-500 text-sm font-light">
          Ebben a kategóriában jelenleg nincs megjeleníthető projekt.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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
