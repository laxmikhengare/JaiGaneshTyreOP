import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { brands } from "@/content/brands";

export function BrandsStrip() {
  return (
    <Section className="py-12">
      <Container>
        <SectionHeading center eyebrow="Genuine brands" title="All leading tyre brands" />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {brands.map((b) => (
            <span
              key={b.name}
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-display text-lg font-semibold text-slate-500 shadow-sm"
            >
              {b.name}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
