import { site } from "@/lib/site";

type NotifyShape = {
  delivered?: number;
  failed?: number;
  deliveredAll?: boolean;
};

export type DeliveryResponse = {
  ok?: boolean;
  error?: string;
  confirmationId?: string;
  notify?: NotifyShape;
};

/** Client-side guard: never treat a failed notify payload as success. */
export function readDelivery(resOk: boolean, json: DeliveryResponse, fallback: string) {
  const delivered = json.notify?.delivered;
  const notifyFailed =
    typeof delivered === "number" ? delivered === 0 : json.ok === false || json.notify?.deliveredAll === false;

  if (!resOk || json.ok === false || notifyFailed) {
    return {
      ok: false as const,
      error: json.error?.trim() || fallback,
    };
  }

  return {
    ok: true as const,
    confirmationId: json.confirmationId,
  };
}

export const shopPhone = site.phone;
export const shopPhoneHref = site.phoneHref;
