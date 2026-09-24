import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description:
    "Get to know the counselors and social workers at Light The Way Counseling in Batavia, IL — their credentials, specialties, and approach to therapy.",
  alternates: { canonical: "/team" },
};

export default function Team() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / Our Team
          </p>
          <h1>Our team</h1>
          <p className="lede">
            Research consistently finds that the relationship between you and your
            therapist matters more than the method. Read a little about each clinician
            before you reach out.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="team-grid">
            {team.map((t) => (
              <Link key={t.slug} className="person" href={`/team/${t.slug}`}>
                <div className="person__photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.photo} alt={`${t.name}, ${t.credentials}`} loading="lazy" />
                </div>
                <p className="person__name">{t.name}</p>
                <p className="person__creds">{t.credentials}</p>
                {t.role && <span className="person__role">{t.role}</span>}
                <p
                  style={{
                    marginTop: 10,
                    fontSize: "0.9rem",
                    color: "var(--ink-2)",
                  }}
                >
                  {t.specialties.slice(0, 3).join(" · ")}
                </p>
              </Link>
            ))}
          </div>

          <div className="notice" style={{ marginTop: 44 }}>
            <strong>Not sure who to ask for?</strong> Send a note through the{" "}
            <Link href="/contact">contact form</Link> describing what you&rsquo;re
            hoping to work on, and we&rsquo;ll suggest the clinician whose schedule
            and specialties fit best.
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
