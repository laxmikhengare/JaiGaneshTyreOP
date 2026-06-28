import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} — a family-run tyre business serving Pune since ${site.establishedYear}, with two branches in Bibvewadi and Kondhwa.`,
};

export default function AboutPage() {
  return (
    <Section>
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm">
          <Image src="/images/about-team.jpg" alt="Our team at the workshop" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">Our story</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-brand-900 sm:text-4xl">A family business built on trust</h1>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              {site.name} started as a single tyre and greasing center in Bibvewadi and has grown into
              two branches across Pune, now also serving Kondhwa with dedicated wheel care. What hasn't
              changed since {site.establishedYear} is our promise: genuine products, skilled work and
              honest pricing.
            </p>
            <p>
              Run by a father and son who know vehicles inside out, we treat every customer's car or bike
              like our own. Whether it's a new set of tyres, a precise wheel alignment or a late-evening
              puncture, you'll get straight advice and dependable service.
            </p>
          </div>
          <div className="mt-7 flex gap-3">
            <Button href="/book" variant="accent" size="lg">Book a service</Button>
            <Button href="/branches" variant="outline" size="lg">Visit a branch</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
