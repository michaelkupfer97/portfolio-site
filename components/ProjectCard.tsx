"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/lib/site";

function thumbnailObjectPositionClass(
  position: Project["imageObjectPosition"],
) {
  if (position === "top") return "object-top";
  if (position === "bottom") return "object-bottom";
  return "object-center";
}

export default function ProjectCard({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasCarousel = project.images.length > 1;
  const activeImage = project.images[currentIndex];

  function goToPrev() {
    setCurrentIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));
  }

  function goToNext() {
    setCurrentIndex((i) => (i === project.images.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/20 hover:shadow-[0_8px_40px_-12px_rgba(99,102,241,0.15)]">
      <div className="relative h-48 overflow-hidden">
        {activeImage ? (
          <Image
            key={activeImage}
            src={activeImage}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            fill
            className={`object-cover transition duration-500 group-hover:scale-105 ${thumbnailObjectPositionClass(project.imageObjectPosition)}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-900/30 to-violet-900/30">
            <span className="select-none text-4xl font-bold tracking-wide text-indigo-400/40">
              {project.title.slice(0, 2)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111a2e] via-[#111a2e]/40 to-transparent" />

        {hasCarousel && (
          <>
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-100 backdrop-blur-sm transition hover:bg-black/60 md:opacity-0 md:group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-100 backdrop-blur-sm transition hover:bg-black/60 md:opacity-0 md:group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to screenshot ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-4 bg-indigo-400"
                      : "w-1.5 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-slate-400"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400/60" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-indigo-500/15 bg-indigo-500/[0.06] px-3 py-0.5 text-xs text-indigo-300/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4 pt-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-300 underline underline-offset-4 transition hover:text-indigo-400"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-300 underline underline-offset-4 transition hover:text-indigo-400"
            >
              Live Demo
            </a>
          )}
          {project.secondaryLink && (
            <a
              href={project.secondaryLink.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-300 underline underline-offset-4 transition hover:text-indigo-400"
            >
              {project.secondaryLink.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
