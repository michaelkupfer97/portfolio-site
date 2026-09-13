import Image from "next/image";
import type { CSSProperties } from "react";
import { profile, socialLinks, projects, heroStats } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import GradientBackground from "@/components/GradientBackground";
import CursorAura from "@/components/CursorAura";
import ParticleField from "@/components/ParticleField";
import Nav from "@/components/Nav";
import Typewriter from "@/components/Typewriter";
import Reveal from "@/components/Reveal";
import TechMarquee from "@/components/TechMarquee";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectsGrid from "@/components/ProjectsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";

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
    <Reveal className="mb-12">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/70">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </Reveal>
  );
}

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

export default function Home() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <main id="top" className="relative min-h-screen text-white">
      <GradientBackground />
      <ParticleField />
      <CursorAura />
      <Nav />

      {/* ─── Hero ─── */}
      <section className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-20 pt-32 md:flex-row md:items-center md:gap-16 md:pt-40 lg:pt-44">
        <div className="flex-1">
          <div className="rise-in" style={rise(0)}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-200">
              <span className="status-dot relative h-2 w-2 rounded-full bg-emerald-400" />
              {profile.role} @ {profile.company}
            </span>
          </div>

          <h1
            className="rise-in mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            style={rise(80)}
          >
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p
            className="rise-in mt-5 min-h-[2.5rem] text-2xl font-medium text-slate-200 md:text-3xl"
            style={rise(160)}
          >
            I build{" "}
            <Typewriter phrases={profile.heroRoles} className="text-indigo-300" />
          </p>

          <p
            className="rise-in mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
            style={rise(240)}
          >
            {profile.tagline}
          </p>

          <div className="rise-in mt-8 flex flex-wrap items-center gap-3" style={rise(320)}>
            <a
              href="#projects"
              className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-10px_rgba(99,102,241,0.9)] transition hover:brightness-110"
            >
              See Voxly &rarr;
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-6 py-2.5 text-sm font-semibold backdrop-blur-sm transition hover:border-indigo-500/40 hover:bg-white/[0.08]"
            >
              Get in Touch
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-6 py-2.5 text-sm font-semibold backdrop-blur-sm transition hover:border-indigo-500/40 hover:bg-white/[0.08]"
            >
              Resume
            </a>
          </div>

          <dl
            className="rise-in mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/[0.06] pt-6"
            style={rise(420)}
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-white">{s.value}</dt>
                <dd className="text-xs text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise-in relative shrink-0" style={rise(120)}>
          <div className="avatar-ring relative h-52 w-52 rounded-full md:h-64 md:w-64">
            <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-[#0a0f1f]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                priority
                className="object-cover object-[center_15%]"
                sizes="(max-width: 768px) 208px, 256px"
              />
            </div>
          </div>

          <span className="float-a absolute -left-8 top-6 rounded-xl border border-white/10 bg-[#0a0f1f]/80 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-lg backdrop-blur-md">
            🤖 AI Agents
          </span>
          <span className="float-b absolute -right-6 top-1/2 rounded-xl border border-white/10 bg-[#0a0f1f]/80 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-lg backdrop-blur-md">
            ⚡ Next.js · Python
          </span>
          <span className="float-a absolute -bottom-3 left-8 rounded-xl border border-white/10 bg-[#0a0f1f]/80 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-lg backdrop-blur-md [animation-delay:-3s]">
            📍 {profile.location.split(",")[0]}
          </span>
        </div>
      </section>

      <TechMarquee />

      {/* ─── About ─── */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="About"
          title="A bit about me"
          description="From tutoring algorithms to deploying AI agents inside enterprises."
        />
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="max-w-2xl space-y-5">
            {profile.about.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 32)} delay={i * 100}>
                <p className="text-base leading-relaxed text-slate-400">{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400/70">
                Currently
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {profile.role}
              </p>
              <p className="text-sm text-slate-400">
                {profile.company} <span className="text-slate-600">· via HMS</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Deploying production AI agents into enterprise workflows — discovery,
                architecture, build, launch, and iteration.
              </p>
              <a
                href="#experience"
                className="mt-5 inline-block text-sm text-indigo-300 underline-offset-4 hover:underline"
              >
                Full experience &darr;
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Production AI delivery, and the teaching that sharpened the fundamentals behind it."
        />
        <ExperienceTimeline />
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Voxly is the one I'm proudest of. Below it: agents, ML models, and full-stack apps."
        />
        <Reveal className="mb-14">
          <FeaturedProject project={featured} />
        </Reveal>
        <ProjectsGrid projects={rest} />
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a role, an agent to ship, or a question about a project? Drop me a message."
        />
        <Reveal>
          <div className="glass glow-border max-w-xl rounded-2xl p-8">
            <ContactForm />
          </div>
        </Reveal>
      </section>

      {/* ─── Footer ─── */}
      <footer className="mx-auto max-w-6xl border-t border-white/[0.06] px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js, deployed on Vercel.
          </span>
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
