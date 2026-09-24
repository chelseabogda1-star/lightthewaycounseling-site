import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { team } from "@/lib/team";
import { getSpecialtySlugs, getAllPosts } from "@/lib/content";
import { locations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: "/", priority: 1 },
    { url: "/about", priority: 0.8 },
    { url: "/services", priority: 0.9 },
    { url: "/team", priority: 0.9 },
    { url: "/online-therapy-illinois", priority: 0.9 },
    { url: "/locations", priority: 0.8 },
    { url: "/supervision", priority: 0.7 },
    { url: "/rates", priority: 0.7 },
    { url: "/blog", priority: 0.7 },
    { url: "/contact", priority: 0.8 },
  ].map((p) => ({
    url: `${site.url}${p.url}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));

  const specialties = getSpecialtySlugs().map((slug) => ({
    url: `${site.url}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityPages = locations.map((l) => ({
    url: `${site.url}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const people = team.map((t) => ({
    url: `${site.url}/team/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...specialties, ...cityPages, ...people, ...posts];
}
