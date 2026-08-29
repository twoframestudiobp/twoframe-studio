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
import { ArrowLeft, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import JsonLd from "@/components/JsonLd";

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
      title: "Projekt Nem Található",
    };
  }

  const imageUrl = project.coverImage?.startsWith("http")
    ? project.coverImage
    : `${siteConfig.url}${project.coverImage || project.image}`;

  return {
    title: `${project.title} — ${project.categoryLabel}`,
    description: project.shortDescription,
    alternates: {
      canonical: `/munkak/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} — ${project.categoryLabel} | TwoFrame Studio`,
      description: project.shortDescription,
      url: `${siteConfig.url}/munkak/${project.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | TwoFrame Studio`,
      description: project.shortDescription,
      images: [imageUrl],
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

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.shortDescription,
    image: project.coverImage?.startsWith("http")
      ? project.coverImage
      : `${siteConfig.url}${project.coverImage || project.image}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    creator: {
      "@type": "Person",
      name: siteConfig.creator,
    },
    datePublished: project.year,
    genre: project.categoryLabel,
    keywords: project.services.join(", "),
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
  };

  return (
    <article className="min-h-screen pt-28 sm:pt-36 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full flex flex-col">
      <JsonLd data={projectSchema} />

      {/* Back link */}
      <div className="mb-10">
        <Link
          href="/munkak"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-zinc-500 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
          <span>Vissza a munkákhoz</span>
        </Link>
      </div>

      {/* Hero Header */}
      <header className="flex flex-col gap-5 mb-12 max-w-4xl">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-zinc-500 font-medium">
          <span className="text-violet-400 font-semibold">{project.categoryLabel}</span>
          <span>·</span>
          <span className="font-mono text-zinc-400">{project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.05]">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
          {project.shortDescription}
        </p>
      </header>

      {/* Large Hero Image */}
      <div
        className="relative w-full aspect-[16/10] sm:aspect-[21/9] overflow-hidden bg-zinc-950 mb-16 shadow-2xl"
        style={{ borderRadius: "4px" }}
      >
        <Image
          src={project.coverImage || project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1400px) 100vw, 1300px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Project Metadata Specs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/[0.08] mb-16">
        {/* Client */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-medium">
            Ügyfél / Produkció
          </span>
          <span className="text-sm font-normal text-white">
            {project.client}
          </span>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-medium">
            Helyszín
          </span>
          <span className="text-sm font-normal text-white">
            {project.location}
          </span>
        </div>

        {/* Year */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-medium">
            Év
          </span>
          <span className="text-sm font-normal text-white font-mono">
            {project.year}
          </span>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-medium">
            Szolgáltatások
          </span>
          <span className="text-sm font-normal text-zinc-300">
            {project.services.join(", ")}
          </span>
        </div>
      </div>

      {/* Editorial Narrative */}
      {(project.projectDescription || project.challenge || project.approach || project.result) && (
        <section className="mb-20 max-w-4xl">
          <div className="flex flex-col gap-10">
            {project.projectDescription && (
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium block">
                  A Projektről
                </span>
                <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                  {project.projectDescription}
                </p>
              </div>
            )}

            {/* Insights (Challenge / Approach / Result) */}
            {(project.challenge || project.approach || project.result) && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/[0.06]">
                {project.challenge && (
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-mono text-zinc-500 tracking-widest">
                      01 / KONCEPCIÓ
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.approach && (
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-mono text-zinc-500 tracking-widest">
                      02 / MEGVALÓSÍTÁS
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                )}

                {project.result && (
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-mono text-zinc-500 tracking-widest">
                      03 / EREDMÉNY
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Visual Gallery */}
      <section className="mb-24">
        <div className="mb-8">
          <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium block mb-2">
            Galéria
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Fotósorozat &amp; Részletek
          </h2>
        </div>

        <CaseStudyGallery
          images={project.galleryImages}
          projectTitle={project.title}
        />
      </section>

      {/* Adjacent Project Navigation */}
      <ProjectNavigation
        prevProject={prevProject}
        nextProject={nextProject}
      />

      {/* Bottom CTA */}
      <section className="mt-20 pt-16 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium block mb-2">
            Együttműködés
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-2">
            Hasonló vizuális anyagot keresel?
          </h2>
          <p className="text-zinc-500 text-sm font-light">
            Vedd fel velünk a kapcsolatot a részletek és árajánlat egyeztetéséhez.
          </p>
        </div>
        <Link
          href={`/kapcsolat?project=${encodeURIComponent(project.title)}`}
          className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300"
        >
          <span>Ajánlatkérés ehhez a projekthez</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </article>
  );
}
