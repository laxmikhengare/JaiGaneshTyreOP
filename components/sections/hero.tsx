import Image from "next/image";
import { Phone, MessageCircle, Star, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { site } from "@/content/site";
import { aggregateRating } from "@/content/reviews";
import { telLink, waLink } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900 text-white">
      <Image
        src="/images/hero-alignment.jpg"
        alt="Technician performing wheel alignment in the workshop"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/85 to-brand-900/40" />
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium ring-1 ring-white/20">
            <MapPin className="h-4 w-4 text-accent-400" /> 2 branches · Bibvewadi & Kondhwa, Pune
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-balance sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-200">
            Genuine tyres, expert wheel alignment & balancing, quick puncture repair and honest
            pricing — a family business Pune has trusted since {site.establishedYear}.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/book" variant="accent" size="lg">
              Book a service
            </Button>
            <Button href={telLink(site.primaryPhone)} size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
              <Phone className="h-5 w-5" /> Call now
            </Button>
            <Button href={waLink(site.primaryWhatsapp, "Hi, I'd like to enquire about tyre service.")} size="lg" variant="whatsapp">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-200">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                ))}
              </span>
              {aggregateRating.value} · {aggregateRating.count}+ reviews
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-accent-400" /> Genuine brands only
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
