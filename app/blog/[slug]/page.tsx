import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import { getPost, getPostSlugs, getAllPosts, formatDate } from "@/lib/content";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: p.title,
      description: p.description,
      publishedTime: p.date,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-head">
        <div className="wrap wrap-narrow">
          <p className="crumb">
            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link>
          </p>
          <h1>{post.title}</h1>
          <p className="post-meta" style={{ marginTop: 14 }}>
            {formatDate(post.date)} &middot; {post.readingTime} min read &middot;{" "}
            {post.author}
          </p>
        </div>
      </section>

      <section className="section">
        <article className="wrap wrap-narrow">
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />

          <hr style={{ border: 0, borderTop: "1px solid var(--line)", margin: "48px 0 28px" }} />

          <p style={{ fontSize: "0.9rem", color: "var(--ink-3)" }}>
            This article is general information, not a substitute for individual
            clinical advice. If you&rsquo;d like to talk with someone,{" "}
            <Link href="/contact">reach out to our office</Link>.
          </p>

          {more.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <p className="eyebrow">Keep reading</p>
              <div className="grid grid--3">
                {more.map((p) => (
                  <Link key={p.slug} className="card" href={`/blog/${p.slug}`}>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </section>

      <CTA />
    </>
  );
}
