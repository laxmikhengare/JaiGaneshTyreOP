import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <Section>
      <Container className="prose max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-brand-900">Terms of Use</h1>
        <div className="mt-4 space-y-4 text-muted">
          <p>This website provides information about {site.name} and lets you request bookings and enquiries. Prices and availability are indicative and confirmed at the branch.</p>
          <p>Submitting a booking request is a request to be contacted, not a confirmed appointment, until we call you back to confirm.</p>
          <p>All brand names and logos are the property of their respective owners and are shown to indicate the products we stock.</p>
        </div>
      </Container>
    </Section>
  );
}
