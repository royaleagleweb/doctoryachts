"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  boatTypeOptions,
  cityOptions,
  lengthOptions,
  problemOptions,
  timeWindowOptions,
} from "@/lib/form-options";
import { getServiceById } from "@/lib/services";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const steps = [
  {
    id: "problem",
    label: "Problem",
    title: "What's going on with the boat?",
    help: "Tap the closest match. You can add details later.",
  },
  {
    id: "where",
    label: "Where & when",
    title: "Where is the boat, and when works?",
    help: "Preferred window only — we'll confirm the visit by phone or text.",
  },
  {
    id: "boat",
    label: "Boat",
    title: "Quick boat details",
    help: "Type and size help us bring the right tools. Name is optional.",
  },
  {
    id: "contact",
    label: "Contact",
    title: "How do we reach you?",
    help: "Phone is best for dockside work. We confirm during shop hours.",
  },
] as const;

function chipClass(selected: boolean) {
  return `chip w-full ${selected ? "is-on" : ""}`;
}

export function BookingForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const initialProblem =
    problemOptions.find((p) => p.serviceId === preselectedService)?.id ?? "";

  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldHint, setFieldHint] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const [problemId, setProblemId] = useState(initialProblem);
  const [problemDetail, setProblemDetail] = useState("");
  const [urgent, setUrgent] = useState(false);

  const [city, setCity] = useState("");
  const [marina, setMarina] = useState("");
  const [date, setDate] = useState("");
  const [timeWindow, setTimeWindow] = useState("");

  const [boatType, setBoatType] = useState("");
  const [boatLength, setBoatLength] = useState("");
  const [boatName, setBoatName] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const selectedProblem = useMemo(
    () => problemOptions.find((p) => p.id === problemId),
    [problemId],
  );

  const serviceId = selectedProblem?.serviceId || preselectedService || "diagnostics";
  const selectedService = getServiceById(serviceId);

  const minDate = useMemo(() => {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }, []);

  const progressPct = ((step + 1) / steps.length) * 100;

  function validateStep(s: number): string {
    if (s === 0 && !problemId) return "Pick what best describes the problem.";
    if (s === 1) {
      if (!city) return "Select the city or area.";
      if (!marina.trim()) return "Add marina name, slip, or dock address.";
      if (!date) return "Pick a preferred date.";
      if (!timeWindow) return "Pick a time window (or Flexible).";
    }
    if (s === 2 && !boatType) return "Select a boat type (or Other / not sure).";
    if (s === 3) {
      if (!name.trim()) return "Enter your name.";
      if (!phone.trim()) return "Enter a phone number so we can confirm.";
      if (!email.trim()) return "Enter an email for the confirmation.";
    }
    return "";
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

    const timeLabel =
      timeWindowOptions.find((t) => t.id === timeWindow)?.label || timeWindow;
    const timeHint =
      timeWindowOptions.find((t) => t.id === timeWindow)?.hint || "";
    const boatLabel =
      boatTypeOptions.find((b) => b.id === boatType)?.label || boatType;

    const notes = [
      selectedProblem ? `Problem: ${selectedProblem.label}` : "",
      problemDetail.trim() ? `Details: ${problemDetail.trim()}` : "",
      urgent ? "URGENT flagged by client" : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId,
          serviceTitle: selectedService?.title || selectedProblem?.label,
          problemId,
          problemLabel: selectedProblem?.label,
          vesselType: boatLabel,
          vesselName: boatName,
          vesselLength: boatLength,
          date,
          time: `${timeLabel}${timeHint ? ` (${timeHint})` : ""}`,
          timeWindow,
          city,
          location: marina,
          name,
          email,
          phone,
          notes,
          priority: urgent,
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
        <div className="border-b border-line bg-navy px-6 py-6">
          <p className="text-sm font-semibold  text-gold">
            Request received
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-pearl">
            Thanks — we got your request
          </h2>
          <p className="mt-2 text-sm text-steel">
            Not a locked appointment yet. We confirm access and timing during shop hours (
            {site.hours}).
          </p>
        </div>
        <div className="space-y-4 p-6">
          <dl className="grid gap-3 sm:grid-cols-2">
            {[
              { k: "Confirmation", v: confirmation },
              { k: "Problem", v: selectedProblem?.label || "—" },
              {
                k: "Preferred visit",
                v: `${date} · ${timeWindowOptions.find((t) => t.id === timeWindow)?.label || ""}${urgent ? " · Urgent" : ""}`,
              },
              { k: "Location", v: `${city} · ${marina}` },
            ].map((row) => (
              <div key={row.k} className="rounded-xl border border-line bg-white/[0.03] p-3">
                <dt className="text-xs  text-muted">{row.k}</dt>
                <dd className="mt-1 font-medium text-pearl">{row.v}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-steel">
            Stuck at the dock? Call now:{" "}
            <a href={site.phoneHref} className="font-semibold text-gold">
              {site.phone}
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn">
              Back home
            </Link>
            <Link href="/free-estimate" className="btn btn-ghost">
              Free estimate instead
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const current = steps[step];

  return (
    <form onSubmit={onSubmit} className="panel overflow-hidden">
      {/* Progress */}
      <div className="border-b border-line px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold  text-gold">
              Step {step + 1} of {steps.length}
            </p>
            <p className="mt-0.5 text-sm font-semibold text-pearl">{current.label}</p>
          </div>
          <p className="text-[0.7rem] text-muted">{Math.round(progressPct)}%</p>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-deep to-gold-light transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <ol className="mt-4 grid grid-cols-4 gap-1.5">
          {steps.map((s, i) => (
            <li
              key={s.id}
              className={`rounded-lg px-1 py-2 text-center text-[0.65rem] font-semibold  ${
                i === step
                  ? "bg-gold/15 text-gold"
                  : i < step
                    ? "text-pearl/80"
                    : "text-muted"
              }`}
            >
              {s.label}
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div>
          <h2 className="font-display m-0 text-xl font-semibold text-pearl sm:text-2xl">
            {current.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-steel">{current.help}</p>
        </div>

        {/* Step 1 — Problem */}
        {step === 0 && (
          <div className="space-y-4">
            <fieldset className="m-0 border-0 p-0">
              <legend className="sr-only">What&apos;s wrong</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {problemOptions.map((p) => {
                  const selected = problemId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      className={chipClass(selected)}
                      onClick={() => {
                        setProblemId(p.id);
                        setFieldHint("");
                      }}
                    >
                      <span className="block font-semibold text-pearl">{p.label}</span>
                      <span className="mt-0.5 block text-xs text-steel">{p.hint}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label className="label-field" htmlFor="problemDetail">
                Anything else we should know?{" "}
                <span className="font-normal normal-case tracking-normal text-muted">
                  (optional)
                </span>
              </label>
              <textarea
                id="problemDetail"
                rows={3}
                className="input-field"
                value={problemDetail}
                onChange={(e) => setProblemDetail(e.target.value)}
                placeholder="e.g. Battery is new, hear a click, sat for 5 days…"
              />
            </div>

            <label className={chipClass(urgent) + " flex items-start gap-3"}>
              <input
                type="checkbox"
                className="mt-1 accent-[var(--gold)]"
                checked={urgent}
                onChange={(e) => setUrgent(e.target.checked)}
              />
              <span>
                <span className="font-semibold text-pearl">This is urgent</span>
                <span className="mt-0.5 block text-xs text-steel">
                  No-start, overheating, bilge/flood risk. For emergencies call{" "}
                  <a href={site.phoneHref} className="font-semibold text-gold">
                    {site.phone}
                  </a>
                  .
                </span>
              </span>
            </label>
          </div>
        )}

        {/* Step 2 — Where & when */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <p className="label-field">City / area *</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {cityOptions.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`${chipClass(city === c)} text-sm font-medium text-pearl`}
                    onClick={() => {
                      setCity(c);
                      setFieldHint("");
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label-field" htmlFor="marina">
                Marina, slip, or dock address *
              </label>
              <input
                id="marina"
                className="input-field"
                value={marina}
                onChange={(e) => {
                  setMarina(e.target.value);
                  setFieldHint("");
                }}
                placeholder="e.g. Bahia Mar, slip B-12"
                autoComplete="street-address"
              />
              <p className="mt-1.5 text-xs text-muted">
                Gate code or parking tip? Add it here — saves time on arrival.
              </p>
            </div>

            <div>
              <label className="label-field" htmlFor="date">
                Preferred date *
              </label>
              <input
                id="date"
                type="date"
                min={minDate}
                className="input-field"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setFieldHint("");
                }}
              />
            </div>

            <div>
              <p className="label-field">Preferred time *</p>
              <div className="grid grid-cols-2 gap-2">
                {timeWindowOptions.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={chipClass(timeWindow === t.id)}
                    onClick={() => {
                      setTimeWindow(t.id);
                      setFieldHint("");
                    }}
                  >
                    <span className="block font-semibold text-pearl">{t.label}</span>
                    <span className="mt-0.5 block text-xs text-steel">{t.hint}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3 — Boat */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <p className="label-field">Boat type *</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {boatTypeOptions.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className={`${chipClass(boatType === b.id)} text-sm font-medium text-pearl`}
                    onClick={() => {
                      setBoatType(b.id);
                      setFieldHint("");
                    }}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="label-field">
                Approx. length{" "}
                <span className="font-normal normal-case tracking-normal text-muted">
                  (optional)
                </span>
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {lengthOptions.map((len) => (
                  <button
                    key={len}
                    type="button"
                    className={`${chipClass(boatLength === len)} text-sm text-pearl`}
                    onClick={() => setBoatLength(len)}
                  >
                    {len}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label-field" htmlFor="boatName">
                Boat name{" "}
                <span className="font-normal normal-case tracking-normal text-muted">
                  (optional)
                </span>
              </label>
              <input
                id="boatName"
                className="input-field"
                value={boatName}
                onChange={(e) => setBoatName(e.target.value)}
                placeholder="e.g. Sea Ya"
                autoComplete="off"
              />
            </div>
          </div>
        )}

        {/* Step 4 — Contact */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="label-field" htmlFor="name">
                Your name *
              </label>
              <input
                id="name"
                className="input-field"
                value={name}
                autoComplete="name"
                onChange={(e) => {
                  setName(e.target.value);
                  setFieldHint("");
                }}
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="label-field" htmlFor="phone">
                Phone *{" "}
                <span className="font-normal normal-case tracking-normal text-muted">
                  (best way to confirm)
                </span>
              </label>
              <input
                id="phone"
                type="tel"
                className="input-field"
                value={phone}
                autoComplete="tel"
                inputMode="tel"
                onChange={(e) => {
                  setPhone(e.target.value);
                  setFieldHint("");
                }}
                placeholder="(###) ###-####"
              />
            </div>
            <div>
              <label className="label-field" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                className="input-field"
                value={email}
                autoComplete="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setFieldHint("");
                }}
                placeholder="you@email.com"
              />
            </div>

            <div className="rounded-xl border border-line bg-white/[0.03] p-4">
              <p className="text-sm font-semibold  text-gold">
                Quick review
              </p>
              <ul className="mt-3 space-y-2 text-sm text-steel">
                <li>
                  <span className="text-muted">Problem:</span>{" "}
                  <span className="text-pearl">{selectedProblem?.label || "—"}</span>
                </li>
                <li>
                  <span className="text-muted">Where:</span>{" "}
                  <span className="text-pearl">
                    {city || "—"}
                    {marina ? ` · ${marina}` : ""}
                  </span>
                </li>
                <li>
                  <span className="text-muted">When:</span>{" "}
                  <span className="text-pearl">
                    {date || "—"}
                    {timeWindow
                      ? ` · ${timeWindowOptions.find((t) => t.id === timeWindow)?.label}`
                      : ""}
                    {urgent ? " · Urgent" : ""}
                  </span>
                </li>
                <li>
                  <span className="text-muted">Boat:</span>{" "}
                  <span className="text-pearl">
                    {boatTypeOptions.find((b) => b.id === boatType)?.label || "—"}
                    {boatLength ? ` · ${boatLength}` : ""}
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-muted">
                Submitting is a <strong className="text-pearl">request</strong>, not a locked
                appointment. Prefer a quote first?{" "}
                <Link href="/free-estimate" className="font-semibold text-gold">
                  Free estimate
                </Link>
                .
              </p>
            </div>
          </div>
        )}

        {fieldHint && (
          <p
            role="alert"
            className="m-0 rounded-xl border border-gold/40 bg-gold/10 px-3 py-2.5 text-sm text-pearl"
          >
            {fieldHint}
          </p>
        )}

        {status === "error" && (
          <p
            role="alert"
            className="m-0 rounded-xl border border-gold/30 bg-navy-deep p-3 text-sm text-pearl"
          >
            {error}{" "}
            <span className="mt-1 block">
              Or call{" "}
              <a href={site.phoneHref} className="font-semibold text-gold underline">
                {site.phone}
              </a>
              .
            </span>
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4">
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
            className="hidden text-sm font-semibold text-steel no-underline hover:text-gold sm:inline"
          >
            Call {site.phone}
          </a>
          {step < steps.length - 1 ? (
            <button type="button" className="btn min-w-[8.5rem]" onClick={goNext}>
              Continue →
            </button>
          ) : (
            <button
              type="submit"
              className="btn min-w-[8.5rem] disabled:opacity-40"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Submit request"}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
