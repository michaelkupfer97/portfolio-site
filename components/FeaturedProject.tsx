"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/site";

const AUTOPLAY_MS = 4500;

export default function FeaturedProject({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = project.images.length;

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, count]);

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <article
      className="glass glow-border overflow-hidden rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid lg:grid-cols-[1.25fr_1fr]">
        {/* ── Screens ── */}
        <div className="flex flex-col justify-center p-4 lg:p-6 lg:pr-0">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1430] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
            {/* faux browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.03] px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 truncate rounded bg-black/30 px-2 py-0.5 text-[10px] text-slate-500">
                voxly.app / builder
              </span>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0f1f]">
              {project.images.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={`object-cover object-top transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
                  >
                    <Chevron dir="left" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
                  >
                    <Chevron dir="right" />
                  </button>
                </>
              )}
            </div>
          </div>

          {count > 1 && (
            <div className="flex items-center gap-2 px-1 pt-4">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    i === index ? "bg-indigo-400" : "bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Copy ── */}
        <div className="flex flex-col p-7 lg:p-9">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-300">
              Featured
            </span>
            <span className="text-xs text-slate-500">{project.category}</span>
          </div>

          <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            {project.description}
          </p>

          {project.stats && (
            <dl className="mt-6 grid grid-cols-3 gap-3">
              {project.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-3"
                >
                  <dt className="text-2xl font-bold text-gradient">{s.value}</dt>
                  <dd className="mt-1 text-[11px] leading-snug text-slate-400">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <ul className="mt-6 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-slate-400">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300/80" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-indigo-500/15 bg-indigo-500/[0.06] px-3 py-0.5 text-xs text-indigo-300/80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
            {project.secondaryLink && (
              <a
                href={project.secondaryLink.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-10px_rgba(99,102,241,0.8)] transition hover:brightness-110"
              >
                <PlayIcon />
                {project.secondaryLink.label}
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold transition hover:border-indigo-500/40 hover:bg-white/[0.08]"
              >
                Live App
              </a>
            )}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold transition hover:border-indigo-500/40 hover:bg-white/[0.08]"
              >
                GitHub
              </a>
            ) : (
              <a
                href="#contact"
                className="text-sm text-slate-400 underline decoration-slate-600 underline-offset-4 transition hover:text-white"
              >
                Private repo — ask for a walkthrough
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 ${dir === "right" ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M6.3 3.6a1 1 0 011.02.05l7 4.5a1 1 0 010 1.7l-7 4.5A1 1 0 015.75 13.5v-9a1 1 0 01.55-.9z" />
    </svg>
  );
}
