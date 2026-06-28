import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <Section id="services" className="bg-subtle">
      <Container>
        <SectionHeading
          center
          eyebrow="What we do"
          title="Complete tyre & wheel care"
          subtitle="Everything your car or bike's tyres need, under one trusted roof."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-400 hover:shadow-md"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-accent-500 group-hover:text-brand-900">
                <ServiceIcon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">{s.name}</h3>
              <p className="mt-1.5 flex-1 text-sm text-muted">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
