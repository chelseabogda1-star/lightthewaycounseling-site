import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import { locations, getLocation } from "@/lib/locations";
import { site } from "@/lib/site";
import { team } from "@/lib/team";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/locations/${slug}` },
  };
}

export default async function LocationPage({ params }: Params) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const others = locations.filter((l) => l.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
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
            <Link href="/">Home</Link> / <Link href="/locations">Locations</Link> /{" "}
            {loc.city}
          </p>
          <h1>{loc.title}</h1>
          <p className="lede">{loc.lede}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: "start" }}>
            <div className="prose">
              <h2>Getting here</h2>
              <p>{loc.gettingHere}</p>

              <h2>What we see from {loc.city}</h2>
              {loc.localContext.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <h2>Common reasons people reach out</h2>
              <ul>
                {loc.focus.map((f) => (
                  <li key={f.slug}>
                    <Link href={`/services/${f.slug}`}>{f.label}</Link> &mdash;{" "}
                    {f.note}
                  </li>
                ))}
              </ul>
              <p>
                That isn&rsquo;t everything &mdash; the{" "}
                <Link href="/services">full list of specialties</Link> runs to
                twenty.
              </p>

              <h2>In person or virtual</h2>
              <p>
                Every clinician here sees clients both ways. In-person sessions
                happen at our Batavia office; virtual sessions work anywhere in
                Illinois, so you can keep the same therapist through a move, a
                schedule change, or a semester away. More on{" "}
                <Link href="/online-therapy-illinois">
                  how telehealth works here
                </Link>
                .
              </p>
            </div>

            <aside>
              <p className="eyebrow">Office</p>
              <hr className="rule" />
              <ul className="factlist">
                <li>
                  <span className="k">Address</span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </li>
                <li>
                  <span className="k">Phone</span>
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                </li>
                <li>
                  <span className="k">Serving</span>
                  {loc.city} and the Fox Valley, plus all of Illinois by
                  telehealth
                </li>
                <li>
                  <span className="k">Clinicians</span>
                  {team.length} licensed clinicians and interns
                </li>
              </ul>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact">
                  Request an appointment
                </Link>
              </div>

              <div className="frame" style={{ marginTop: 26, aspectRatio: "4 / 3" }}>
                <iframe
                  title={`Map from ${loc.city} to Light The Way Counseling`}
                  src={`https://www.google.com/maps?q=${site.mapQuery}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>

          <div className="wrap-narrow" style={{ marginTop: 56, paddingInline: 0 }}>
            <hr className="rule" />
            <h2>Questions we get from {loc.city}</h2>
            <div className="prose" style={{ marginTop: 20 }}>
              {loc.faqs.map((f) => (
                <div key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 48 }}>
            <p className="eyebrow">Also serving</p>
            <ul className="chips">
              {others.map((l) => (
                <li key={l.slug}>
                  <Link className="chip" href={`/locations/${l.slug}`}>
                    {l.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="chip chip--plain" href="/online-therapy-illinois">
                  All of Illinois, virtually &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTA
        heading={`Counseling for ${loc.city}, on a schedule that works.`}
        body="Tell us what you're looking for and whether you'd rather come in or meet by video. We'll match you with the right clinician on our team."
      />
    </>
  );
}
