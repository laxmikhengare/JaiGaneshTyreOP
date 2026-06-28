import { Star } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { reviews } from "@/content/reviews";

export function Reviews() {
  return (
    <Section>
      <Container>
        <SectionHeading
          center
          eyebrow="Customer love"
          title="What Pune drivers say about us"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-brand-900">
                {r.name}
                {r.branch && <span className="font-normal text-muted"> · {r.branch}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
