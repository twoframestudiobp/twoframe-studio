"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export default function Lightbox({
  project,
  projects,
  onClose,
  onSelectProject,
}: LightboxProps) {
  const currentIndex = project
    ? projects.findIndex((p) => p.slug === project.slug || p.id === project.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectProject(projects[currentIndex - 1]);
    } else {
      onSelectProject(projects[projects.length - 1]);
    }
  }, [currentIndex, projects, onSelectProject]);

  const handleNext = useCallback(() => {
    if (currentIndex < projects.length - 1) {
      onSelectProject(projects[currentIndex + 1]);
    } else {
      onSelectProject(projects[0]);
    }
  }, [currentIndex, projects, onSelectProject]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, handlePrev, handleNext]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in p-4 sm:p-8">
      {/* Background click to close */}
      <div
        className="absolute inset-0 z-0"
        onClick={onClose}
        aria-label="Bezárás"
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors focus:outline-none"
        aria-label="Bezárás"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-violet-600/80 text-white border border-white/15 backdrop-blur-md transition-colors"
        aria-label="Előző kép"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-violet-600/80 text-white border border-white/15 backdrop-blur-md transition-colors"
        aria-label="Következő kép"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div
        className="relative z-10 max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[65vh] sm:h-[75vh] flex items-center justify-center">
          <Image
            src={project.coverImage || project.image}
            alt={project.title}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 95vw, 1200px"
            priority
          />
        </div>

        {/* Metadata Bar */}
        <div className="mt-4 w-full max-w-2xl bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] uppercase tracking-widest text-violet-400 font-semibold">
                {project.categoryLabel}
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-xs text-zinc-400">{project.client}</span>
              <span className="text-zinc-500">•</span>
              <span className="text-xs text-zinc-400">{project.year}</span>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-white">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-300 font-light mt-0.5">
              {project.shortDescription || project.description}
            </p>
          </div>

          <div className="text-xs text-zinc-400 font-mono self-end sm:self-center">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>
      </div>
    </div>
  );
}
