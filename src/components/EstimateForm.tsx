"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  boatTypeOptions,
  cityOptions,
  problemOptions,
  urgencyOptions,
} from "@/lib/form-options";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

function chipClass(selected: boolean) {
  return `cursor-pointer rounded-xl border px-3 py-3 text-left transition ${
    selected
      ? "border-gold bg-gold/10 shadow-[0_0_0_1px_rgba(196,163,90,0.35)]"
      : "border-line bg-white/[0.02] hover:border-gold/40"
  }`;
}

export function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [hint, setHint] = useState("");

  const [problemId, setProblemId] = useState("");
  const [details, setDetails] = useState("");
  const [city, setCity] = useState("");
  const [marina, setMarina] = useState("");
  const [boatType, setBoatType] = useState("");
  const [whenNeeded, setWhenNeeded] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function validate(): string {
    if (!problemId) return "Pick what best describes the problem.";
    if (!details.trim() || details.trim().length < 8)
      return "Add a short note about what's happening (a sentence is enough).";
    if (!city) return "Select the city or area.";
    if (!name.trim()) return "Enter your name.";
    if (!phone.trim()) return "Enter a phone number so we can call back.";
    if (!email.trim()) return "Enter your email.";
    return "";
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setHint(v);
      return;
    }
    setStatus("loading");
    setError("");
    setHint("");

    const problem = problemOptions.find((p) => p.id === problemId);
    const boat = boatTypeOptions.find((b) => b.id === boatType);
    const urgency = urgencyOptions.find((u) => u.id === whenNeeded);

    const message = [
      "FREE ESTIMATE REQUEST",
      `Problem: ${problem?.label || problemId}`,
      details.trim() ? `Details: ${details.trim()}` : "",
      city ? `City: ${city}` : "",
      marina.trim() ? `Marina / dock: ${marina.trim()}` : "",
      boat ? `Boat type: ${boat.label}` : "",
      urgency ? `When needed: ${urgency.label}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          vessel: boat?.label || "",
          city,
          marina,
          problemId,
          whenNeeded,
          formType: "free-estimate",
          message,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send");
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-4">
        <div className="rounded-xl border border-gold/30 bg-gold/10 p-5">
          <p className="text-sm font-semibold  text-gold">
            Estimate request sent
          </p>
          <h3 className="font-display mt-2 text-xl font-semibold text-pearl">
            Thanks — we&apos;ll reply with next steps
          </h3>
          <p className="mt-2 text-sm text-steel">
            Expect a response during shop hours ({site.hours}). Urgent no-start? Call{" "}
            <a href={site.phoneHref} className="font-semibold text-gold">
              {site.phone}
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
            Send another
          </button>
          <Link href="/book" className="btn">
            Book a visit instead
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* 1. Problem */}
      <section className="space-y-3">
        <div>
          <p className="label-field">1. What&apos;s wrong? *</p>
          <p className="mb-2 text-xs text-muted">Tap one — closest match is fine.</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {problemOptions.map((p) => (
            <button
              key={p.id}
              type="button"
              className={chipClass(problemId === p.id)}
              onClick={() => {
                setProblemId(p.id);
                setHint("");
              }}
            >
              <span className="block font-semibold text-pearl">{p.label}</span>
              <span className="mt-0.5 block text-xs text-steel">{p.hint}</span>
            </button>
          ))}
        </div>
        <div>
          <label className="label-field" htmlFor="est-details">
            Short description *
          </label>
          <textarea
            id="est-details"
            rows={3}
            className="input-field"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
              setHint("");
            }}
            placeholder="e.g. Won't crank after sitting 3 days. Battery is about a year old."
          />
        </div>
      </section>

      {/* 2. Location */}
      <section className="space-y-3">
        <p className="label-field">2. Where is the boat? *</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {cityOptions.map((c) => (
            <button
              key={c}
              type="button"
              className={`${chipClass(city === c)} text-sm font-medium text-pearl`}
              onClick={() => {
                setCity(c);
                setHint("");
              }}
            >
              {c}
            </button>
          ))}
        </div>
        <div>
          <label className="label-field" htmlFor="est-marina">
            Marina / dock{" "}
            <span className="font-normal normal-case tracking-normal text-muted">
              (recommended)
            </span>
          </label>
          <input
            id="est-marina"
            className="input-field"
            value={marina}
            onChange={(e) => setMarina(e.target.value)}
            placeholder="Marina name, slip, or private dock"
          />
        </div>
      </section>

      {/* 3. Boat + timing */}
      <section className="space-y-3">
        <p className="label-field">
          3. Boat type{" "}
          <span className="font-normal normal-case tracking-normal text-muted">(optional)</span>
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {boatTypeOptions.map((b) => (
            <button
              key={b.id}
              type="button"
              className={`${chipClass(boatType === b.id)} text-sm text-pearl`}
              onClick={() => setBoatType(b.id)}
            >
              {b.label}
            </button>
          ))}
        </div>
        <div>
          <p className="label-field">
            How soon do you need it?{" "}
            <span className="font-normal normal-case tracking-normal text-muted">(optional)</span>
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            {urgencyOptions.map((u) => (
              <button
                key={u.id}
                type="button"
                className={chipClass(whenNeeded === u.id)}
                onClick={() => setWhenNeeded(u.id)}
              >
                <span className="block font-semibold text-pearl">{u.label}</span>
                <span className="mt-0.5 block text-xs text-steel">{u.hint}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact */}
      <section className="space-y-3">
        <p className="label-field">4. How do we reach you?</p>
        <div>
          <label className="label-field" htmlFor="est-name">
            Name *
          </label>
          <input
            id="est-name"
            className="input-field"
            value={name}
            autoComplete="name"
            onChange={(e) => {
              setName(e.target.value);
              setHint("");
            }}
            placeholder="Full name"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="label-field" htmlFor="est-phone">
              Phone *
            </label>
            <input
              id="est-phone"
              type="tel"
              className="input-field"
              value={phone}
              autoComplete="tel"
              inputMode="tel"
              onChange={(e) => {
                setPhone(e.target.value);
                setHint("");
              }}
              placeholder="(###) ###-####"
            />
          </div>
          <div>
            <label className="label-field" htmlFor="est-email">
              Email *
            </label>
            <input
              id="est-email"
              type="email"
              className="input-field"
              value={email}
              autoComplete="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setHint("");
              }}
              placeholder="you@email.com"
            />
          </div>
        </div>
      </section>

      {hint && (
        <p
          role="alert"
          className="m-0 rounded-xl border border-gold/40 bg-gold/10 px-3 py-2.5 text-sm text-pearl"
        >
          {hint}
        </p>
      )}
      {status === "error" && (
        <p
          role="alert"
          className="m-0 rounded-xl border border-gold/30 bg-navy-deep p-3 text-sm text-pearl"
        >
          {error} Call{" "}
          <a href={site.phoneHref} className="font-semibold text-gold">
            {site.phone}
          </a>{" "}
          if you need help now.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 text-xs text-muted">
          Free estimate · no obligation · reply during {site.hours.split("·")[0]?.trim() || "shop hours"}
        </p>
        <button type="submit" className="btn w-full sm:w-auto" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Get free estimate"}
        </button>
      </div>

      <p className="text-center text-xs text-muted sm:text-left">
        Ready to schedule a visit?{" "}
        <Link href="/book" className="font-semibold text-gold">
          Book online
        </Link>
      </p>
    </form>
  );
}
