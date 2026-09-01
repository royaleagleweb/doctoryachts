/**
 * Shop lead notifications.
 *
 * Primary: Resend (Worker-reliable). Requires the Cloudflare secret RESEND_API_KEY.
 * Recipients are server-only — do not reuse this list on the public site.
 */

const SHOP_NOTIFY_EMAILS = [
  "roy@royaleagleweb.com",
  "info@doctoryachts.com",
] as const;

const SITE_ORIGIN = "https://doctoryachts.com";
const DEFAULT_FROM = "Doctor Yachts <info@doctoryachts.com>";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

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

type DeliveryAttempt = {
  email?: string;
  delivered: boolean;
  status?: number;
  error?: string;
};

function fieldRows(payload: NotifyPayload) {
  return Object.entries(payload.fields).filter(
    ([, v]) => v !== undefined && v !== null && String(v).trim() !== "",
  );
}

function formatText(payload: NotifyPayload) {
  const lines = fieldRows(payload).map(([k, v]) => `${k}: ${v}`);
  return lines.join("\n");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatHtml(payload: NotifyPayload) {
  const rows = fieldRows(payload)
    .map(
      ([k, v]) =>
        `<tr><th align="left" style="padding:6px 12px 6px 0;color:#243044;font-size:13px;vertical-align:top">${escapeHtml(k)}</th><td style="padding:6px 0;color:#0c1220;font-size:14px">${escapeHtml(String(v)).replace(/\n/g, "<br/>")}</td></tr>`,
    )
    .join("");

  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f6f1e8;color:#161a22;font-family:IBM Plex Sans,Segoe UI,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e4d7b8">
    <tr><td style="background:#0c1220;color:#f6f1e8;padding:18px 22px">
      <div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#c9a24a">Doctor Yachts</div>
      <div style="margin-top:6px;font-size:20px;font-weight:700">${escapeHtml(payload.subject)}</div>
    </td></tr>
    <tr><td style="padding:18px 22px">
      <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
    </td></tr>
    <tr><td style="padding:0 22px 20px;color:#3a4558;font-size:12px">
      Reply goes to the customer when a reply-to is set. Shop: (954) 770-1910 · 2029 SW 20th St, Fort Lauderdale, FL 33315
    </td></tr>
  </table>
</body></html>`;
}

async function readResendKey(): Promise<string | undefined> {
  const fromProcess = process.env.RESEND_API_KEY?.trim();
  if (fromProcess) return fromProcess;

  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const ctx = await getCloudflareContext({ async: true });
    const env = ctx.env as { RESEND_API_KEY?: string };
    return env.RESEND_API_KEY?.trim() || undefined;
  } catch {
    return undefined;
  }
}

function readFromAddress() {
  return process.env.RESEND_FROM?.trim() || DEFAULT_FROM;
}

async function deliverViaResend(
  apiKey: string,
  payload: NotifyPayload,
): Promise<DeliveryAttempt[]> {
  const body = {
    from: readFromAddress(),
    to: [...SHOP_NOTIFY_EMAILS],
    subject: payload.subject,
    text: formatText(payload),
    html: formatHtml(payload),
    ...(payload.replyTo ? { reply_to: payload.replyTo } : {}),
  };

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[notifyShop] Resend failed", res.status, text.slice(0, 400));
      return SHOP_NOTIFY_EMAILS.map((email) => ({
        email,
        delivered: false,
        status: res.status,
        error: text.slice(0, 300),
      }));
    }

    console.info("[notifyShop] Resend accepted", payload.subject);
    return SHOP_NOTIFY_EMAILS.map((email) => ({
      email,
      delivered: true,
      status: res.status,
    }));
  } catch (err) {
    console.error("[notifyShop] Resend network error", err);
    return SHOP_NOTIFY_EMAILS.map((email) => ({
      email,
      delivered: false,
      error: err instanceof Error ? err.message : "network error",
    }));
  }
}

/**
 * Last-resort fallback when RESEND_API_KEY is missing.
 * FormSubmit is unreliable from Workers unless Origin/Referer match the live site.
 */
async function deliverViaFormSubmit(payload: NotifyPayload): Promise<DeliveryAttempt[]> {
  const body = {
    _subject: payload.subject,
    _template: "table",
    _captcha: "false",
    ...(payload.replyTo ? { _replyto: payload.replyTo, email: payload.replyTo } : {}),
    message: formatText(payload),
    ...Object.fromEntries(
      Object.entries(payload.fields).map(([k, v]) => [k, v == null ? "" : String(v)]),
    ),
  };

  return Promise.all(
    SHOP_NOTIFY_EMAILS.map(async (email) => {
      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(email)}`;
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: SITE_ORIGIN,
            Referer: `${SITE_ORIGIN}/`,
          },
          body: JSON.stringify(body),
        });
        const text = await res.text().catch(() => "");
        let success = false;
        try {
          const json = JSON.parse(text) as { success?: boolean | string };
          success = json.success === true || json.success === "true";
        } catch {
          success = false;
        }
        if (!res.ok || !success) {
          console.error("[notifyShop] FormSubmit failed", email, res.status, text.slice(0, 300));
          return { email, delivered: false, status: res.status, error: text.slice(0, 300) };
        }
        console.info("[notifyShop] FormSubmit delivered", email);
        return { email, delivered: true, status: res.status };
      } catch (err) {
        console.error("[notifyShop] FormSubmit error", email, err);
        return {
          email,
          delivered: false,
          error: err instanceof Error ? err.message : "network error",
        };
      }
    }),
  );
}

function summarize(results: DeliveryAttempt[], payload: NotifyPayload): NotifyResult {
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

export async function notifyShop(payload: NotifyPayload): Promise<NotifyResult> {
  const apiKey = await readResendKey();

  if (apiKey) {
    const results = await deliverViaResend(apiKey, payload);
    return summarize(results, payload);
  }

  console.error(
    "[notifyShop] RESEND_API_KEY is not set — trying FormSubmit fallback (often blocked from Workers)",
  );
  const results = await deliverViaFormSubmit(payload);
  return summarize(results, payload);
}

export function notifyFailed(notify: NotifyResult) {
  return notify.delivered === 0;
}
