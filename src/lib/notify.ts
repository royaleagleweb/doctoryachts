/**
 * Shop lead notifications via FormSubmit (no API key).
 * Recipients are server-only — do not reuse this list on the public site.
 * Each inbox is a separate POST so FormSubmit can activate them independently.
 */
const SHOP_NOTIFY_EMAILS = [
  "roy@royaleagleweb.com",
  "info@doctoryachts.com",
] as const;

export type NotifyResult = {
  delivered: number;
  failed: number;
  deliveredAll: boolean;
};

type NotifyPayload = {
  subject: string;
  replyTo?: string;
  fields: Record<string, string | number | boolean | undefined | null>;
};

function buildBody(payload: NotifyPayload) {
  const lines = Object.entries(payload.fields)
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(([k, v]) => `${k}: ${v}`);

  return {
    _subject: payload.subject,
    _template: "table",
    _captcha: "false",
    ...(payload.replyTo ? { _replyto: payload.replyTo, email: payload.replyTo } : {}),
    message: lines.join("\n"),
    ...Object.fromEntries(
      Object.entries(payload.fields).map(([k, v]) => [k, v == null ? "" : String(v)]),
    ),
  };
}

async function deliverTo(
  email: string,
  body: ReturnType<typeof buildBody>,
): Promise<{ email: string; delivered: boolean; status?: number; error?: string }> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(email)}`;

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
      console.error("[notifyShop] delivery failed", email, res.status, text);
      return { email, delivered: false, status: res.status, error: text.slice(0, 300) };
    }

    console.info("[notifyShop] delivered", email);
    return { email, delivered: true, status: res.status };
  } catch (err) {
    console.error("[notifyShop] error", email, err);
    return {
      email,
      delivered: false,
      error: err instanceof Error ? err.message : "network error",
    };
  }
}

export async function notifyShop(payload: NotifyPayload): Promise<NotifyResult> {
  const body = buildBody(payload);
  const results = await Promise.all(SHOP_NOTIFY_EMAILS.map((email) => deliverTo(email, body)));

  const delivered = results.filter((r) => r.delivered).length;
  const failed = results.length - delivered;

  if (failed === results.length) {
    console.error("[notifyShop] all deliveries failed", results);
    console.info("[Doctor Yachts lead — undelivered copy]", payload);
  } else if (failed > 0) {
    console.error("[notifyShop] partial delivery — some inboxes failed", results);
    console.info("[Doctor Yachts lead — recovery copy]", payload);
  } else {
    console.info("[notifyShop] delivered to all shop inboxes", payload.subject);
  }

  return { delivered, failed, deliveredAll: failed === 0 };
}
