import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Tyre fitting, wheel alignment, balancing, puncture repair, nitrogen filling and greasing in Pune.",
};

export default function ServicesPage() {
  return (
    <Section>
      <Container>
        <SectionHeading center eyebrow="Our services" title="Complete tyre & wheel care in Pune" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="relative h-44">
                <Image src={s.image} alt={s.name} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h2 className="font-display text-lg font-semibold text-brand-900">{s.name}</h2>
                <p className="mt-1.5 text-sm text-muted">{s.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
