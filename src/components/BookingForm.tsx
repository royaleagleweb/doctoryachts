"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { locations } from "@/lib/locations";
import { bookingServices, timeSlots, vesselTypes } from "@/lib/services";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const steps = [
  {
    id: "service",
    label: "Service",
    short: "What you need",
    title: "What do you need help with?",
    help: "Pick the closest match. You can explain symptoms in more detail at the end.",
  },
  {
    id: "vessel",
    label: "Boat",
    short: "Your boat",
    title: "Tell us about the boat",
    help: "Vessel type is required. Name and length help us plan tools and time.",
  },
  {
    id: "when",
    label: "When & where",
    short: "Schedule",
    title: "When and where should we come?",
    help: "This is your preferred window. We’ll confirm the actual appointment by phone or email.",
  },
  {
    id: "contact",
    label: "Contact",
    short: "Your info",
    title: "How do we reach you?",
    help: "We’ll confirm during shop hours. Urgent jobs: call us now.",
  },
] as const;

function cleanServiceTitle(title: string) {
  return title.replace(/\s+Fort Lauderdale$/i, "").trim();
}

export function BookingForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") || "";
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldHint, setFieldHint] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [serviceId, setServiceId] = useState(preselected);
  const [vesselType, setVesselType] = useState("");
  const [vesselName, setVesselName] = useState("");
  const [vesselLength, setVesselLength] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [priority, setPriority] = useState(false);

  const selectedService = useMemo(
    () => bookingServices.find((s) => s.id === serviceId),
    [serviceId],
  );

  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  }, []);

  const progressPct = ((step + 1) / steps.length) * 100;

  function validateStep(s: number): string {
    if (s === 0 && !serviceId) return "Please select a service to continue.";
    if (s === 1 && !vesselType) return "Please select a vessel type.";
    if (s === 2) {
      if (!date) return "Please choose a preferred date.";
      if (!time) return "Please choose a preferred time.";
      if (!location.trim()) return "Please enter marina, slip, or dock location.";
    }
    if (s === 3) {
      if (!name.trim()) return "Please enter your name.";
      if (!email.trim()) return "Please enter your email.";
      if (!phone.trim()) return "Please enter your phone number.";
    }
    return "";
  }

  function canContinue() {
    return validateStep(step) === "";
  }

  function goNext() {
    const hint = validateStep(step);
    if (hint) {
      setFieldHint(hint);
      return;
    }
    setFieldHint("");
    setStep((s) => Math.min(steps.length - 1, s + 1));
  }

  function goBack() {
    setFieldHint("");
    setError("");
    setStep((s) => Math.max(0, s - 1));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const hint = validateStep(3);
    if (hint) {
      setFieldHint(hint);
      return;
    }
    setStatus("loading");
    setError("");
    setFieldHint("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId,
          serviceTitle: selectedService?.title,
          vesselType,
          vesselName,
          vesselLength,
          date,
          time,
          city,
          location,
          name,
          email,
          phone,
          notes,
          priority,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Booking failed");
      setConfirmation(json.confirmationId);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to complete booking");
    }
  }

  if (status === "success") {
    return (
      <div className="panel overflow-hidden">
        <div className="border-b border-line bg-navy px-6 py-5 text-paper">
          <p className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/80">
            Request received
          </p>
          <h2 className="font-display mt-1 text-2xl font-semibold">
            Thanks — we got your booking request
          </h2>
          <p className="mt-2 text-sm text-paper/85">
            This is <strong>not</strong> a final confirmed appointment yet. We’ll review access and
            availability, then confirm by phone or email during shop hours ({site.hours}).
          </p>
        </div>
        <div className="space-y-5 p-6">
          <dl className="grid gap-3 sm:grid-cols-2">
            <div className="border border-line bg-white p-3">
              <dt className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                Confirmation ID
              </dt>
              <dd className="mt-1 font-mono text-lg font-semibold text-navy">{confirmation}</dd>
            </div>
            <div className="border border-line bg-white p-3">
              <dt className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                Service
              </dt>
              <dd className="mt-1 font-semibold text-navy">
                {selectedService ? cleanServiceTitle(selectedService.title) : "—"}
              </dd>
            </div>
            <div className="border border-line bg-white p-3">
              <dt className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                Preferred visit
              </dt>
              <dd className="mt-1 text-navy">
                {date} · {time}
                {priority ? " · Urgent" : ""}
              </dd>
            </div>
            <div className="border border-line bg-white p-3">
              <dt className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                Location
              </dt>
              <dd className="mt-1 text-navy">
                {city ? `${city} · ` : ""}
                {location}
              </dd>
            </div>
          </dl>
          <p className="text-sm text-muted">
            Urgent no-start or safety issue? Call now:{" "}
            <a href={site.phoneHref} className="font-semibold text-gold">
              {site.phone}
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn">
              Back home
            </Link>
            <Link href="/free-estimate" className="btn btn-ghost">
              Free estimate form
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const current = steps[step];

  return (
    <form onSubmit={onSubmit} className="panel overflow-hidden">
      {/* Progress header */}
      <div className="border-b border-line bg-white px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-gold">
              Step {step + 1} of {steps.length}
            </p>
            <p className="mt-0.5 text-sm font-semibold text-navy">{current.short}</p>
          </div>
          <p className="font-mono text-[0.65rem] text-muted">{Math.round(progressPct)}%</p>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line/60">
          <div
            className="h-full rounded-full bg-gold transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <ol className="mt-4 hidden gap-2 sm:grid sm:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.id}
              className={`rounded border px-2 py-2 text-center ${
                i === step
                  ? "border-gold bg-white text-navy"
                  : i < step
                    ? "border-navy/40 bg-white/60 text-navy"
                    : "border-line text-muted"
              }`}
            >
              <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-wider">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-0.5 block text-xs font-medium">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div>
          <h2 className="font-display m-0 text-xl font-semibold text-navy sm:text-2xl">
            {current.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{current.help}</p>
        </div>

        {/* Step 1 — Service */}
        {step === 0 && (
          <fieldset className="m-0 space-y-2 border-0 p-0">
            <legend className="sr-only">Choose a service</legend>
            {bookingServices.map((s) => {
              const selected = serviceId === s.id;
              return (
                <label
                  key={s.id}
                  className={`flex cursor-pointer items-start gap-3 rounded border p-3.5 transition ${
                    selected
                      ? "border-gold bg-white shadow-sm"
                      : "border-line hover:border-navy/25"
                  }`}
                >
                  <input
                    type="radio"
                    name="service"
                    className="mt-1.5 accent-[var(--gold)]"
                    checked={selected}
                    onChange={() => {
                      setServiceId(s.id);
                      setFieldHint("");
                    }}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-semibold text-navy">{cleanServiceTitle(s.title)}</span>
                      {selected && (
                        <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-gold">
                          Selected
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {s.summary}
                    </span>
                  </span>
                </label>
              );
            })}
          </fieldset>
        )}

        {/* Step 2 — Vessel */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="label-field" htmlFor="vesselType">
                Vessel type <span className="text-gold">*</span>
              </label>
              <select
                id="vesselType"
                className="input-field"
                value={vesselType}
                required
                onChange={(e) => {
                  setVesselType(e.target.value);
                  setFieldHint("");
                }}
              >
                <option value="">Select vessel type…</option>
                {vesselTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label-field" htmlFor="vesselName">
                  Boat name <span className="font-normal normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="vesselName"
                  className="input-field"
                  value={vesselName}
                  onChange={(e) => setVesselName(e.target.value)}
                  placeholder="e.g. Sea Ya"
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="label-field" htmlFor="vesselLength">
                  Length <span className="font-normal normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="vesselLength"
                  className="input-field"
                  value={vesselLength}
                  onChange={(e) => setVesselLength(e.target.value)}
                  placeholder="e.g. 32 ft"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3 — When & where */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label-field" htmlFor="date">
                  Preferred date <span className="text-gold">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  min={minDate}
                  className="input-field"
                  value={date}
                  required
                  onChange={(e) => {
                    setDate(e.target.value);
                    setFieldHint("");
                  }}
                />
              </div>
              <div>
                <label className="label-field" htmlFor="time">
                  Preferred time <span className="text-gold">*</span>
                </label>
                <select
                  id="time"
                  className="input-field"
                  value={time}
                  required
                  onChange={(e) => {
                    setTime(e.target.value);
                    setFieldHint("");
                  }}
                >
                  <option value="">Select time…</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="label-field" htmlFor="city">
                City / area{" "}
                <span className="font-normal normal-case tracking-normal">(recommended)</span>
              </label>
              <select
                id="city"
                className="input-field"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select area…</option>
                {locations.map((l) => (
                  <option key={l.slug} value={l.name}>
                    {l.name}, {l.state}
                  </option>
                ))}
                <option value="Other South Florida">Other South Florida</option>
              </select>
            </div>
            <div>
              <label className="label-field" htmlFor="location">
                Marina, slip, or dock address <span className="text-gold">*</span>
              </label>
              <input
                id="location"
                className="input-field"
                value={location}
                required
                onChange={(e) => {
                  setLocation(e.target.value);
                  setFieldHint("");
                }}
                placeholder="e.g. Bahia Mar, slip B-12 · gate code if needed"
                autoComplete="street-address"
              />
              <p className="mt-1.5 text-xs text-muted">
                Include gate codes, parking notes, or dock access details if you have them.
              </p>
            </div>
            <label
              className={`flex cursor-pointer items-start gap-3 rounded border p-3.5 text-sm ${
                priority ? "border-gold bg-white" : "border-line"
              }`}
            >
              <input
                type="checkbox"
                className="mt-0.5 accent-[var(--gold)]"
                checked={priority}
                onChange={(e) => setPriority(e.target.checked)}
              />
              <span>
                <span className="font-semibold text-navy">This is urgent</span>
                <span className="mt-0.5 block text-muted">
                  No-start, overheating, bilge/flood risk, or safety issue. For emergencies call{" "}
                  <a href={site.phoneHref} className="font-semibold text-gold">
                    {site.phone}
                  </a>
                  .
                </span>
              </span>
            </label>
          </div>
        )}

        {/* Step 4 — Contact */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="label-field" htmlFor="name">
                Your name <span className="text-gold">*</span>
              </label>
              <input
                id="name"
                className="input-field"
                value={name}
                required
                autoComplete="name"
                onChange={(e) => {
                  setName(e.target.value);
                  setFieldHint("");
                }}
                placeholder="Full name"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label-field" htmlFor="email">
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  value={email}
                  required
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setFieldHint("");
                  }}
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="label-field" htmlFor="phone">
                  Phone <span className="text-gold">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="input-field"
                  value={phone}
                  required
                  autoComplete="tel"
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setFieldHint("");
                  }}
                  placeholder="(###) ###-####"
                />
              </div>
            </div>
            <div>
              <label className="label-field" htmlFor="notes">
                What’s wrong?{" "}
                <span className="font-normal normal-case tracking-normal">(recommended)</span>
              </label>
              <textarea
                id="notes"
                rows={4}
                className="input-field"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Won’t start after sitting 4 days · battery is new · hear click but no crank…"
              />
            </div>

            {/* Clear review card */}
            <div className="rounded border border-line bg-white p-4">
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-gold">
                Review before submit
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-muted">Service</dt>
                  <dd className="text-right font-medium text-navy">
                    {selectedService ? cleanServiceTitle(selectedService.title) : "—"}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-muted">Boat</dt>
                  <dd className="text-right font-medium text-navy">
                    {vesselType || "—"}
                    {vesselLength ? ` · ${vesselLength}` : ""}
                    {vesselName ? ` · “${vesselName}”` : ""}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-muted">When</dt>
                  <dd className="text-right font-medium text-navy">
                    {date || "—"} {time ? `· ${time}` : ""}
                    {priority ? " · Urgent" : ""}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Where</dt>
                  <dd className="max-w-[60%] text-right font-medium text-navy">
                    {city ? `${city} · ` : ""}
                    {location || "—"}
                  </dd>
                </div>
              </dl>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Submitting sends a <strong className="text-navy">service request</strong>. We confirm
                the visit before it is locked in. Prefer a quote first?{" "}
                <Link href="/free-estimate" className="font-semibold text-navy">
                  Free estimate form
                </Link>
                .
              </p>
            </div>
          </div>
        )}

        {fieldHint && (
          <p
            role="alert"
            className="m-0 rounded border border-gold/40 bg-gold/10 px-3 py-2 text-sm text-navy"
          >
            {fieldHint}
          </p>
        )}

        {status === "error" && (
          <p
            role="alert"
            className="m-0 rounded border border-navy/25 bg-paper-deep p-3 text-sm text-navy"
          >
            {error}{" "}
            <span className="block mt-1">
              You can also call{" "}
              <a href={site.phoneHref} className="font-semibold underline">
                {site.phone}
              </a>
              .
            </span>
          </p>
        )}
      </div>

      {/* Footer actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-white/50 px-5 py-4">
        <button
          type="button"
          className="btn btn-ghost disabled:opacity-40"
          onClick={goBack}
          disabled={step === 0 || status === "loading"}
        >
          ← Back
        </button>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden text-sm font-semibold text-muted no-underline hover:text-gold sm:inline"
          >
            Or call {site.phone}
          </a>
          {step < steps.length - 1 ? (
            <button type="button" className="btn" onClick={goNext}>
              Continue →
            </button>
          ) : (
            <button
              type="submit"
              className="btn disabled:opacity-40"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Submit booking request"}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
