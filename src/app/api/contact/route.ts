import { NextResponse } from "next/server";
import { Resend } from "resend";

// Optional: keep API route fully dynamic (no prerender attempts)
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    // construct Resend at request time
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Fail gracefully if not configured
      return NextResponse.json(
        { ok: false, error: "Server email is not configured" },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const formData = await req.formData();
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const company = String(formData.get("company") || ""); // honeypot

    if (company) {
      // bot – pretend success
      return NextResponse.redirect(new URL("/?sent=1", req.url), { status: 303 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL!,      // e.g. "Thang <onboarding@resend.dev>"
      to: process.env.TO_EMAIL!,          // your inbox
      replyTo: email,                     // camelCase (not reply_to)
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.redirect(new URL("/?sent=1", req.url), { status: 303 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Email failed" }, { status: 500 });
  }
}
