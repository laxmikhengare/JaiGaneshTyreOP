import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { brands } from "@/content/brands";

export const metadata: Metadata = {
  title: "Tyre Brands",
  description: "We stock genuine tyres from MRF, Apollo, CEAT, Bridgestone, JK Tyre, Goodyear, Michelin and more.",
};

export default function BrandsPage() {
  return (
    <Section>
      <Container>
        <SectionHeading center eyebrow="Genuine products" title="Tyre brands we stock" subtitle="Authentic tyres from the brands you trust — for cars, bikes, SUVs and commercial vehicles." />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((b) => (
            <div key={b.name} className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
              {b.logo ? (
                <Image src={b.logo} alt={b.name} width={120} height={48} className="max-h-12 w-auto object-contain" />
              ) : (
                <span className="font-display text-xl font-bold text-slate-600">{b.name}</span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-subtle p-8 text-center">
          <p className="text-muted">Not sure which tyre suits your vehicle and budget?</p>
          <div className="mt-4"><Button href="/book" variant="accent" size="lg">Get a recommendation</Button></div>
        </div>
      </Container>
    </Section>
  );
}
