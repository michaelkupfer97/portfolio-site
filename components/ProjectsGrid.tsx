"use client";

import { useState } from "react";
import { projectCategories, type Project, type ProjectCategory } from "@/lib/site";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

type Filter = "All" | ProjectCategory;

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...projectCategories];

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects"
        className="mb-8 flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const active = f === filter;
          const count =
            f === "All"
              ? projects.length
              : projects.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                active
                  ? "border-indigo-400/50 bg-indigo-500/15 text-white"
                  : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {f}
              <span className={`ml-2 text-xs ${active ? "text-indigo-300" : "text-slate-600"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {visible.map((project, i) => (
          <Reveal key={`${filter}-${project.title}`} delay={(i % 2) * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
