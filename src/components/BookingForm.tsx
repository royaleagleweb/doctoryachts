"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { bookingServices, timeSlots, vesselTypes } from "@/lib/services";

type Status = "idle" | "loading" | "success" | "error";
const steps = ["Service", "Vessel", "Schedule", "Contact"] as const;

export function BookingForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") || "";
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [serviceId, setServiceId] = useState(preselected);
  const [vesselType, setVesselType] = useState("");
  const [vesselName, setVesselName] = useState("");
  const [vesselLength, setVesselLength] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
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

  function canContinue() {
    if (step === 0) return Boolean(serviceId);
    if (step === 1) return Boolean(vesselType);
    if (step === 2) return Boolean(date && time && location.trim());
    if (step === 3) return Boolean(name.trim() && email.trim() && phone.trim());
    return false;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canContinue()) return;
    setStatus("loading");
    setError("");
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
      <div className="panel p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-coral">Request received</p>
        <h2 className="font-display mt-2 text-2xl font-semibold text-ink">Request received</h2>
        <p className="mt-3 text-sm text-muted">
          We’ll confirm during shop hours by phone or email.
        </p>
        <dl className="mx-auto mt-6 max-w-sm space-y-2 border border-chart-line bg-foam p-4 text-left text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted">ID</dt>
            <dd className="font-mono font-semibold">{confirmation}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Service</dt>
            <dd className="text-right">{selectedService?.title}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">When</dt>
            <dd>
              {date} · {time}
            </dd>
          </div>
        </dl>
        <a href="/" className="btn mt-6">
          Back home
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel overflow-hidden">
      <div className="flex flex-wrap gap-2 border-b border-chart-line bg-foam px-4 py-3">
        {steps.map((label, i) => (
          <span
            key={label}
            className={`font-mono text-[0.65rem] uppercase tracking-wider ${
              i === step ? "font-bold text-coral" : i < step ? "text-teal" : "text-muted"
            }`}
          >
            {String(i + 1).padStart(2, "0")} {label}
            {i < steps.length - 1 ? " ·" : ""}
          </span>
        ))}
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        {step === 0 && (
          <>
            <h2 className="font-display m-0 text-xl font-semibold">What’s the issue lane?</h2>
            <div className="space-y-2">
              {bookingServices.map((s) => (
                <label
                  key={s.id}
                  className={`flex cursor-pointer gap-3 border p-3 transition ${
                    serviceId === s.id
                      ? "border-coral bg-foam"
                      : "border-chart-line hover:border-ink/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="service"
                    className="mt-1"
                    checked={serviceId === s.id}
                    onChange={() => setServiceId(s.id)}
                  />
                  <span>
                    <span className="block font-semibold text-ink">{s.title}</span>
                    <span className="text-sm text-muted">{s.summary}</span>
                  </span>
                </label>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="font-display m-0 text-xl font-semibold">Patient (the vessel)</h2>
            <div>
              <label className="label-field" htmlFor="vesselType">
                Vessel type
              </label>
              <select
                id="vesselType"
                className="input-field"
                value={vesselType}
                onChange={(e) => setVesselType(e.target.value)}
              >
                <option value="">Select…</option>
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
                  Name (optional)
                </label>
                <input
                  id="vesselName"
                  className="input-field"
                  value={vesselName}
                  onChange={(e) => setVesselName(e.target.value)}
                />
              </div>
              <div>
                <label className="label-field" htmlFor="vesselLength">
                  Length (optional)
                </label>
                <input
                  id="vesselLength"
                  className="input-field"
                  value={vesselLength}
                  onChange={(e) => setVesselLength(e.target.value)}
                  placeholder="e.g. 38 ft"
                />
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="font-display m-0 text-xl font-semibold">When & where</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label-field" htmlFor="date">
                  Preferred date
                </label>
                <input
                  id="date"
                  type="date"
                  min={minDate}
                  className="input-field"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label className="label-field" htmlFor="time">
                  Preferred time
                </label>
                <select
                  id="time"
                  className="input-field"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="">Select…</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="label-field" htmlFor="location">
                Marina / dock
              </label>
              <input
                id="location"
                className="input-field"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Marina, slip, or address"
              />
            </div>
            <label className="flex cursor-pointer gap-2 text-sm text-ink">
              <input
                type="checkbox"
                checked={priority}
                onChange={(e) => setPriority(e.target.checked)}
              />
              Mark as urgent (no-start, overheating, safety)
            </label>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="font-display m-0 text-xl font-semibold">Your contact</h2>
            <div>
              <label className="label-field" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label-field" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="label-field" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="input-field"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="label-field" htmlFor="notes">
                Symptoms / notes
              </label>
              <textarea
                id="notes"
                rows={4}
                className="input-field"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What you’re seeing, hearing, smelling…"
              />
            </div>
            <div className="border border-chart-line bg-foam p-3 text-sm text-muted">
              <strong className="text-ink">Summary</strong>
              <br />
              {selectedService?.title || "—"} · {vesselType || "—"}
              <br />
              {date || "—"} {time ? `· ${time}` : ""} · {location || "—"}
              {priority ? " · Urgent" : ""}
            </div>
          </>
        )}

        {status === "error" && (
          <p className="m-0 border border-red-300 bg-red-50 p-2 text-sm text-red-800">{error}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-chart-line px-5 py-4">
        <button
          type="button"
          className="font-mono text-xs font-semibold uppercase tracking-wider text-muted disabled:opacity-40"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0 || status === "loading"}
        >
          ← Back
        </button>
        {step < steps.length - 1 ? (
          <button
            type="button"
            className="btn disabled:opacity-40"
            onClick={() => canContinue() && setStep((s) => s + 1)}
            disabled={!canContinue()}
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            className="btn disabled:opacity-40"
            disabled={!canContinue() || status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Submit request"}
          </button>
        )}
      </div>
    </form>
  );
}
