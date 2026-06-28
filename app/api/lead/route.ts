import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/schema";
import { getSupabaseAdmin } from "@/lib/supabase";
import { notifyOwner, verifyTurnstile } from "@/lib/notify";

// Single handler for booking / callback / contact (distinguished by `kind`).
export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 422 }
    );
  }
  const lead = parsed.data;

  if (!(await verifyTurnstile(lead.token))) {
    return NextResponse.json(
      { ok: false, error: "Verification failed, please try again." },
      { status: 403 }
    );
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      kind: lead.kind,
      branch: lead.branch,
      service: lead.service,
      vehicle_type: lead.vehicleType,
      vehicle_model: lead.vehicleModel,
      name: lead.name,
      phone: lead.phone,
      preferred_slot: lead.preferredSlot,
      message: lead.message,
      source: lead.source,
    });
    if (error) {
      console.error("Supabase insert failed", error);
      return NextResponse.json(
        { ok: false, error: "Could not save right now. Please call or WhatsApp us." },
        { status: 500 }
      );
    }
  } else {
    // Not configured (e.g. local dev) — log so the lead is never silently lost.
    console.info("[lead] (no DB configured)", JSON.stringify(lead));
  }

  await notifyOwner(lead);
  return NextResponse.json({ ok: true });
}
