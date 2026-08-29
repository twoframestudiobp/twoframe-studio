import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "404 — Az oldal nem található | TwoFrame Studio",
  description: "A keresett oldal nem található a TwoFrame Studio weboldalán.",
};

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 sm:px-8 pt-32 pb-20">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>404 — Hiba</span>
        </div>

        {/* Large 404 Number Accent */}
        <div className="text-7xl sm:text-9xl font-light tracking-tighter text-zinc-800 select-none mb-2 font-mono">
          404
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
          Ez az oldal nincs a képen.
        </h1>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-10 max-w-md">
          A keresett oldal nem található vagy áthelyezésre került.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-xl shadow-violet-950/50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Vissza a főoldalra</span>
          </Link>

          <Link
            href="/munkak"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-medium uppercase tracking-[0.2em] bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 hover:text-white transition-all"
          >
            <span>Munkák megtekintése</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
