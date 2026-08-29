import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectNavigationProps {
  prevProject: Project;
  nextProject: Project;
}

export default function ProjectNavigation({
  prevProject,
  nextProject,
}: ProjectNavigationProps) {
  return (
    <nav
      aria-label="További projektek navigációja"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-16 border-t border-white/[0.08] w-full"
    >
      {/* Previous Project Link */}
      <Link
        href={`/munkak/${prevProject.slug}`}
        className="group flex flex-col p-6 bg-zinc-950/40 border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400"
        style={{ borderRadius: "4px" }}
      >
        <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-[0.22em] mb-2 group-hover:text-violet-400 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
          <span>Előző projekt</span>
        </div>
        <span className="text-base sm:text-lg font-light text-white group-hover:text-violet-200 transition-colors">
          {prevProject.title}
        </span>
        <span className="text-[11px] text-zinc-500 font-light mt-1">
          {prevProject.categoryLabel} &bull; {prevProject.client}
        </span>
      </Link>

      {/* Next Project Link */}
      <Link
        href={`/munkak/${nextProject.slug}`}
        className="group flex flex-col items-start sm:items-end p-6 bg-zinc-950/40 border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 text-left sm:text-right"
        style={{ borderRadius: "4px" }}
      >
        <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-[0.22em] mb-2 group-hover:text-violet-400 transition-colors">
          <span>Következő projekt</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </div>
        <span className="text-base sm:text-lg font-light text-white group-hover:text-violet-200 transition-colors">
          {nextProject.title}
        </span>
        <span className="text-[11px] text-zinc-500 font-light mt-1">
          {nextProject.categoryLabel} &bull; {nextProject.client}
        </span>
      </Link>
    </nav>
  );
}
