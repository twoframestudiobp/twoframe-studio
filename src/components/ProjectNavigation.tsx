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
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-16 border-t border-white/[0.08] w-full"
    >
      {/* Previous Project Link */}
      <Link
        href={`/munkak/${prevProject.slug}`}
        className="group flex flex-col p-6 rounded-2xl bg-zinc-950/60 border border-white/[0.06] hover:border-violet-500/40 hover:bg-zinc-900/60 transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400"
      >
        <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest mb-2 group-hover:text-violet-400 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
          <span>Előző projekt</span>
        </div>
        <span className="text-lg font-medium text-white group-hover:text-violet-200 transition-colors">
          {prevProject.title}
        </span>
        <span className="text-xs text-zinc-400 font-light mt-1">
          {prevProject.categoryLabel} • {prevProject.client}
        </span>
      </Link>

      {/* Next Project Link */}
      <Link
        href={`/munkak/${nextProject.slug}`}
        className="group flex flex-col items-start sm:items-end p-6 rounded-2xl bg-zinc-950/60 border border-white/[0.06] hover:border-violet-500/40 hover:bg-zinc-900/60 transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 text-left sm:text-right"
      >
        <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest mb-2 group-hover:text-violet-400 transition-colors">
          <span>Következő projekt</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </div>
        <span className="text-lg font-medium text-white group-hover:text-violet-200 transition-colors">
          {nextProject.title}
        </span>
        <span className="text-xs text-zinc-400 font-light mt-1">
          {nextProject.categoryLabel} • {nextProject.client}
        </span>
      </Link>
    </nav>
  );
}
