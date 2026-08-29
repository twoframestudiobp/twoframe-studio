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
      className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-4 scrollbar-none border-b border-white/[0.08]"
    >
      {filterOptions.map((tab) => {
        const isActive = activeFilter === tab.id;
        const count = counts[tab.id];

        return (
          <button
            key={tab.id}
            onClick={() => onFilterChange(tab.id)}
            className={`group relative py-2 text-[11px] sm:text-xs tracking-[0.22em] uppercase transition-colors duration-200 whitespace-nowrap flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 ${
              isActive
                ? "text-white font-medium"
                : "text-zinc-500 hover:text-zinc-300 font-normal"
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[10px] font-mono ${
                isActive
                  ? "text-violet-400 font-semibold"
                  : "text-zinc-600 group-hover:text-zinc-400"
              }`}
            >
              {count}
            </span>

            {/* Minimal Underline Indicator */}
            {isActive && (
              <span className="absolute -bottom-4 left-0 right-0 h-[1.5px] bg-violet-400 rounded-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
