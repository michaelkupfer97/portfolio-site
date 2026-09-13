import { ImageResponse } from "next/og";
import { profile } from "@/lib/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 15% 20%, rgba(99,102,241,0.45), transparent 45%), radial-gradient(circle at 85% 80%, rgba(34,211,238,0.35), transparent 45%), #0a0f1f",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            color: "#a7f3d0",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#34d399",
            }}
          />
          {profile.role} @ {profile.company}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, fontWeight: 700, color: "#fff", letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 34, color: "#c7d2fe" }}>
            Production AI agents · Voice AI · LLM pipelines · Full-stack
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#94a3b8",
          }}
        >
          <span>portfolio-site-nine-xi-86.vercel.app</span>
          <span>github.com/michaelkupfer97</span>
        </div>
      </div>
    ),
    size,
  );
}
