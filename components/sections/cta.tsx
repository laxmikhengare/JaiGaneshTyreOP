import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import { site } from "@/content/site";
import { telLink, waLink } from "@/lib/utils";

export function CtaBand() {
  return (
    <Section className="py-14">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 to-brand-900 px-8 py-12 text-center text-white sm:px-12">
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
            Need new tyres or a quick fix today?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-200">
            Call, WhatsApp or book online — we'll get your vehicle sorted at the nearest branch.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/book" variant="accent" size="lg">Book a service</Button>
            <Button href={telLink(site.primaryPhone)} variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
              <Phone className="h-5 w-5" /> Call now
            </Button>
            <Button href={waLink(site.primaryWhatsapp, "Hi, I'd like to book a tyre service.")} variant="whatsapp" size="lg">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
