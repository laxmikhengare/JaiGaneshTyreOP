import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { branches } from "@/content/branches";
import { telLink, waLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call, WhatsApp or visit Jai Ganesh Tyres in Bibvewadi or Kondhwa, Pune.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <SectionHeading center eyebrow="Get in touch" title="We're here to help" subtitle="Call or WhatsApp the branch nearest you — or drop by." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {branches.map((b) => (
            <div key={b.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-bold text-brand-900">{b.name}</h2>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />{b.addressLines.join(", ")}, {b.city} {b.pincode}</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted"><Phone className="h-4 w-4 text-accent-600" />{b.phoneDisplay}</p>
              <p className="mt-2 flex items-start gap-2 text-sm text-muted"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />{b.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button href={telLink(b.phone)} size="sm"><Phone className="h-4 w-4" /> Call</Button>
                <Button href={waLink(b.whatsapp, `Hi, I'd like to enquire at your ${b.area} branch.`)} size="sm" variant="whatsapp"><MessageCircle className="h-4 w-4" /> WhatsApp</Button>
                <Button href={b.directionsUrl} size="sm" variant="outline"><MapPin className="h-4 w-4" /> Directions</Button>
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                <iframe title={`Map to ${b.name}`} src={b.mapEmbedSrc} className="h-56 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
