import Image from "next/image";
import { ShieldCheck, IndianRupee, Clock, Users } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { site } from "@/content/site";

const points = [
  { icon: ShieldCheck, title: "Genuine tyres only", text: "Authentic tyres from trusted brands — no seconds, no surprises." },
  { icon: IndianRupee, title: "Honest, fair pricing", text: "Transparent rates and the right recommendation for your budget." },
  { icon: Clock, title: "Quick service", text: "Fast fitting, alignment and puncture repair so you're back on the road." },
  { icon: Users, title: "Family-run experts", text: `Skilled, friendly service Pune has trusted since ${site.establishedYear}.` },
];

export function WhyUs() {
  return (
    <Section className="bg-brand-900 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-400">Why choose us</p>
            <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
              A name your vehicle can trust
            </h2>
            <p className="mt-3 max-w-md text-slate-300">
              Two branches, one promise: genuine products, skilled hands and pricing you can rely on.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {points.map((p) => (
                <div key={p.title} className="flex gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-400">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/15">
            <Image
              src="/images/shop-mechanic-1.jpg"
              alt="Our technician at work in the workshop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
