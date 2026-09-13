import { techStack } from "@/lib/site";

export default function TechMarquee() {
  // Duplicate the list so the track can loop seamlessly at -50%.
  const items = [...techStack, ...techStack];

  return (
    <div
      className="marquee w-full overflow-hidden border-y border-white/[0.05] bg-white/[0.015] py-4"
      aria-label="Technologies I work with"
    >
      <div className="marquee-track gap-10">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex shrink-0 items-center gap-3 text-sm font-medium tracking-wide text-slate-400"
            aria-hidden={i >= techStack.length}
          >
            <span className="h-1 w-1 rounded-full bg-indigo-400/70" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
