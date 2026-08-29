"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface PortfolioProjectProps {
  project: Project;
  priority?: boolean;
}

export default function PortfolioProject({
  project,
  priority = false,
}: PortfolioProjectProps) {
  // Determine aspect ratio class based on layoutSpan or category
  const getAspectClass = () => {
    switch (project.layoutSpan) {
      case "hero":
        return "aspect-[16/10] sm:aspect-[16/9]";
      case "tall":
        return "aspect-[3/4] sm:aspect-[4/5]";
      case "wide":
        return "aspect-[16/10]";
      default:
        return "aspect-[4/5]";
    }
  };

  const getColSpanClass = () => {
    switch (project.layoutSpan) {
      case "hero":
        return "md:col-span-2";
      case "wide":
        return "md:col-span-2 lg:col-span-2";
      default:
        return "md:col-span-1";
    }
  };

  return (
    <div
      className={`group relative flex flex-col ${getColSpanClass()} animate-fade-in`}
    >
      <Link
        href={`/munkak/${project.slug}`}
        className="relative block w-full overflow-hidden rounded-xl bg-zinc-950 border border-white/[0.06] hover:border-violet-500/40 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-violet-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        aria-label={`${project.title} - ${project.categoryLabel} esettanulmány`}
      >
        {/* Image Container */}
        <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-zinc-900`}>
          <Image
            src={project.coverImage || project.image}
            alt={`${project.title} - ${project.client}`}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Editorial Vignette / Subtle Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />

          {/* Top Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 text-[11px] font-medium tracking-[0.2em] uppercase rounded-full bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10 group-hover:border-violet-400/40 group-hover:text-white transition-colors">
              {project.categoryLabel}
            </span>
          </div>

          {/* Top Right Arrow Indicator */}
          <div className="absolute top-4 right-4 z-10">
            <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-500 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Bottom Information */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
            <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1.5 font-light">
              <span className="uppercase tracking-widest text-zinc-300 font-medium">
                {project.client}
              </span>
              <span>•</span>
              <span>{project.location}</span>
              <span>•</span>
              <span className="font-mono text-[11px]">{project.year}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight group-hover:text-violet-200 transition-colors flex items-center justify-between gap-4">
              <span>{project.title}</span>
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1.5 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
