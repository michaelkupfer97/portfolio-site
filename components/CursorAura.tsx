"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CursorAura() {
  const auraRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!auraRef.current) return;
    auraRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    auraRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!auraRef.current) return;
    auraRef.current.style.opacity = "0";
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={auraRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-5 opacity-0"
      style={{
        width: 400,
        height: 400,
        marginLeft: -200,
        marginTop: -200,
        background:
          "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(30px)",
        transition: "opacity 0.3s ease",
        willChange: "transform",
      }}
    />
  );
}
