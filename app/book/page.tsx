import type { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { BookingForm } from "@/components/booking-form";
import { site } from "@/content/site";
import { telLink, waLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book a service",
  description: "Book tyre fitting, wheel alignment, balancing or puncture repair at Jai Ganesh Tyres, Pune.",
};

export default function BookPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <SectionHeading
          center
          eyebrow="Booking"
          title="Book a tyre or wheel service"
          subtitle="Fill this in and we'll call you back to confirm. Prefer to talk now? Call or WhatsApp us directly."
        />
        <div className="mt-6 flex justify-center gap-3">
          <a href={telLink(site.primaryPhone)} className="inline-flex items-center gap-2 rounded-full border border-brand-600 px-5 py-2.5 text-sm font-semibold text-brand-700">
            <Phone className="h-4 w-4" /> Call
          </a>
          <a href={waLink(site.primaryWhatsapp, "Hi, I'd like to book a service.")} className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <div className="mt-8">
          <BookingForm />
        </div>
      </Container>
    </Section>
  );
}
