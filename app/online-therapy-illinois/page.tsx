import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Online Therapy in Illinois",
  description:
    "Virtual counseling anywhere in Illinois with a small, licensed practice — the same therapist every week, real daytime availability, and specialties including ADHD, anxiety, autism, grief, and OCD.",
  alternates: { canonical: "/online-therapy-illinois" },
};

const faqs = [
  {
    q: "Who can you see by video?",
    a: "Anyone physically located in Illinois at the time of the session. Illinois licensure is tied to where the client is, not where the therapist is — so if you're in Chicago, Rockford, Champaign, or Carbondale, we can work together.",
  },
  {
    q: "Is online therapy actually as effective as in person?",
    a: "For most of what we treat — anxiety, depression, ADHD, life transitions, grief — research finds virtual therapy performs comparably to in-person care. It's a weaker fit for young children in play therapy and for people in acute crisis, and we'll tell you directly if that's your situation.",
  },
  {
    q: "What do I need for a session?",
    a: "A private-enough space, a device with a camera, and a reasonable internet connection. Headphones help. Plenty of our clients take sessions from a parked car on a lunch break — that's a completely normal therapy office in 2026.",
  },
  {
    q: "Do you have appointments that aren't in the evening?",
    a: "Yes, and that's the point. Evening slots are the scarcest thing in any practice, which is why waits are long. Our weekday daytime and late-morning openings are far easier to get, and telehealth removes the commute that made those hours impractical.",
  },
  {
    q: "Does insurance cover virtual sessions?",
    a: "Often at the same rate as in-person visits, though it varies by plan. Tell us your carrier when you reach out and we'll tell you which of our clinicians are in network. See our rates and insurance page for the questions worth asking your insurer.",
  },
  {
    q: "Can I switch between video and in-person?",
    a: "Yes, with the same clinician. Clients near Batavia often come in when it suits them and meet by video the rest of the time.",
  },
  {
    q: "Is it confidential?",
    a: "Sessions are held over a secure, encrypted platform, and the same confidentiality rules apply as they would in the office. Your clinician will go over the limits of confidentiality with you at the first appointment.",
  },
];

export default function OnlineTherapy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
            <Link href="/">Home</Link> / Online Therapy
          </p>
          <h1>Online therapy, anywhere in Illinois</h1>
          <p className="lede">
            A small practice rather than a platform: you get one clinician who
            knows your history, not whoever is on shift.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-narrow prose">
          <h2>What makes this different from an app</h2>
          <p>
            Subscription therapy services solved a real problem &mdash; access
            &mdash; by creating a new one: churn. Clinicians rotate, sessions get
            compressed, and you retell your story to someone new every few
            months.
          </p>
          <p>
            Here, you are matched with one of{" "}
            <Link href="/team">{team.length} clinicians</Link> and you stay with
            them. Sessions are a full hour of real clinical time. If we aren&rsquo;t
            the right fit, we say so and try to point you somewhere better rather
            than keeping you on a roster.
          </p>

          <h2>The scheduling problem, honestly</h2>
          <p>
            Almost everyone who calls a therapy office asks for evenings or
            Saturdays, which is why those are the slots with months-long waits.
            Weekday daytime openings sit unclaimed at practices all over the
            state.
          </p>
          <p>
            Telehealth is what makes those hours usable. A session with no
            commute on either end is a 50-minute block, not a two-hour errand
            &mdash; which fits inside a lunch hour, a work-from-home Wednesday, or
            the gap between school drop-off and a shift. If you&rsquo;ve been
            told there&rsquo;s a long wait somewhere, it&rsquo;s worth asking a
            different question: <em>what do you have during the day?</em>
          </p>
          <p>
            There&rsquo;s more on this in{" "}
            <Link href="/blog/therapy-appointments-during-the-workday">
              fitting therapy around a full-time job
            </Link>
            .
          </p>

          <h2>What we work with virtually</h2>
          <p>
            Most of our specialties translate well to video. The ones clients most
            often start with online:
          </p>
          <ul>
            <li>
              <Link href="/services/adhd">ADHD</Link> in adults &mdash; including
              people diagnosed late, and the executive-function systems that
              never stuck
            </li>
            <li>
              <Link href="/services/anxiety">Anxiety</Link> and{" "}
              <Link href="/services/depression">depression</Link>
            </li>
            <li>
              <Link href="/services/life-transitions">Life transitions</Link>{" "}
              &mdash; new roles, moves, separations, launching
            </li>
            <li>
              <Link href="/services/grief">Grief and loss</Link>
            </li>
            <li>
              <Link href="/services/ocd">OCD</Link> and{" "}
              <Link href="/services/ptsd">PTSD</Link>
            </li>
            <li>
              <Link href="/services/boundaries">Boundaries</Link> and{" "}
              <Link href="/services/emotion-regulation">emotion regulation</Link>
            </li>
            <li>
              <Link href="/services/therapy-for-therapists">
                Therapy for therapists
              </Link>{" "}
              &mdash; clinicians often prefer a practice outside their own
              professional circle, and distance helps
            </li>
            <li>
              <Link href="/services/chronic-pain">Chronic pain</Link> &mdash;
              where getting to an office is itself part of the problem
            </li>
          </ul>
          <p>
            Younger children in play therapy generally do better in the room. If
            that&rsquo;s your situation and you&rsquo;re near the Fox Valley,{" "}
            <Link href="/locations">our office</Link> is in Batavia.
          </p>

          <h2>How it works</h2>
          <ol>
            <li>
              You send a note through the{" "}
              <Link href="/contact">contact form</Link> or call{" "}
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a> with a rough
              sense of what&rsquo;s going on and when you&rsquo;re free.
            </li>
            <li>
              We suggest the clinician whose specialties and availability actually
              fit, rather than whoever is next in line.
            </li>
            <li>
              You get intake paperwork and a secure video link. No app to
              download.
            </li>
            <li>
              First session is mostly getting to know you &mdash;{" "}
              <Link href="/blog/what-to-expect-at-your-first-therapy-session">
                here&rsquo;s what that actually looks like
              </Link>
              .
            </li>
          </ol>

          <h2>Questions people ask</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <div className="notice" style={{ marginTop: 36 }}>
            <strong>If you are in crisis</strong>, telehealth is not the right
            first step. Call or text <strong>988</strong> for the Suicide &amp;
            Crisis Lifeline, or call 911.
          </div>
        </div>
      </section>

      <CTA
        heading="Therapy that fits the hours you actually have."
        body="Tell us the windows that could realistically work for you, and we'll tell you honestly what we have open."
      />
    </>
  );
}
