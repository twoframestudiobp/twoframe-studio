"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  tall?: boolean;
}

export default function ProjectCard({
  project,
  priority = false,
  tall = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/munkak/${project.slug}`}
      className={`group relative overflow-hidden bg-zinc-950 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 block ${
        tall ? "row-span-2 sm:row-span-1" : ""
      }`}
      style={{ borderRadius: "4px" }}
      aria-label={`${project.title} — ${project.categoryLabel} esettanulmány`}
    >
      {/* Image container — tall variant taller on sm+ */}
      <div
        className={`relative w-full overflow-hidden bg-zinc-900 ${
          tall ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[4/3] sm:aspect-[4/3]"
        }`}
      >
        <Image
          src={project.coverImage || project.image}
          alt={`${project.title} – ${project.categoryLabel}`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Gradient — softer, only bottom 40% */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

        {/* Bottom text */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <div className="flex items-center justify-between gap-3 mb-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
              {project.categoryLabel}
            </span>
            <span className="text-[10px] font-mono text-zinc-500">{project.year}</span>
          </div>
          <div className="flex items-end justify-between gap-4">
            <h3 className="text-base sm:text-lg font-normal text-white tracking-tight group-hover:text-violet-200 transition-colors leading-tight">
              {project.title}
            </h3>
            <div className="shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-violet-600 group-hover:border-violet-500 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
