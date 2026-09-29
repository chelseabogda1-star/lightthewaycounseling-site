import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Terms & Disclaimers",
  description:
    "Terms of use, clinical disclaimers, licensure and accessibility information for the Light The Way Counseling website.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / Terms &amp; Disclaimers
          </p>
          <h1>Terms and disclaimers</h1>
          <p className="lede">
            What this website is, what it is not, and where we are licensed to
            practice.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-narrow">
          <div className="notice" style={{ marginBottom: 40 }}>
            <strong>For the practice, not for clients:</strong> a starting draft.
            Have your attorney or your malpractice carrier look at it before you
            rely on it, and confirm every factual statement about how the practice
            works.
          </div>

          <div className="prose">
            <h2>This site is not treatment</h2>
            <p>
              Everything here, including the articles, is general information. It
              is not clinical advice, a diagnosis, or a treatment recommendation
              for any particular person. Reading it does not create a
              therapist&ndash;client relationship between you and Light The Way
              Counseling or any of our clinicians. That relationship begins only
              when you and a clinician have met, agreed to work together, and
              completed the paperwork.
            </p>
            <p>
              Never delay seeking care, or disregard advice from your own provider,
              because of something you read on this site.
            </p>

            <h2>In an emergency</h2>
            <p>
              We do not monitor this site, the contact form, or email around the
              clock. If you are in crisis, call or text <strong>988</strong> for
              the Suicide and Crisis Lifeline, or call 911, or go to your nearest
              emergency department.
            </p>

            <h2>Where we can practice</h2>
            <p>
              Our clinicians are licensed in Illinois. Illinois licensure follows
              the client, not the therapist, so we can see you by video only while
              you are physically located in Illinois at the time of the session.
              We cannot treat you while you are in another state.
            </p>
            <p>
              Each clinician&rsquo;s license type is listed on their page under{" "}
              <Link href="/team">our team</Link>. Verify any Illinois license
              through the{" "}
              <a
                href="https://idfpr.illinois.gov/licenselookup/licenselookup.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Department of Financial and Professional Regulation
              </a>
              .
            </p>

            <h2>Fees and insurance</h2>
            <p>
              Fees, coverage, and availability change. Nothing on this site is a
              quote or a guarantee that a clinician is in network with your plan
              or is accepting new clients. See{" "}
              <Link href="/rates">rates and insurance</Link>, including your right
              to a Good Faith Estimate under the No Surprises Act, and confirm
              with us before you schedule.
            </p>

            <h2>No testimonials</h2>
            <p>
              We do not publish client testimonials or reviews, and we do not ask
              clients for them. Anything written about a client experience here is
              composite or illustrative and is never a real, identifiable person.
            </p>

            <h2>Other sites</h2>
            <p>
              We link to directories, resources, and a client portal for
              convenience. We do not control those sites and are not responsible
              for their content, their privacy practices, or their security.
            </p>

            <h2>Accessibility</h2>
            <p>
              We want this site usable by everyone, and we build toward the Web
              Content Accessibility Guidelines. If any part of it gets in your
              way, tell us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a> and we will fix it
              and get you the information another way.
            </p>

            <h2>Privacy</h2>
            <p>
              How we handle your health information, and what happens to anything
              you send through the contact form, is on our{" "}
              <Link href="/privacy">privacy page</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
