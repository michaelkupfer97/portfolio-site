import Image from "next/image";
import { profile, socialLinks, projects } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import GradientBackground from "@/components/GradientBackground";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/20 hover:shadow-[0_8px_40px_-12px_rgba(99,102,241,0.15)]">
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-900/30 to-violet-900/30">
            <span className="select-none text-4xl font-bold tracking-wide text-indigo-400/40">
              {project.title.slice(0, 2)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-[#0a1020]/40 to-transparent" />
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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/70">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <GradientBackground />

      {/* ─── Navigation ─── */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.04] bg-[#0a1020]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight text-white">
            {profile.name.split(" ")[0]}
            <span className="text-indigo-400">.</span>
          </span>

          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-slate-400 transition hover:text-white">About</a>
            <a href="#projects" className="text-sm text-slate-400 transition hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-slate-400 transition hover:text-white">Contact</a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-32 md:flex-row md:items-start md:gap-16 md:pt-40 lg:pt-44">
        <div className="flex-1">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/70">
            Portfolio
          </p>
          <h1 className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-base text-slate-500">{profile.location}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="cursor-pointer rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:brightness-110"
            >
              Get in Touch
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-6 py-2.5 text-sm font-semibold backdrop-blur-sm transition hover:border-indigo-500/40 hover:bg-white/[0.08]"
            >
              View Resume
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-lg border border-white/10 bg-white/[0.04] px-6 py-2.5 text-sm font-semibold backdrop-blur-sm transition hover:border-indigo-500/40 hover:bg-white/[0.08]"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="relative h-48 w-48 overflow-hidden rounded-full ring-2 ring-indigo-500/20 ring-offset-4 ring-offset-[#0a1020] md:h-60 md:w-60">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              priority
              className="object-cover object-[center_15%]"
              sizes="(max-width: 768px) 192px, 240px"
            />
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="About"
          title="A bit about me"
          description="Get to know who I am and what drives me as a developer."
        />
        <div className="max-w-2xl space-y-5">
          {profile.about.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-base leading-relaxed text-slate-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of projects I've worked on, from ML models to full-stack applications."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a role, project, or question? Drop me a message."
        />
        <div className="max-w-xl rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm">
          <ContactForm />
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="mx-auto max-w-6xl border-t border-white/[0.06] px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <div className="flex items-center gap-5">
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
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-indigo-400"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
