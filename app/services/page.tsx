import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { getAllSpecialties } from "@/lib/content";

export const metadata: Metadata = {
  title: "Specialties & Services",
  description:
    "Counseling for ADHD, anxiety, autism, depression, grief, OCD, PTSD, self-esteem, life transitions and more — for children, adolescents, and adults in Batavia, IL.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  const specialties = getAllSpecialties();

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / Specialties
          </p>
          <h1>Specialties</h1>
          <p className="lede">
            Our counselors provide individual counseling for children, adolescents,
            and adults. Each page below explains how we think about that concern and
            who on our team treats it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid--3">
            {specialties.map((s) => (
              <Link key={s.slug} className="card" href={`/services/${s.slug}`}>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <span className="card__more">Learn more &rarr;</span>
              </Link>
            ))}
          </div>

          <div className="notice" style={{ marginTop: 40 }}>
            <strong>Don&rsquo;t see what you&rsquo;re looking for?</strong> This list
            isn&rsquo;t exhaustive. Call the office or send a note and we&rsquo;ll
            tell you honestly whether we&rsquo;re the right fit &mdash; and if we
            aren&rsquo;t, we&rsquo;ll try to point you somewhere that is.
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
