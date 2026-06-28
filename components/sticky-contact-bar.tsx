import { Phone, MessageCircle, MapPin } from "lucide-react";
import { branches } from "@/content/branches";
import { telLink, waLink } from "@/lib/utils";

// Highest-converting element on mobile: always-visible Call / WhatsApp / Directions.
export function StickyContactBar() {
  const primary = branches[0];
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 text-center text-xs font-semibold">
        <a href={telLink(primary.phone)} className="flex flex-col items-center gap-1 py-2.5 text-brand-700">
          <Phone className="h-5 w-5" aria-hidden />
          Call
        </a>
        <a
          href={waLink(primary.whatsapp, "Hi, I'd like to enquire about tyre service.")}
          className="flex flex-col items-center gap-1 border-x border-slate-200 py-2.5 text-[#128C7E]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          WhatsApp
        </a>
        <a href={primary.directionsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-2.5 text-accent-600">
          <MapPin className="h-5 w-5" aria-hidden />
          Directions
        </a>
      </div>
    </div>
  );
}
