"use client";

import React from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/projects";

interface CaseStudyGalleryProps {
  images: GalleryImage[];
  projectTitle: string;
}

export default function CaseStudyGallery({
  images,
  projectTitle,
}: CaseStudyGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-10 sm:gap-16 w-full">
      {images.map((img, index) => {
        // Layout style depending on aspect ratio or index
        const isWide = img.aspect === "wide" || img.aspect === "full" || index === 0;

        return (
          <figure
            key={index}
            className="flex flex-col gap-3 group relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/[0.06]"
          >
            <div
              className={`relative w-full overflow-hidden bg-zinc-900 ${
                isWide
                  ? "aspect-[16/9] sm:aspect-[21/9]"
                  : img.aspect === "portrait"
                  ? "aspect-[4/5] sm:aspect-[3/4] max-w-4xl mx-auto"
                  : "aspect-[16/10]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt || `${projectTitle} - Kép ${index + 1}`}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1300px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>

            {img.caption && (
              <figcaption className="px-6 py-3 text-xs text-zinc-400 font-light tracking-wide flex items-center justify-between border-t border-white/[0.04] bg-zinc-950/40">
                <span>{img.caption}</span>
                <span className="font-mono text-[10px] text-zinc-600">
                  {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}
