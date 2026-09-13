import { education, experience } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function ExperienceTimeline() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
      <ol className="relative space-y-10 pl-8">
        <span
          aria-hidden="true"
          className="timeline-line absolute left-[9px] top-2 h-[calc(100%-1rem)] w-px"
        />
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}`} as="li" delay={i * 120} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-8 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border ${
                job.current
                  ? "border-indigo-400/60 bg-indigo-500/20"
                  : "border-white/15 bg-[#0a0f1f]"
              }`}
            >
              <span
                className={`relative h-2 w-2 rounded-full ${
                  job.current ? "status-dot bg-indigo-400" : "bg-slate-500"
                }`}
              />
            </span>

            <div className="glass glow-border rounded-2xl p-6 md:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    <span className="font-medium text-indigo-300">{job.company}</span>
                    {job.via && <span className="text-slate-500"> · {job.via}</span>}
                    <span className="text-slate-500"> · {job.location}</span>
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    job.current
                      ? "border border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                      : "border border-white/10 bg-white/[0.03] text-slate-400"
                  }`}
                >
                  {job.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">{job.summary}</p>

              <ul className="mt-4 space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400/70" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-indigo-500/15 bg-indigo-500/[0.06] px-3 py-0.5 text-xs text-indigo-300/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={200}>
        <aside className="glass rounded-2xl p-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400/70">
            Education
          </p>
          {education.map((e) => (
            <div key={e.degree} className="mt-4">
              <h3 className="text-base font-semibold text-white">{e.degree}</h3>
              <p className="mt-1 text-sm text-slate-300">{e.school}</p>
              <p className="mt-1 text-xs text-slate-500">{e.period}</p>
              {e.note && <p className="mt-3 text-sm text-slate-400">{e.note}</p>}
            </div>
          ))}

          <div className="mt-8 border-t border-white/[0.06] pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400/70">
              How I work
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex gap-2.5">
                <span className="text-cyan-300">01</span>
                Ship a working slice first, then harden it with tests.
              </li>
              <li className="flex gap-2.5">
                <span className="text-cyan-300">02</span>
                Deterministic code for numbers, LLMs for language and intent.
              </li>
              <li className="flex gap-2.5">
                <span className="text-cyan-300">03</span>
                Leave the client team able to own it without me.
              </li>
            </ul>
          </div>
        </aside>
      </Reveal>
    </div>
  );
}
