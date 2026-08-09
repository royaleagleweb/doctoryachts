import { NextResponse } from "next/server";

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

  // Phone strongly preferred for estimates / dockside work
  if (body.formType === "free-estimate" && !body.phone?.trim()) {
    return NextResponse.json(
      { error: "Phone number is required for free estimates" },
      { status: 400 },
    );
  }

  console.info("[Doctor Yachts contact]", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, message: "Message received" });
}
