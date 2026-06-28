import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="prose max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-brand-900">Privacy Policy</h1>
        <div className="mt-4 space-y-4 text-muted">
          <p>{site.name} respects your privacy. When you submit a booking or enquiry, we collect only your name, mobile number and the service details you provide.</p>
          <p>We use this information solely to contact you about your enquiry and the service requested. We do not sell or share your data with third parties for marketing.</p>
          <p>To request deletion of your details, contact us at {site.email}.</p>
        </div>
      </Container>
    </Section>
  );
}
