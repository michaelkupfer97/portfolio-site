import Image from "next/image";
import { profile, socialLinks, projects } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition hover:-translate-y-1 hover:border-zinc-600">
      <div className="relative h-44 overflow-hidden bg-zinc-800">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <span className="select-none text-3xl font-bold tracking-wide text-zinc-600">
              {project.title.slice(0, 2)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-zinc-400"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-700 px-3 py-0.5 text-xs text-zinc-300"
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
              className="text-sm font-medium text-zinc-300 underline underline-offset-4 transition hover:text-white"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-300 underline underline-offset-4 transition hover:text-white"
            >
              Live Demo
            </a>
          )}
          {project.secondaryLink && (
            <a
              href={project.secondaryLink.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-300 underline underline-offset-4 transition hover:text-white"
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
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* ─── Hero ─── */}
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-24 md:pt-32">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold transition hover:border-zinc-400 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* ─── About ─── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-2xl font-semibold">About</h2>
        <div className="max-w-2xl space-y-4">
          {profile.about.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-sm leading-relaxed text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-2 text-2xl font-semibold">Get in Touch</h2>
        <p className="mb-8 text-sm text-zinc-400">
          Have a role, project, or question? Drop me a message.
        </p>
        <div className="max-w-xl">
          <ContactForm />
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="mx-auto max-w-5xl border-t border-zinc-800 px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-zinc-300"
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
