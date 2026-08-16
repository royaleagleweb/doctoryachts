import { NextResponse } from "next/server";
import { notifyShop } from "@/lib/notify";

type BookingBody = {
  serviceId?: string;
  serviceTitle?: string;
  problemId?: string;
  problemLabel?: string;
  vesselType?: string;
  vesselName?: string;
  vesselLength?: string;
  date?: string;
  time?: string;
  timeWindow?: string;
  city?: string;
  location?: string;
  name?: string;
  email?: string;
  phone?: string;
  notes?: string;
  priority?: boolean;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: BookingBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const required = {
    serviceId: body.serviceId,
    vesselType: body.vesselType,
    date: body.date,
    time: body.time,
    location: body.location,
    name: body.name,
    email: body.email,
    phone: body.phone,
  };

  for (const [key, value] of Object.entries(required)) {
    if (!value || !String(value).trim()) {
      return NextResponse.json({ error: `Missing field: ${key}` }, { status: 400 });
    }
  }

  if (!isEmail(String(body.email))) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const confirmationId = `DY-${Date.now().toString(36).toUpperCase()}`;

  const notify = await notifyShop({
    subject: `${body.priority ? "[URGENT] " : ""}Booking request ${confirmationId} — Doctor Yachts`,
    replyTo: String(body.email),
    fields: {
      confirmationId,
      type: "booking",
      priority: body.priority ? "YES" : "no",
      name: body.name,
      phone: body.phone,
      email: body.email,
      problem: body.problemLabel || body.serviceTitle,
      serviceId: body.serviceId,
      serviceTitle: body.serviceTitle,
      vesselType: body.vesselType,
      vesselName: body.vesselName,
      vesselLength: body.vesselLength,
      preferredDate: body.date,
      preferredTime: body.time,
      city: body.city,
      location: body.location,
      notes: body.notes,
    },
  });

  return NextResponse.json({
    ok: true,
    confirmationId,
    message: "Booking request received",
    notify,
  });
}
