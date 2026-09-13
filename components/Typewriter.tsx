"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const RM_QUERY = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia(RM_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const getReducedMotion = () => window.matchMedia(RM_QUERY).matches;
const getServerReducedMotion = () => false;

interface Props {
  phrases: readonly string[];
  className?: string;
  typingMs?: number;
  deletingMs?: number;
  holdMs?: number;
}

export default function Typewriter({
  phrases,
  className = "",
  typingMs = 55,
  deletingMs = 28,
  holdMs = 1800,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );

  useEffect(() => {
    if (reduced) return;
    const full = phrases[index % phrases.length];

    let delay = deleting ? deletingMs : typingMs;
    if (!deleting && text === full) delay = holdMs;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting) {
        if (text === full) setDeleting(true);
        else setText(full.slice(0, text.length + 1));
      } else {
        if (text === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
        } else setText(full.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, typingMs, deletingMs, holdMs, reduced]);

  if (reduced) {
    return <span className={className}>{phrases[0]}</span>;
  }

  return (
    <span className={`caret ${className}`} aria-live="polite">
      {text}
    </span>
  );
}
