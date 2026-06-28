import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { BranchCard } from "@/components/branch-card";
import { branches } from "@/content/branches";

export function BranchCards() {
  return (
    <Section id="branches" className="bg-subtle">
      <Container>
        <SectionHeading
          center
          eyebrow="Find us"
          title="Two branches across Pune"
          subtitle="Visit whichever is closest — both offer the same trusted service."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {branches.map((b) => (
            <BranchCard key={b.slug} branch={b} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
