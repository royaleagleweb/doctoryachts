import { site } from "@/lib/site";

/**
 * Deliver lead notifications to the shop inbox.
 * Uses FormSubmit (no API key) → office email. Falls back to console log if delivery fails.
 */
export async function notifyShop(payload: {
  subject: string;
  replyTo?: string;
  fields: Record<string, string | number | boolean | undefined | null>;
}) {
  const lines = Object.entries(payload.fields)
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(([k, v]) => `${k}: ${v}`);

  const body = {
    _subject: payload.subject,
    _template: "table",
    _captcha: "false",
    ...(payload.replyTo ? { _replyto: payload.replyTo, email: payload.replyTo } : {}),
    message: lines.join("\n"),
    ...Object.fromEntries(
      Object.entries(payload.fields).map(([k, v]) => [k, v == null ? "" : String(v)]),
    ),
  };

  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[notifyShop] delivery failed", res.status, text);
      // Still accept the lead in-app; log full payload for recovery
      console.info("[Doctor Yachts lead — undelivered copy]", payload);
      return { delivered: false as const };
    }

    console.info("[Doctor Yachts lead delivered]", payload.subject);
    return { delivered: true as const };
  } catch (err) {
    console.error("[notifyShop] error", err);
    console.info("[Doctor Yachts lead — undelivered copy]", payload);
    return { delivered: false as const };
  }
}
