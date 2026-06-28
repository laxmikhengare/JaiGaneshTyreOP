import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Branch } from "@/content/branches";
import { telLink, waLink } from "@/lib/utils";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-44">
        <Image src={branch.photos[0]} alt={branch.name} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">
          {branch.shortName}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-brand-900">{branch.name}</h3>
        <p className="mt-2 flex items-start gap-2 text-sm text-muted">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
          {branch.addressLines.join(", ")}, {branch.city} {branch.pincode}
        </p>
        <p className="mt-1.5 flex items-center gap-2 text-sm text-muted">
          <Clock className="h-4 w-4 shrink-0 text-accent-600" />
          {branch.hours[0].days}: {branch.hours[0].time}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button href={telLink(branch.phone)} size="sm">
            <Phone className="h-4 w-4" /> Call
          </Button>
          <Button href={waLink(branch.whatsapp, `Hi, I'd like to enquire at your ${branch.area} branch.`)} size="sm" variant="whatsapp">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </Button>
          <Button href={branch.directionsUrl} size="sm" variant="outline">
            <MapPin className="h-4 w-4" /> Directions
          </Button>
        </div>
        <Link href={`/branches/${branch.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-accent-600">
          View branch details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
