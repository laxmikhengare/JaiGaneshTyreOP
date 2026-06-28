import type { LeadInput } from "./schema";

// Sends an email notification via Resend if configured; otherwise no-ops.
export async function notifyOwner(lead: LeadInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!apiKey || !to) return;

  const lines = [
    `New ${lead.kind} from the website`,
    lead.branch ? `Branch: ${lead.branch}` : null,
    lead.service ? `Service: ${lead.service}` : null,
    lead.vehicleType ? `Vehicle: ${lead.vehicleType} ${lead.vehicleModel ?? ""}` : null,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.preferredSlot ? `Preferred: ${lead.preferredSlot}` : null,
    lead.message ? `Message: ${lead.message}` : null,
  ].filter(Boolean);

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Jai Ganesh Tyres <leads@jaiganeshtyres.in>",
        to: [to],
        subject: `🔔 New ${lead.kind}: ${lead.service ?? "enquiry"} — ${lead.name}`,
        text: lines.join("\n"),
      }),
    });
  } catch (err) {
    console.error("notifyOwner failed", err);
  }
}

// Verifies a Cloudflare Turnstile token. Passes through when not configured.
export async function verifyTurnstile(token?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      }
    );
    const data = (await res.json()) as { success: boolean };
    return data.success;
  } catch {
    return false;
  }
}
