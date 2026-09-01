"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { t } from "@/lib/copy";
import { readDelivery } from "@/lib/form-delivery";
import { localeFromPath } from "@/lib/i18n";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

/** Simple contact form for /contact — free estimate uses EstimateForm */
export function ContactForm() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const f = t(locale).forms;
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
        body: JSON.stringify({ ...data, formType: "contact" }),
      });
      const json = await res.json();
      const delivery = readDelivery(res.ok, json, f.sendFailed);
      if (!delivery.ok) throw new Error(delivery.error);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : f.sendFailed);
    }
  }

  if (status === "success") {
    return (
      <div className="panel p-5">
        <p className="m-0 text-sm font-semibold  text-gold">
          {f.contactReceived}
        </p>
        <p className="mt-2 font-semibold text-navy">{f.contactThanks}</p>
        <p className="mt-1 text-sm text-steel">{locale === "es" ? site.hoursEs : site.hours}</p>
        <button
          type="button"
          className="mt-4 text-sm font-semibold text-gold"
          onClick={() => setStatus("idle")}
        >
          {f.contactSendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label-field">
            {f.contactName}
          </label>
          <input
            id="name"
            name="name"
            required
            className="input-field"
            autoComplete="name"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="label-field">
            {f.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="input-field"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(###) ###-####"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="label-field">
          {f.contactEmail}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="input-field"
          autoComplete="email"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label htmlFor="vessel" className="label-field">
          Boat / marina{" "}
          <span className="font-normal normal-case tracking-normal text-muted">(optional)</span>
        </label>
        <input
          id="vessel"
          name="vessel"
          className="input-field"
          placeholder="e.g. 32′ center console · Las Olas Marina"
        />
      </div>
      <div>
        <label htmlFor="message" className="label-field">
          {f.contactMessage}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="input-field"
          placeholder="What's wrong, where the boat is, and when you need it…"
        />
      </div>
      {status === "error" && (
        <p role="alert" className="m-0 rounded-xl border border-gold/30 bg-navy-deep p-3 text-sm text-pearl">
          {error}{" "}
          <span className="mt-1 block">
            {locale === "es" ? "Llame al" : "Call"}{" "}
            <a href={site.phoneHref} className="font-semibold text-gold underline">
              {site.phone}
            </a>
            .
          </span>
        </p>
      )}
      <button type="submit" className="btn w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? f.sending : f.contactSend}
      </button>
    </form>
  );
}
