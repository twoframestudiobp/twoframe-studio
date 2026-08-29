"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { Maximize2, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenLightbox?: (project: Project) => void;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  onOpenLightbox,
  priority = false,
}: ProjectCardProps) {
  return (
    <div
      onClick={() => onOpenLightbox && onOpenLightbox(project)}
      className="group relative overflow-hidden rounded-xl bg-zinc-950 border border-white/[0.08] cursor-pointer transition-all duration-500 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-950/20 flex flex-col"
    >
      {/* Image container */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Dark Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

        {/* Category Badge Top Left */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 text-[11px] font-medium tracking-widest uppercase rounded-full bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10 group-hover:border-violet-400/40 group-hover:text-white transition-colors">
            {project.categoryLabel}
          </span>
        </div>

        {/* Zoom Icon Top Right */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-violet-600 transition-colors">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Bottom Content Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end transform transition-transform duration-300">
          <div className="flex items-center justify-between gap-2 text-xs text-zinc-400 mb-1">
            <span className="tracking-wider uppercase font-medium">{project.client}</span>
            <span className="text-zinc-400">{project.year}</span>
          </div>

          <h3 className="text-lg font-medium text-white tracking-tight group-hover:text-violet-200 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-violet-400" />
          </h3>

          <p className="text-xs text-zinc-300 line-clamp-2 mt-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
