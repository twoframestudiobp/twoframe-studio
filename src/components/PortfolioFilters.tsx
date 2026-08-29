"use client";

import React from "react";
import { ProjectCategory } from "@/data/projects";

export type FilterCategory = "all" | ProjectCategory;

interface PortfolioFiltersProps {
  activeFilter: FilterCategory;
  onFilterChange: (category: FilterCategory) => void;
  counts: {
    all: number;
    live: number;
    commercial: number;
    portrait: number;
  };
}

const filterOptions: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "Összes" },
  { id: "live", label: "Live & Events" },
  { id: "commercial", label: "Commercial" },
  { id: "portrait", label: "Portré & Editorial" },
];

export default function PortfolioFilters({
  activeFilter,
  onFilterChange,
  counts,
}: PortfolioFiltersProps) {
  return (
    <nav
      aria-label="Portfólió kategóriák"
      className="flex items-center gap-6 sm:gap-10 overflow-x-auto pb-4 scrollbar-none border-b border-white/[0.08]"
    >
      {filterOptions.map((tab) => {
        const isActive = activeFilter === tab.id;
        const count = counts[tab.id];

        return (
          <button
            key={tab.id}
            onClick={() => onFilterChange(tab.id)}
            className={`group relative py-2 text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 whitespace-nowrap flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 ${
              isActive
                ? "text-white font-medium"
                : "text-zinc-400 hover:text-zinc-200 font-light"
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[10px] font-mono transition-opacity ${
                isActive
                  ? "text-violet-400 opacity-100"
                  : "text-zinc-500 opacity-60 group-hover:opacity-100"
              }`}
            >
              ({count})
            </span>

            {/* Minimal Underline Indicator */}
            {isActive ? (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-violet-500 via-violet-400 to-violet-300 rounded-full" />
            ) : (
              <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/0 group-hover:bg-white/20 transition-all" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
