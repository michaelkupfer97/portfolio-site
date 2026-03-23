import Image from "next/image";
import { profile, socialLinks, projects } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import GradientBackground from "@/components/GradientBackground";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm transition hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.06]">
      <div className="relative h-44 overflow-hidden bg-slate-800/50">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-900/40 to-violet-900/40">
            <span className="select-none text-3xl font-bold tracking-wide text-indigo-400/50">
              {project.title.slice(0, 2)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b18]/60 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-slate-400"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-indigo-500/20 bg-indigo-500/[0.07] px-3 py-0.5 text-xs text-indigo-300"
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

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <GradientBackground />

      {/* ─── Hero ─── */}
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-24 md:pt-32">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-indigo-400/70">
          Portfolio
        </p>
        <h1 className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition hover:border-indigo-500/40 hover:bg-white/[0.08] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* ─── About ─── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-2xl font-semibold text-white">About</h2>
        <div className="max-w-2xl space-y-4">
          {profile.about.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-sm leading-relaxed text-slate-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold text-white">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-2 text-2xl font-semibold text-white">
          Get in Touch
        </h2>
        <p className="mb-8 text-sm text-slate-400">
          Have a role, project, or question? Drop me a message.
        </p>
        <div className="max-w-xl">
          <ContactForm />
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="mx-auto max-w-5xl border-t border-white/[0.06] px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-indigo-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
