import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { getAllPosts, formatDate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, plain-language writing on anxiety, ADHD, grief, boundaries, and everyday mental health from the therapists at Light The Way Counseling in Batavia, IL.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / Blog
          </p>
          <h1>Reading room</h1>
          <p className="lede">
            Short, practical pieces from our clinicians &mdash; the kinds of things we
            find ourselves explaining in session, written down so you can read them at
            2am if that&rsquo;s when you need them.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-narrow">
          <div className="post-list">
            {posts.map((p) => (
              <Link key={p.slug} className="post-item" href={`/blog/${p.slug}`}>
                <p className="post-meta">
                  {formatDate(p.date)} &middot; {p.readingTime} min read
                  {p.tags.length > 0 && ` · ${p.tags[0]}`}
                </p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
