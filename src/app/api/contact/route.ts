import { NextResponse } from "next/server";
import { notifyShop } from "@/lib/notify";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  vessel?: string;
  message?: string;
  city?: string;
  marina?: string;
  problemId?: string;
  whenNeeded?: string;
  formType?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and a short description are required" },
      { status: 400 },
    );
  }

  if (!isEmail(body.email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (body.formType === "free-estimate" && !body.phone?.trim()) {
    return NextResponse.json(
      { error: "Phone number is required for free estimates" },
      { status: 400 },
    );
  }

  const kind = body.formType === "free-estimate" ? "Free estimate" : "Contact message";

  await notifyShop({
    subject: `${kind} — Doctor Yachts — ${body.name}`,
    replyTo: body.email,
    fields: {
      type: body.formType || "contact",
      name: body.name,
      phone: body.phone,
      email: body.email,
      vessel: body.vessel,
      city: body.city,
      marina: body.marina,
      problemId: body.problemId,
      whenNeeded: body.whenNeeded,
      message: body.message,
    },
  });

  return NextResponse.json({ ok: true, message: "Message received" });
}
