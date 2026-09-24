import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clinical Supervision & Practicum",
  description:
    "Clinical supervision for counselors and social workers pursuing Illinois licensure (LCPC / LCSW), plus graduate practicum and internship placements at Light The Way Counseling in Batavia, IL.",
  alternates: { canonical: "/supervision" },
};

export default function Supervision() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / Supervision
          </p>
          <h1>Clinical supervision &amp; practicum</h1>
          <p className="lede">
            Light The Way is a training practice. We supervise clinicians working
            toward Illinois licensure and host graduate practicum and internship
            students.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-narrow prose">
          <h2>Supervision toward Illinois licensure</h2>
          <p>
            If you are an LPC or LSW accruing hours toward the LCPC or LCSW, we provide
            structured clinical supervision that meets Illinois Department of Financial
            and Professional Regulation requirements. Supervision here is not a box to
            check &mdash; it is dedicated time to think carefully about your cases,
            your clinical reasoning, and the clinician you are becoming.
          </p>
          <p>Supervision typically includes:</p>
          <ul>
            <li>Weekly individual sessions with a licensed supervisor</li>
            <li>Case conceptualization and treatment planning</li>
            <li>
              Support with diagnosis, documentation, and clinical decision-making
            </li>
            <li>Ethics, boundaries, and scope-of-practice consultation</li>
            <li>
              Attention to your own sustainability &mdash; caseload, countertransference,
              and burnout
            </li>
            <li>Documentation of hours for your licensure application</li>
          </ul>

          <h2>Graduate practicum &amp; internship placements</h2>
          <p>
            We host master&rsquo;s-level counseling and social work students for
            practicum and internship placements. Students carry a supervised caseload,
            sit in on case consultation, and get real exposure to the day-to-day
            reality of running a clinical practice &mdash; intake, documentation,
            coordination of care, and the parts of the work that graduate programs
            rarely cover.
          </p>
          <p>
            Placements are coordinated with your university&rsquo;s field education
            office. Because we keep placements small, we recommend reaching out at
            least one semester ahead of your intended start date.
          </p>

          <h2>Our approach to supervision</h2>
          <p>
            We believe supervisees do their best work when they feel safe enough to
            bring the session that didn&rsquo;t go well. Supervision here is
            collaborative and developmental: we&rsquo;ll be direct with you about
            clinical concerns, and we&rsquo;ll also make room for the fact that
            early-career work is genuinely hard.
          </p>

          <h2>Therapy for therapists</h2>
          <p>
            Supervision is not therapy. If what you need is your own confidential
            clinical work, several of our clinicians see mental health professionals as
            clients &mdash; see{" "}
            <Link href="/services/therapy-for-therapists">
              therapy for therapists
            </Link>
            .
          </p>

          <h2>Getting in touch</h2>
          <p>
            Email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a> with a short note about
            where you are in the licensure process, your program and expected
            graduation date if you&rsquo;re a student, and the populations you want
            experience with. We&rsquo;ll let you know current availability and fees.
          </p>
        </div>
      </section>

      <CTA
        heading="Interested in supervision or a placement?"
        body="Tell us where you are in your training and what you're hoping to get out of supervision. We'll reply with current openings and fees."
      />
    </>
  );
}
