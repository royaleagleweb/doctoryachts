"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  boatTypeOptions,
  cityOptions,
  lengthOptions,
  problemOptions,
  timeWindowOptions,
} from "@/lib/form-options";
import { t } from "@/lib/copy";
import { localeFromPath, pathFor } from "@/lib/i18n";
import { readDelivery } from "@/lib/form-delivery";
import { getServiceById } from "@/lib/services";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

function chipClass(selected: boolean) {
  return `chip w-full ${selected ? "is-on" : ""}`;
}

export function BookingForm() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const f = t(locale).forms;
  const es = locale === "es";
  const steps = [
    { id: "problem", label: f.problem.label, title: f.problem.title, help: f.problem.help },
    { id: "where", label: f.where.label, title: f.where.title, help: f.where.help },
    { id: "boat", label: f.boat.label, title: f.boat.title, help: f.boat.help },
    { id: "contact", label: f.contact.label, title: f.contact.title, help: f.contact.help },
  ] as const;
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
    if (s === 0 && !problemId) return f.pickProblem;
    if (s === 1) {
      if (!city) return f.selectCity;
      if (!marina.trim()) return f.addMarina;
      if (!date) return f.pickDate;
      if (!timeWindow) return f.pickTime;
    }
    if (s === 2 && !boatType) return f.selectBoat;
    if (s === 3) {
      if (!name.trim()) return f.enterName;
      if (!phone.trim()) return f.enterPhone;
      if (!email.trim()) return f.enterEmail;
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
      const delivery = readDelivery(res.ok, json, f.sendFailed);
      if (!delivery.ok) throw new Error(delivery.error);
      setConfirmation(delivery.confirmationId || json.confirmationId);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : f.sendFailed);
    }
  }

  if (status === "success") {
    return (
      <div className="panel overflow-hidden">
        <div className="border-b border-line bg-navy px-6 py-6">
          <p className="text-sm font-semibold  text-gold">
            {f.received}
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-white">
            {f.thanks}
          </h2>
          <p className="mt-2 text-sm text-pearl">
            {f.notLocked}
          </p>
        </div>
        <div className="space-y-4 p-6">
          <dl className="grid gap-3 sm:grid-cols-2">
            {[
              { k: f.confirmation, v: confirmation },
              { k: f.reviewProblem, v: (es ? selectedProblem?.labelEs : selectedProblem?.label) || "—" },
              {
                k: f.preferredVisit,
                v: `${date} · ${es ? timeWindowOptions.find((t) => t.id === timeWindow)?.labelEs : timeWindowOptions.find((t) => t.id === timeWindow)?.label || ""}${urgent ? ` · ${f.urgentFlag}` : ""}`,
              },
              { k: f.location, v: `${city} · ${marina}` },
            ].map((row) => (
              <div key={row.k} className="border-l border-line pl-3 py-2">
                <dt className="text-xs  text-muted">{row.k}</dt>
                <dd className="mt-1 font-medium text-navy">{row.v}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-steel">
            {f.stuck}{" "}
            <a href={site.phoneHref} className="font-semibold text-gold">
              {site.phone}
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={pathFor(locale, "/")} className="btn">
              {f.backHome}
            </Link>
            <Link href={pathFor(locale, "/free-estimate")} className="btn btn-ghost">
              {f.estimateInstead}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const current = steps[step];

  return (
    <form onSubmit={onSubmit} className="max-w-2xl">
      {/* Progress */}
      <div className="pb-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold  text-gold">
              {f.stepOf(step + 1, steps.length)}
            </p>
            <p className="mt-0.5 text-sm font-semibold text-navy">{current.label}</p>
          </div>
          <p className="text-[0.7rem] text-muted">{Math.round(progressPct)}%</p>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-paper-deep">
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
                    ? "text-navy"
                    : "text-steel"
              }`}
            >
              {s.label}
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-5">
        <div>
          <h2 className="font-display m-0 text-xl font-semibold text-navy sm:text-2xl">
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
                      <span className="block font-semibold text-navy">{es ? p.labelEs : p.label}</span>
                      <span className="mt-0.5 block text-xs text-steel">{es ? p.hintEs : p.hint}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label className="label-field" htmlFor="problemDetail">
                {f.anythingElse}{" "}
                <span className="font-normal normal-case tracking-normal text-muted">
                  {f.optional}
                </span>
              </label>
              <textarea
                id="problemDetail"
                rows={3}
                className="input-field"
                value={problemDetail}
                onChange={(e) => setProblemDetail(e.target.value)}
                placeholder={f.detailPlaceholder}
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
                <span className="font-semibold text-navy">{f.urgent}</span>
                <span className="mt-0.5 block text-xs text-steel">
                  {f.urgentHint}
                </span>
              </span>
            </label>
          </div>
        )}

        {/* Step 2 — Where & when */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <p className="label-field">{f.city}</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {cityOptions.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`${chipClass(city === c.id)} text-sm font-medium text-navy`}
                    onClick={() => {
                      setCity(c.id);
                      setFieldHint("");
                    }}
                  >
                    {es ? c.labelEs : c.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label-field" htmlFor="marina">
                {f.marina}
              </label>
              <input
                id="marina"
                className="input-field"
                value={marina}
                onChange={(e) => {
                  setMarina(e.target.value);
                  setFieldHint("");
                }}
                placeholder={f.marinaPlaceholder}
                autoComplete="street-address"
              />
              <p className="mt-1.5 text-xs text-muted">
                {f.marinaHint}
              </p>
            </div>

            <div>
              <label className="label-field" htmlFor="date">
                {f.date}
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
              <p className="label-field">{f.time}</p>
              <div className="grid grid-cols-2 gap-2">
                {timeWindowOptions.map((tw) => (
                  <button
                    key={tw.id}
                    type="button"
                    className={chipClass(timeWindow === tw.id)}
                    onClick={() => {
                      setTimeWindow(tw.id);
                      setFieldHint("");
                    }}
                  >
                    <span className="block font-semibold text-navy">{es ? tw.labelEs : tw.label}</span>
                    <span className="mt-0.5 block text-xs text-steel">{es ? tw.hintEs : tw.hint}</span>
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
              <p className="label-field">{f.boatType}</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {boatTypeOptions.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className={`${chipClass(boatType === b.id)} text-sm font-medium text-navy`}
                    onClick={() => {
                      setBoatType(b.id);
                      setFieldHint("");
                    }}
                  >
                    {es ? b.labelEs : b.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="label-field">
                {f.length}{" "}
                <span className="font-normal normal-case tracking-normal text-muted">
                  {f.optional}
                </span>
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {lengthOptions.map((len) => (
                  <button
                    key={len.id}
                    type="button"
                    className={`${chipClass(boatLength === len.id)} text-sm text-navy`}
                    onClick={() => setBoatLength(len.id)}
                  >
                    {es ? len.labelEs : len.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label-field" htmlFor="boatName">
                {f.boatName}{" "}
                <span className="font-normal normal-case tracking-normal text-muted">
                  {f.optional}
                </span>
              </label>
              <input
                id="boatName"
                className="input-field"
                value={boatName}
                onChange={(e) => setBoatName(e.target.value)}
                placeholder={f.boatNamePlaceholder}
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
                {f.yourName}
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
                placeholder={f.fullName}
              />
            </div>
            <div>
              <label className="label-field" htmlFor="phone">
                {f.phone}{" "}
                <span className="font-normal normal-case tracking-normal text-muted">
                  {f.phoneBest}
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
                {f.email}
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

            <div className="border-l border-line pl-4 py-1">
              <p className="text-sm font-semibold  text-gold">
                {f.review}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-steel">
                <li>
                  <span className="text-muted">{f.reviewProblem}:</span>{" "}
                  <span className="text-navy">{(es ? selectedProblem?.labelEs : selectedProblem?.label) || "—"}</span>
                </li>
                <li>
                  <span className="text-muted">{f.reviewWhere}:</span>{" "}
                  <span className="text-navy">
                    {city || "—"}
                    {marina ? ` · ${marina}` : ""}
                  </span>
                </li>
                <li>
                  <span className="text-muted">{f.reviewWhen}:</span>{" "}
                  <span className="text-navy">
                    {date || "—"}
                    {timeWindow
                      ? ` · ${es ? timeWindowOptions.find((tw) => tw.id === timeWindow)?.labelEs : timeWindowOptions.find((tw) => tw.id === timeWindow)?.label}`
                      : ""}
                    {urgent ? ` · ${f.urgentFlag}` : ""}
                  </span>
                </li>
                <li>
                  <span className="text-muted">{f.reviewBoat}:</span>{" "}
                  <span className="text-navy">
                    {(es}
                      ? boatTypeOptions.find((b) => b.id === boatType)?.labelEs
                      : boatTypeOptions.find((b) => b.id === boatType)?.label) || "—"}
                    {boatLength ? ` · ${es ? lengthOptions.find((l) => l.id === boatLength)?.labelEs : boatLength}` : ""}
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-muted">
                {f.submitNote}{" "}
                <Link href={pathFor(locale, "/free-estimate")} className="font-semibold text-gold">
                  {f.freeEstimate}
                </Link>
                .
              </p>
            </div>
          </div>
        )}

        {fieldHint && (
          <p
            role="alert"
            className="m-0 rounded-xl border border-gold/40 bg-gold/10 px-3 py-2.5 text-sm text-navy"
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
              {es ? "O llame al" : "Or call"}{" "}
              <a href={site.phoneHref} className="font-semibold text-gold underline">
                {site.phone}
              </a>
              .
            </span>
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          type="button"
          className="btn btn-ghost disabled:opacity-40"
          onClick={goBack}
          disabled={step === 0 || status === "loading"}
        >
          {f.back}
        </button>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden text-sm font-semibold text-steel no-underline hover:text-gold sm:inline"
          >
            {t(locale).cta.call}
          </a>
          {step < steps.length - 1 ? (
            <button type="button" className="btn min-w-[8.5rem]" onClick={goNext}>
              {f.continue}
            </button>
          ) : (
            <button
              type="submit"
              className="btn min-w-[8.5rem] disabled:opacity-40"
              disabled={status === "loading"}
            >
              {status === "loading" ? f.sending : f.submit}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
