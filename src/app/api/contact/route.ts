import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/contact-schema";

// Simple in-memory rate limiting map: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

// Escape HTML special characters for email safety
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Túl sok kérés érkezett erről a hálózatról. Kérjük, várj egy percet." },
        { status: 429 }
      );
    }

    // 2. Parse JSON body
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Érvénytelen kérés formátum." },
        { status: 400 }
      );
    }

    // 3. Server-side validation via Zod
    const validationResult = contactFormSchema.safeParse(rawBody);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });

      return NextResponse.json(
        {
          error: "Kérjük, ellenőrizd a megadott adatokat.",
          fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = validationResult.data;

    // 4. Honeypot check: If bot filled the hidden company_fax_hp field, silently return success
    if (data.company_fax_hp && data.company_fax_hp.length > 0) {
      console.warn("[Spam prevention] Honeypot triggered for submission from:", ip);
      return NextResponse.json({ success: true });
    }

    // Current submission timestamp formatted in Hungarian locale
    const submissionTime = new Intl.DateTimeFormat("hu-HU", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "Europe/Budapest",
    }).format(new Date());

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "kapcsolat@twoframe.hu";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "TwoFrame Studio <onboarding@resend.dev>";

    // 5. Send email if Resend is configured, otherwise log in development mode
    if (!resendApiKey) {
      console.log("=================================================");
      console.log("ℹ️ [DEV MODE] RESEND_API_KEY hiányzik. Form mentve a konzolba:");
      console.log({
        name: data.name,
        email: data.email,
        phone: data.phone || "-",
        clientName: data.clientName || "-",
        projectType: data.projectType,
        date: data.date || "-",
        location: data.location || "-",
        budget: data.budget || "-",
        socialOrWebsite: data.socialOrWebsite || "-",
        description: data.description,
        submissionTime,
      });
      console.log("=================================================");

      return NextResponse.json({
        success: true,
        devNotice: "Fejlesztői mód: Az email sikeresen naplózva a szerveren (RESEND_API_KEY nincs beállítva).",
      });
    }

    const resend = new Resend(resendApiKey);

    // Prepare safe HTML template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #08080a; color: #f4f4f5; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #121217; border: 1px solid #27272a; border-radius: 16px; padding: 32px; }
    .header { border-bottom: 1px solid #27272a; padding-bottom: 20px; margin-bottom: 24px; }
    .title { font-size: 22px; font-weight: 600; color: #ffffff; margin: 0 0 6px 0; }
    .subtitle { font-size: 13px; color: #a1a1aa; margin: 0; }
    .section { margin-bottom: 24px; }
    .field-row { display: flex; margin-bottom: 12px; font-size: 14px; }
    .field-label { width: 180px; color: #a1a1aa; font-weight: 500; }
    .field-value { color: #ffffff; flex: 1; }
    .badge { display: inline-block; background-color: #8b5cf6; color: #ffffff; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; }
    .message-box { background-color: #08080a; border: 1px solid #27272a; border-radius: 12px; padding: 18px; color: #f4f4f5; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin-top: 8px; }
    .footer { border-top: 1px solid #27272a; padding-top: 16px; margin-top: 24px; font-size: 12px; color: #71717a; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="title">Új TwoFrame Ajánlatkérés</h1>
      <p class="subtitle">Érkezett: ${escapeHtml(submissionTime)}</p>
    </div>

    <div class="section">
      <div class="field-row">
        <div class="field-label">Név:</div>
        <div class="field-value"><strong>${escapeHtml(data.name)}</strong></div>
      </div>
      <div class="field-row">
        <div class="field-label">Email:</div>
        <div class="field-value"><a href="mailto:${escapeHtml(data.email)}" style="color: #c4b5fd;">${escapeHtml(data.email)}</a></div>
      </div>
      ${data.phone ? `
      <div class="field-row">
        <div class="field-label">Telefonszám:</div>
        <div class="field-value"><a href="tel:${escapeHtml(data.phone)}" style="color: #c4b5fd;">${escapeHtml(data.phone)}</a></div>
      </div>` : ""}
      ${data.clientName ? `
      <div class="field-row">
        <div class="field-label">Cég / Előadó / Márka:</div>
        <div class="field-value">${escapeHtml(data.clientName)}</div>
      </div>` : ""}
      <div class="field-row">
        <div class="field-label">Projekt típusa:</div>
        <div class="field-value"><span class="badge">${escapeHtml(data.projectType)}</span></div>
      </div>
      ${data.date ? `
      <div class="field-row">
        <div class="field-label">Tervezett dátum:</div>
        <div class="field-value">${escapeHtml(data.date)}</div>
      </div>` : ""}
      ${data.location ? `
      <div class="field-row">
        <div class="field-label">Helyszín:</div>
        <div class="field-value">${escapeHtml(data.location)}</div>
      </div>` : ""}
      ${data.budget ? `
      <div class="field-row">
        <div class="field-label">Költségkeret:</div>
        <div class="field-value">${escapeHtml(data.budget)}</div>
      </div>` : ""}
      ${data.socialOrWebsite ? `
      <div class="field-row">
        <div class="field-label">Instagram / Web:</div>
        <div class="field-value">${escapeHtml(data.socialOrWebsite)}</div>
      </div>` : ""}
    </div>

    <div class="section">
      <div class="field-label" style="margin-bottom: 6px;">Projekt részletes leírása:</div>
      <div class="message-box">${escapeHtml(data.description)}</div>
    </div>

    <div class="footer">
      TwoFrame Studio • twoframe.hu • Az üzenetre közvetlen válasz küldhető a "Válasz" gombbal.
    </div>
  </div>
</body>
</html>
    `.trim();

    // Plain text fallback
    const textContent = `
ÚJ TWOFRAME AJÁNLATKÉRÉS
========================================
Időpont: ${submissionTime}

Név: ${data.name}
Email: ${data.email}
Telefonszám: ${data.phone || "Nincs megadva"}
Cég / Előadó: ${data.clientName || "Nincs megadva"}
Projekt típusa: ${data.projectType}
Dátum: ${data.date || "Nincs megadva"}
Helyszín: ${data.location || "Nincs megadva"}
Költségkeret: ${data.budget || "Nincs megadva"}
Instagram / Weboldal: ${data.socialOrWebsite || "Nincs megadva"}

PROJEKT LEÍRÁSA:
----------------------------------------
${data.description}
========================================
TwoFrame Studio • twoframe.hu
    `.trim();

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `Új TwoFrame ajánlatkérés – ${data.name}`,
      text: textContent,
      html: htmlContent,
    });

    if (emailResponse.error) {
      console.error("[Resend Error]:", emailResponse.error);
      return NextResponse.json(
        { error: "Az email elküldése nem sikerült a szolgáltatónál. Kérjük, próbáld újra később vagy írj közvetlenül nekünk!" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: emailResponse.data?.id });
  } catch (error) {
    console.error("[Contact API Exception]:", error);
    return NextResponse.json(
      { error: "Váratlan szerverhiba történt. Kérjük, próbáld újra pár perc múlva." },
      { status: 500 }
    );
  }
}
