import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import { branches, getBranch } from "@/content/branches";
import { getService } from "@/content/services";
import { telLink, waLink } from "@/lib/utils";

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = getBranch(slug);
  if (!b) return {};
  return {
    title: `${b.name} — ${b.area}, Pune`,
    description: `${b.name} in ${b.area}, Pune. ${b.addressLines.join(", ")}. Call ${b.phoneDisplay}.`,
  };
}

export default async function BranchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBranch(slug);
  if (!b) notFound();

  return (
    <Section>
      <Container className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">{b.shortName}</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-brand-900 sm:text-4xl">{b.name}</h1>

          <div className="mt-6 space-y-3 text-slate-700">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />{b.addressLines.join(", ")}, {b.city} {b.pincode}</p>
            <p className="flex items-center gap-3"><Phone className="h-5 w-5 shrink-0 text-accent-600" /><a href={telLink(b.phone)} className="font-semibold hover:text-brand-700">{b.phoneDisplay}</a></p>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
              <span>{b.hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={telLink(b.phone)}><Phone className="h-4 w-4" /> Call</Button>
            <Button href={waLink(b.whatsapp, `Hi, I'd like to enquire at your ${b.area} branch.`)} variant="whatsapp"><MessageCircle className="h-4 w-4" /> WhatsApp</Button>
            <Button href={b.directionsUrl} variant="outline"><MapPin className="h-4 w-4" /> Directions</Button>
          </div>

          <h2 className="mt-9 font-display text-xl font-bold text-brand-900">Services at this branch</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {b.serviceSlugs.map((sl) => {
              const s = getService(sl);
              if (!s) return null;
              return (
                <li key={sl}>
                  <Link href={`/services/${sl}`} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:border-accent-400">
                    {s.name} <ArrowRight className="h-4 w-4 text-accent-600" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8">
            <Button href="/book" variant="accent" size="lg">Book at {b.area}</Button>
          </div>
        </div>

        <div className="h-fit overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <iframe
            title={`Map to ${b.name}`}
            src={b.mapEmbedSrc}
            className="h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </Section>
  );
}
