import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeading } from "@/components/ui/layout";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at our workshops and tyre & wheel work at Jai Ganesh Tyres, Pune.",
};

// Replace with real shop photos at launch.
const gallery = [
  { src: "/images/service-tyre-fitting.jpg", alt: "Tyre fitting" },
  { src: "/images/service-wheel-alignment.jpg", alt: "Wheel alignment" },
  { src: "/images/service-wheel-balancing.jpg", alt: "Wheel balancing" },
  { src: "/images/service-puncture-repair.jpg", alt: "Puncture repair" },
  { src: "/images/tyres-stack.jpg", alt: "Tyres in stock" },
  { src: "/images/shop-mechanic-2.jpg", alt: "Our workshop" },
  { src: "/images/service-greasing.jpg", alt: "Greasing and lubrication" },
  { src: "/images/shop-mechanic-1.jpg", alt: "Technician at work" },
];

export default function GalleryPage() {
  return (
    <Section>
      <Container>
        <SectionHeading center eyebrow="Gallery" title="Inside our workshops" />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200">
              <Image src={g.src} alt={g.alt} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition hover:scale-105" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
