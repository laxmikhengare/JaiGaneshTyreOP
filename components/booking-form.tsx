"use client";

import { useState } from "react";
import { Phone, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { branches } from "@/content/branches";
import { services } from "@/content/services";
import { telLink, waLink } from "@/lib/utils";

const inputCls =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";
const labelCls = "mb-1.5 block text-sm font-medium text-slate-700";

export function BookingForm({ kind = "booking" as const }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      kind,
      branch: fd.get("branch") || undefined,
      service: fd.get("service") || undefined,
      vehicleType: fd.get("vehicleType") || undefined,
      vehicleModel: fd.get("vehicleModel") || undefined,
      name: fd.get("name"),
      phone: fd.get("phone"),
      preferredSlot: fd.get("preferredSlot") || undefined,
      message: fd.get("message") || undefined,
      source: typeof window !== "undefined" ? window.location.pathname : undefined,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "done") {
    const primary = branches[0];
    return (
      <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-3 font-display text-xl font-bold text-brand-900">Request received!</h3>
        <p className="mt-2 text-sm text-slate-600">
          Thank you — we'll call you back shortly to confirm. For anything urgent, reach us directly:
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a href={telLink(primary.phone)} className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white">
            <Phone className="h-4 w-4" /> Call
          </a>
          <a href={waLink(primary.whatsapp, "Hi, I just booked online.")} className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="branch">Branch</label>
          <select id="branch" name="branch" className={inputCls} defaultValue={branches[0].slug}>
            {branches.map((b) => (
              <option key={b.slug} value={b.slug}>{b.shortName} — {b.area}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="service">Service</label>
          <select id="service" name="service" className={inputCls} defaultValue={services[0].name}>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="vehicleType">Vehicle type</label>
          <select id="vehicleType" name="vehicleType" className={inputCls} defaultValue="car">
            <option value="car">Car</option>
            <option value="suv">SUV</option>
            <option value="bike">Bike / Scooter</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="vehicleModel">Vehicle model <span className="text-muted">(optional)</span></label>
          <input id="vehicleModel" name="vehicleModel" className={inputCls} placeholder="e.g. Maruti Swift" />
        </div>
        <div>
          <label className={labelCls} htmlFor="name">Your name</label>
          <input id="name" name="name" required className={inputCls} placeholder="Full name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Mobile number</label>
          <input id="phone" name="phone" required type="tel" inputMode="numeric" className={inputCls} placeholder="10-digit mobile" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="preferredSlot">Preferred day / time <span className="text-muted">(optional)</span></label>
          <input id="preferredSlot" name="preferredSlot" className={inputCls} placeholder="e.g. Tomorrow morning" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="message">Anything else? <span className="text-muted">(optional)</span></label>
          <textarea id="message" name="message" rows={3} className={inputCls} placeholder="Tyre size, issue you're facing, etc." />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">{error} — or just call/WhatsApp us.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 font-semibold text-brand-900 transition hover:bg-accent-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="h-5 w-5 animate-spin" />}
        {status === "loading" ? "Sending…" : "Request booking"}
      </button>
      <p className="mt-3 text-xs text-muted">We'll only use your number to confirm this booking.</p>
    </form>
  );
}
