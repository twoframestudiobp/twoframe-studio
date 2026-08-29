import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  projects,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/data/projects";
import CaseStudyGallery from "@/components/CaseStudyGallery";
import ProjectNavigation from "@/components/ProjectNavigation";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  User,
  CheckCircle2,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projekt Nem Található | TwoFrame Studio",
    };
  }

  return {
    title: `${project.title} — ${project.categoryLabel} | TwoFrame Studio`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | TwoFrame Studio`,
      description: project.shortDescription,
      images: [
        {
          url: project.coverImage || project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prevProject, nextProject } = getAdjacentProjects(project.slug);

  return (
    <article className="min-h-screen pt-28 sm:pt-36 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full flex flex-col">
      {/* Back to all works */}
      <div className="mb-8">
        <Link
          href="/munkak"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-violet-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Vissza a munkákhoz</span>
        </Link>
      </div>

      {/* Hero Header Meta */}
      <header className="flex flex-col gap-6 mb-12 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300">
            {project.categoryLabel}
          </span>
          <span className="text-zinc-500">•</span>
          <span className="text-xs text-zinc-400 font-mono">{project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.08]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
          {project.shortDescription}
        </p>
      </header>

      {/* Large Hero Image */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border border-white/[0.08] mb-16 shadow-2xl">
        <Image
          src={project.coverImage || project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1400px) 100vw, 1300px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Project Metadata Specs Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-zinc-950/80 border border-white/[0.08] mb-16">
        {/* Client */}
        <div className="flex flex-col gap-1">
          <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">
            Ügyfél / Produkció
          </span>
          <span className="text-sm sm:text-base font-normal text-white">
            {project.client}
          </span>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1">
          <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">
            Helyszín
          </span>
          <span className="text-sm sm:text-base font-normal text-white">
            {project.location}
          </span>
        </div>

        {/* Year */}
        <div className="flex flex-col gap-1">
          <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">
            Év
          </span>
          <span className="text-sm sm:text-base font-normal text-white font-mono">
            {project.year}
          </span>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-1">
          <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">
            Szolgáltatások
          </span>
          <span className="text-sm sm:text-base font-normal text-violet-300">
            {project.services.join(", ")}
          </span>
        </div>
      </div>

      {/* Project Introduction & Editorial Narrative */}
      {(project.projectDescription || project.challenge || project.approach || project.result) && (
        <section className="mb-20 max-w-4xl">
          <div className="flex flex-col gap-10">
            {/* Main Story */}
            {project.projectDescription && (
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold block">
                  A Projektről
                </span>
                <p className="text-base sm:text-xl text-zinc-200 font-light leading-relaxed">
                  {project.projectDescription}
                </p>
              </div>
            )}

            {/* Structured Insights (Challenge / Approach / Result) */}
            {(project.challenge || project.approach || project.result) && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
                {project.challenge && (
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-2">
                    <h3 className="text-xs uppercase tracking-wider text-violet-400 font-semibold">
                      01 / Koncepció
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.approach && (
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-2">
                    <h3 className="text-xs uppercase tracking-wider text-violet-400 font-semibold">
                      02 / Megvalósítás
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                )}

                {project.result && (
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-2">
                    <h3 className="text-xs uppercase tracking-wider text-violet-400 font-semibold">
                      03 / Eredmény
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Large Visual Gallery */}
      <section className="mb-24">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold block mb-1">
            Vizuális Galéria
          </span>
          <h2 className="text-2xl sm:text-3xl font-normal text-white">
            Fotósorozat & Részletek
          </h2>
        </div>

        <CaseStudyGallery
          images={project.galleryImages}
          projectTitle={project.title}
        />
      </section>

      {/* Bottom Call to Action */}
      <section className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-violet-950/40 via-[#0e0e14] to-zinc-950 border border-violet-500/30 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold">
            Hasonló Vizuális Anyagot Keresel?
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Dolgozzunk együtt
          </h2>
          <p className="text-sm text-zinc-300 font-light">
            Van egy projekted? Beszéljünk róla. Készítünk egy egyedi kreatív koncepciót és árajánlatot.
          </p>
        </div>

        <Link
          href={`/kapcsolat?project=${encodeURIComponent(project.title)}`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-white text-zinc-950 hover:bg-violet-200 transition-all shadow-xl shrink-0"
        >
          <span>Beszéljünk a projektről</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Previous / Next Project Navigation */}
      <ProjectNavigation
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </article>
  );
}
