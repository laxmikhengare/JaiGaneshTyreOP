import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { BranchCard } from "@/components/branch-card";
import { branches } from "@/content/branches";

export const metadata: Metadata = {
  title: "Branches",
  description: "Two Jai Ganesh Tyres branches in Pune — Bibvewadi and Kondhwa Budruk. Find addresses, hours and directions.",
};

export default function BranchesPage() {
  return (
    <Section>
      <Container>
        <SectionHeading center eyebrow="Locations" title="Our two branches in Pune" subtitle="Same trusted service, whichever is closer to you." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {branches.map((b) => (
            <BranchCard key={b.slug} branch={b} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
