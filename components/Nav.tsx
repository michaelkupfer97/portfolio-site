"use client";

import { useEffect, useState } from "react";
import { profile, socialLinks } from "@/lib/site";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/[0.06] bg-[#0a0f1f]/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold tracking-tight text-white">
          {profile.name.split(" ")[0]}
          <span className="text-indigo-400">.</span>
        </a>

        <div className="flex items-center gap-3.5 sm:gap-6">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`whitespace-nowrap text-xs transition sm:text-sm ${
                active === s.id ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {s.label}
            </a>
          ))}
          <span className="hidden h-4 w-px bg-white/10 sm:block" />
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="hidden whitespace-nowrap text-xs text-slate-400 transition hover:text-white sm:inline sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
