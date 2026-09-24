import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const ROOT = process.cwd();

marked.setOptions({ gfm: true, breaks: false });

/* ---------------- Specialties ---------------- */

export type Specialty = {
  slug: string;
  title: string;
  blurb: string;
  therapists: string[];
  html: string;
};

const SPECIALTY_DIR = path.join(ROOT, "content", "specialties");

export function getSpecialtySlugs(): string[] {
  return fs
    .readdirSync(SPECIALTY_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getSpecialty(slug: string): Specialty | null {
  const file = path.join(SPECIALTY_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    title: String(data.title ?? slug),
    blurb: String(data.blurb ?? ""),
    therapists: Array.isArray(data.therapists) ? (data.therapists as string[]) : [],
    html: marked.parse(content) as string,
  };
}

export function getAllSpecialties(): Specialty[] {
  return getSpecialtySlugs()
    .map((s) => getSpecialty(s))
    .filter((s): s is Specialty => Boolean(s))
    .sort((a, b) => a.title.localeCompare(b.title));
}

/* ---------------- Blog ---------------- */

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: number;
  html: string;
};

const BLOG_DIR = path.join(ROOT, "content", "blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPost(slug: string): Post | null {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const words = content.split(/\s+/).length;
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    author: String(data.author ?? "Light The Way Counseling"),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    readingTime: Math.max(1, Math.round(words / 200)),
    html: marked.parse(content) as string,
  };
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((s) => getPost(s))
    .filter((p): p is Post => Boolean(p))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
