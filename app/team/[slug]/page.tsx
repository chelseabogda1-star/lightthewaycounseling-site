import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import { team, getTherapist } from "@/lib/team";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const t = getTherapist(slug);
  if (!t) return {};
  return {
    title: `${t.name}, ${t.credentials}`,
    description: `${t.name}, ${t.credentials} at Light The Way Counseling in Batavia, IL. Works with ${t.ages.toLowerCase()} on ${t.specialties.slice(0, 3).join(", ").toLowerCase()}.`,
    alternates: { canonical: `/team/${slug}` },
  };
}

export default async function TherapistPage({ params }: Params) {
  const { slug } = await params;
  const t = getTherapist(slug);
  if (!t) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t.name,
    honorificSuffix: t.credentials,
    jobTitle: t.role ?? "Therapist",
    telephone: t.phone,
    email: t.email,
    worksFor: { "@type": "MedicalBusiness", name: site.name, url: site.url },
    url: `${site.url}/team/${t.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / <Link href="/team">Our Team</Link> / {t.name}
          </p>
          <h1>{t.name}</h1>
          <p className="lede">
            {t.credentials}
            {t.role ? ` · ${t.role}` : ""}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="bio">
            <aside className="bio__aside">
              <div className="bio__photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.photo} alt={`${t.name}, ${t.credentials}`} />
              </div>
              <ul className="factlist">
                <li>
                  <span className="k">Works with</span>
                  {t.ages}
                </li>
                {t.phone && (
                  <li>
                    <span className="k">Direct line</span>
                    <a href={`tel:${t.phone.replace(/[^\d]/g, "")}`}>{t.phone}</a>
                  </li>
                )}
                {t.email && (
                  <li>
                    <span className="k">Email</span>
                    <a href={`mailto:${t.email}`} style={{ wordBreak: "break-all" }}>
                      {t.email}
                    </a>
                  </li>
                )}
                <li>
                  <span className="k">Office</span>
                  {site.address.street}, {site.address.city}, {site.address.state}{" "}
                  {site.address.zip}
                </li>
              </ul>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact">
                  Request with {t.name.split(" ")[0]}
                </Link>
              </div>
            </aside>

            <div>
              <div className="prose">
                {t.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div style={{ marginTop: 40 }}>
                <p className="eyebrow">Areas of focus</p>
                <ul className="chips">
                  {t.specialties.map((s) => (
                    <li key={s} className="chip chip--plain">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: 28 }}>
                <p className="eyebrow">Approaches</p>
                <ul className="chips">
                  {t.approaches.map((a) => (
                    <li key={a} className="chip chip--plain">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading={`Work with ${t.name.split(" ")[0]}.`}
        body="Send a note through the contact form or call the office and we'll get you scheduled."
      />
    </>
  );
}
