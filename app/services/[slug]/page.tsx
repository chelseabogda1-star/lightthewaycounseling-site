import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import { getAllSpecialties, getSpecialty, getSpecialtySlugs } from "@/lib/content";
import { getTherapist } from "@/lib/team";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getSpecialtySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = getSpecialty(slug);
  if (!s) return {};
  return {
    title: `${s.title} Therapy in Batavia, IL`,
    description: `${s.blurb} Counseling for ${s.title.toLowerCase()} at Light The Way Counseling in Batavia, Illinois — in person and by telehealth.`,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function SpecialtyPage({ params }: Params) {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) notFound();

  const clinicians = specialty.therapists
    .map((t) => getTherapist(t))
    .filter((t) => Boolean(t));

  const others = getAllSpecialties()
    .filter((s) => s.slug !== slug)
    .slice(0, 8);

  return (
    <>
      <section className="page-head">
        <div className="wrap wrap-narrow">
          <p className="crumb">
            <Link href="/">Home</Link> / <Link href="/services">Specialties</Link> /{" "}
            {specialty.title}
          </p>
          <h1>{specialty.title}</h1>
          <p className="lede">{specialty.blurb}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-narrow">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: specialty.html }}
          />

          {clinicians.length > 0 && (
            <div style={{ marginTop: 56 }}>
              <hr className="rule" />
              <h2>Clinicians who work with {specialty.title.toLowerCase()}</h2>
              <div className="team-grid" style={{ marginTop: 24 }}>
                {clinicians.map((t) => (
                  <Link key={t!.slug} className="person" href={`/team/${t!.slug}`}>
                    <div className="person__photo">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t!.photo} alt={t!.name} loading="lazy" />
                    </div>
                    <p className="person__name">{t!.name}</p>
                    <p className="person__creds">{t!.credentials}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: 56 }}>
            <p className="eyebrow">Also explore</p>
            <ul className="chips">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link className="chip" href={`/services/${s.slug}`}>
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="chip chip--plain" href="/services">
                  All specialties &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTA
        heading={`Support for ${specialty.title.toLowerCase()} starts with one message.`}
        body="Tell us a little about what's going on and we'll match you with the clinician on our team best suited to help."
      />
    </>
  );
}
