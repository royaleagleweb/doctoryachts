"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-white p-4">
        <p className="m-0 font-semibold text-navy">Message received</p>
        <p className="mt-2 mb-0 text-sm text-muted">We’ll reply during shop hours.</p>
        <button
          type="button"
          className="mt-3 font-mono text-xs font-semibold uppercase tracking-wider text-gold"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label-field">
            Name
          </label>
          <input id="name" name="name" required className="input-field" />
        </div>
        <div>
          <label htmlFor="email" className="label-field">
            Email
          </label>
          <input id="email" name="email" type="email" required className="input-field" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="label-field">
            Phone
          </label>
          <input id="phone" name="phone" className="input-field" />
        </div>
        <div>
          <label htmlFor="vessel" className="label-field">
            Vessel (optional)
          </label>
          <input id="vessel" name="vessel" className="input-field" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="label-field">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} className="input-field" />
      </div>
      {status === "error" && (
        <p className="m-0 border border-navy/25 bg-paper-deep p-2 text-sm text-navy">{error}</p>
      )}
      <button type="submit" className="btn" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
