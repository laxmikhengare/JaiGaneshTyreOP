import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import { services, getService } from "@/content/services";
import { serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} in Pune`,
    description: s.intro,
    openGraph: { images: [{ url: s.image }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(s.name, s.intro)) }} />
      <section className="bg-brand-900 text-white">
        <Container className="grid items-center gap-8 py-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">Service</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-balance">{s.name}</h1>
            <p className="mt-4 max-w-md text-slate-200">{s.intro}</p>
            {s.priceFrom && <p className="mt-3 text-sm text-slate-300">Pricing: <span className="font-semibold text-white">{s.priceFrom}</span></p>}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/book" variant="accent" size="lg">Book this service</Button>
              <Button href="/branches" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">Find a branch</Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/15">
            <Image src={s.image} alt={s.name} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority />
          </div>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-900">Why it matters</h2>
              <p className="mt-3 text-muted">{s.why}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-900">Signs you need it</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {s.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" /> {sign}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-900">FAQs</h2>
              <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200">
                {s.faq.map((f) => (
                  <details key={f.q} className="group p-5">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-brand-900">
                      {f.q}
                      <ArrowRight className="h-4 w-4 transition group-open:rotate-90" />
                    </summary>
                    <p className="mt-2 text-sm text-muted">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-subtle p-6">
            <h3 className="font-display text-lg font-bold text-brand-900">Other services</h3>
            <ul className="mt-3 space-y-1.5">
              {services.filter((o) => o.slug !== s.slug).map((o) => (
                <li key={o.slug}>
                  <Link href={`/services/${o.slug}`} className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-white">
                    {o.name} <ArrowRight className="h-4 w-4 text-accent-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </Section>
    </>
  );
}
