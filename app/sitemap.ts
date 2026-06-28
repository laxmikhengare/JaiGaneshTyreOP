import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { branches } from "@/content/branches";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPaths = ["", "/services", "/brands", "/branches", "/book", "/about", "/contact", "/gallery"];
  const now = new Date();
  return [
    ...staticPaths.map((p) => ({ url: `${base}${p}`, lastModified: now })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: now })),
    ...branches.map((b) => ({ url: `${base}/branches/${b.slug}`, lastModified: now })),
  ];
}
