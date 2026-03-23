"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (data.honeypot) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* honeypot */}
      <input
        type="text"
        name="honeypot"
        autoComplete="off"
        tabIndex={-1}
        className="absolute h-0 w-0 overflow-hidden opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-zinc-400">Name</span>
          <input
            name="name"
            type="text"
            required
            maxLength={100}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
            placeholder="Jane Doe"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm text-zinc-400">Email</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
            placeholder="jane@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm text-zinc-400">Message</span>
        <textarea
          name="message"
          required
          maxLength={2000}
          rows={5}
          className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
          placeholder="Tell me about the role or project..."
        />
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
        >
          {status === "sending" ? "Sending\u2026" : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-emerald-400">
            Message sent — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">{errorMsg}</p>
        )}
      </div>
    </form>
  );
}
