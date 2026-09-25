import Link from "next/link";
import type { Metadata } from "next";
import { team } from "@/lib/team";
import { getAllSpecialties, getAllPosts, formatDate } from "@/lib/content";
import { site } from "@/lib/site";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Therapy in Batavia, IL | Light The Way Counseling",
  description: site.description,
  alternates: { canonical: "/" },
};

const HERO_IMAGE =
  "https://static.wixstatic.com/media/7807b1_296004a17f4a43e3a9ec07b685bdba7c~mv2.jpg/v1/fill/w_1880,h_890,al_c,q_90,enc_auto/7807b1_296004a17f4a43e3a9ec07b685bdba7c~mv2.jpg";

export default function Home() {
  const specialties = getAllSpecialties();
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero__inner">
            <div>
              <p className="eyebrow">
                Batavia, Illinois &middot; In person &amp; telehealth
              </p>
              <h1>You were never meant to do it alone.</h1>
              <blockquote className="hero__quote">
                &ldquo;We don&rsquo;t have to do it all alone. We were never meant
                to.&rdquo;
                <cite>Bren&eacute; Brown</cite>
              </blockquote>
              <p className="lede">
                Individual counseling for children, adolescents, and adults. Our
                clinicians walk alongside you &mdash; problem solving and
                processing together &mdash; to help light the way to a more
                meaningful and fulfilling life.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact">
                  Request an appointment
                </Link>
                <Link className="btn btn--ghost" href="/team">
                  Meet our clinicians
                </Link>
              </div>
            </div>

            <div className="hero__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={HERO_IMAGE} alt="" fetchPriority="high" />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">Welcome</p>
              <hr className="rule" />
              <h2>Care that&rsquo;s built around you, not a protocol.</h2>
              <p className="lede">
                At Light the Way Counseling, you will never feel like you are doing
                it all alone. Our team of clinicians is trained to provide counseling
                services for children, adults, and adolescents experiencing a variety
                of difficulties &mdash; including anxiety disorders, ADHD, autism
                spectrum disorder, mood disorders, life transitions, and relationship
                difficulties.
              </p>
              <p>
                We collaborate closely with our clients to find solutions that work
                for them. Our mission is to provide counseling services that are
                tailored to the needs of each individual client, and our goal is to
                help light the way to a more meaningful and fulfilling life.
              </p>
              <div className="btn-row">
                <Link className="btn btn--ghost" href="/about">
                  More about the practice
                </Link>
              </div>
            </div>

            <div className="stat-row" style={{ alignSelf: "center" }}>
              <div className="stat">
                <b>All ages</b>
                <span>Children, adolescents, and adults</span>
              </div>
              <div className="stat">
                <b>{specialties.length}+ specialties</b>
                <span>From ADHD and anxiety to grief and OCD</span>
              </div>
              <div className="stat">
                <b>In person or virtual</b>
                <span>Batavia office &amp; telehealth across Illinois</span>
              </div>
              <div className="stat">
                <b>{team.length} clinicians</b>
                <span>Matched to what you&rsquo;re working through</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section section--cream">
        <div className="wrap">
          <p className="eyebrow">How we help</p>
          <hr className="rule" />
          <h2>What we work with</h2>
          <p className="lede" style={{ maxWidth: "62ch" }}>
            Our counselors provide individual counseling for children, adolescents,
            and adults. Choose a concern to read how we approach it and which
            clinicians on our team treat it.
          </p>
          <ul className="chips" style={{ marginTop: 28 }}>
            {specialties.map((s) => (
              <li key={s.slug}>
                <Link className="chip" href={`/services/${s.slug}`}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where we work */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="split" style={{ alignItems: "center" }}>
            <div>
              <p className="eyebrow">Where we work</p>
              <hr className="rule" />
              <h2>Batavia in person, all of Illinois by video.</h2>
              <p className="lede">
                Our office sits in downtown Batavia, a short drive from Geneva,
                St. Charles, Aurora, and North Aurora. Every clinician also sees
                clients by secure video anywhere in the state &mdash; and our
                weekday daytime openings are far easier to get than the evening
                slots everyone asks for.
              </p>
              <div className="btn-row">
                <Link className="btn btn--ghost" href="/online-therapy-illinois">
                  Online therapy in Illinois
                </Link>
                <Link className="btn btn--ghost" href="/locations">
                  Areas we serve
                </Link>
              </div>
            </div>
            <div>
              <ul className="chips">
                {[
                  ["batavia", "Batavia"],
                  ["geneva", "Geneva"],
                  ["st-charles", "St. Charles"],
                  ["aurora", "Aurora"],
                  ["north-aurora", "North Aurora"],
                  ["elburn-sugar-grove", "Elburn & Sugar Grove"],
                ].map(([slug, label]) => (
                  <li key={slug}>
                    <Link className="chip" href={`/locations/${slug}`}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Our team</p>
          <hr className="rule" />
          <h2>The people you&rsquo;ll be working with</h2>
          <p className="lede" style={{ maxWidth: "60ch", marginBottom: 34 }}>
            Fit matters more than almost anything else in therapy. Read a little about
            each clinician before you reach out &mdash; or tell us what you&rsquo;re
            looking for and we&rsquo;ll help you choose.
          </p>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section className="section section--mist">
          <div className="wrap">
            <p className="eyebrow">From the blog</p>
            <hr className="rule" />
            <h2>Reading room</h2>
            <div className="grid grid--3" style={{ marginTop: 30 }}>
              {posts.map((p) => (
                <Link key={p.slug} className="card" href={`/blog/${p.slug}`}>
                  <p className="post-meta">
                    {formatDate(p.date)} &middot; {p.readingTime} min read
                  </p>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className="card__more">Read &rarr;</span>
                </Link>
              ))}
            </div>
            <div className="btn-row">
              <Link className="btn btn--ghost" href="/blog">
                All articles
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
