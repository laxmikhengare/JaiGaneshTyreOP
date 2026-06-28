import { site } from "@/content/site";
import { branches } from "@/content/branches";
import { aggregateRating } from "@/content/reviews";

export function localBusinessJsonLd() {
  return branches.map((b) => ({
    "@context": "https://schema.org",
    "@type": "TireShop",
    name: b.name,
    image: `${site.url}${b.photos[0]}`,
    telephone: b.phone,
    url: `${site.url}/branches/${b.slug}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.addressLines.join(", "),
      addressLocality: b.city,
      postalCode: b.pincode,
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: b.geo.lat, longitude: b.geo.lng },
    openingHours: b.hours.map((h) => `${h.days} ${h.time}`),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.value,
      reviewCount: aggregateRating.count,
    },
  }));
}

export function serviceJsonLd(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "AutoRepair", name: site.name },
    areaServed: { "@type": "City", name: "Pune" },
  };
}
