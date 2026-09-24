import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Light The Way Counseling serves Batavia, Geneva, St. Charles, Aurora, North Aurora, Elburn and Sugar Grove in person — and all of Illinois by telehealth.",
  alternates: { canonical: "/locations" },
};

export default function Locations() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / Locations
          </p>
          <h1>Areas we serve</h1>
          <p className="lede">
            Our office is in downtown Batavia and we see clients from across the
            Fox Valley. Everyone on our team also works by secure video with
            clients anywhere in Illinois.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid--3">
            {locations.map((l) => (
              <Link key={l.slug} className="card" href={`/locations/${l.slug}`}>
                <h3>{l.city}</h3>
                <p>{l.lede}</p>
                <span className="card__more">See details &rarr;</span>
              </Link>
            ))}
            <Link className="card" href="/online-therapy-illinois">
              <h3>Anywhere in Illinois</h3>
              <p>
                Secure video sessions statewide, with the same clinician every
                week and daytime availability that&rsquo;s easier to get than
                evenings.
              </p>
              <span className="card__more">Online therapy &rarr;</span>
            </Link>
          </div>

          <div className="notice" style={{ marginTop: 40 }}>
            <strong>Not on this list?</strong> If you live in Illinois, we can
            work with you by video. If you&rsquo;re nearby and want to come in,
            the office is at {site.address.street}, {site.address.city},{" "}
            {site.address.state} {site.address.zip}.
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
