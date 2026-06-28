import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { site, nav } from "@/content/site";
import { Logo } from "@/components/logo";
import { branches } from "@/content/branches";
import { services } from "@/content/services";
import { telLink, waLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="mt-10 bg-brand-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{site.tagline}. Serving Pune since {site.establishedYear}.</p>
          </div>

          {branches.map((b) => (
            <div key={b.slug}>
              <p className="font-semibold text-white">{b.shortName}</p>
              <p className="mt-2 flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{b.addressLines.join(", ")}, {b.city} {b.pincode}</span>
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <a href={telLink(b.phone)} className="hover:text-white">{b.phoneDisplay}</a>
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <MessageCircle className="h-4 w-4" />
                <a href={waLink(b.whatsapp, "Hi, I'd like to enquire.")} className="hover:text-white">WhatsApp</a>
              </p>
              <p className="mt-2 flex items-start gap-2 text-sm text-slate-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{b.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}</span>
              </p>
            </div>
          ))}

          <div>
            <p className="font-semibold text-white">Quick links</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {nav.slice(1).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-slate-400 hover:text-white">{n.label}</Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-white">Services</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-slate-400 hover:text-white">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
