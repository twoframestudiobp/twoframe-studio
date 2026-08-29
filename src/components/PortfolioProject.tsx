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
  const getAspectClass = () => {
    switch (project.layoutSpan) {
      case "hero":
        return "aspect-[16/10] sm:aspect-[16/9]";
      case "tall":
        return "aspect-[3/4]";
      case "wide":
        return "aspect-[16/9]";
      default:
        return "aspect-[4/5]";
    }
  };

  const getColSpanClass = () => {
    switch (project.layoutSpan) {
      case "hero":
      case "wide":
        return "md:col-span-2";
      default:
        return "md:col-span-1";
    }
  };

  return (
    <div className={`group relative flex flex-col ${getColSpanClass()}`}>
      <Link
        href={`/munkak/${project.slug}`}
        className="relative block w-full overflow-hidden bg-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400"
        style={{ borderRadius: "3px" }}
        aria-label={`${project.title} — ${project.categoryLabel} esettanulmány`}
      >
        {/* Image */}
        <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-zinc-900`}>
          <Image
            src={project.coverImage || project.image}
            alt={`${project.title} — ${project.client}`}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Softer gradient — lets the photo breathe */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

          {/* Category badge — top left */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-2.5 py-0.5 text-[10px] font-medium tracking-[0.18em] uppercase bg-black/50 backdrop-blur-sm text-zinc-300 border border-white/10 group-hover:text-white transition-colors"
              style={{ borderRadius: "2px" }}>
              {project.categoryLabel}
            </span>
          </div>

          {/* Arrow — top right, reveals on hover */}
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
            <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <div className="flex items-center gap-2 text-[10px] text-zinc-400 mb-1.5 font-light">
              <span className="uppercase tracking-widest text-zinc-300 font-medium">
                {project.client}
              </span>
              <span className="text-zinc-600">·</span>
              <span className="font-mono">{project.year}</span>
            </div>
            <h3 className="text-base sm:text-lg font-normal text-white tracking-tight group-hover:text-violet-200 transition-colors leading-tight">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
