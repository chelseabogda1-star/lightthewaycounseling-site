import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "About Our Practice",
  description:
    "Light The Way Counseling is a Batavia, IL therapy practice providing individual counseling for children, adolescents, and adults — in person and by telehealth across Illinois.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / About
          </p>
          <h1>About Light The Way</h1>
          <p className="lede">
            A small, collaborative counseling practice in downtown Batavia, serving
            the Fox Valley in person and the whole state of Illinois by telehealth.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-narrow prose">
          <h2>Our mission</h2>
          <p>
            Our mission at Light the Way Counseling is to provide counseling services
            that are tailored to the needs of each individual client. We believe in
            walking alongside our clients &mdash; problem solving and processing
            together. Our goal is to help light the way to a more meaningful and
            fulfilling life.
          </p>

          <h2>Who we work with</h2>
          <p>
            Our clinicians provide individual counseling for children, adolescents,
            and adults. Some of our specialties include anxiety disorders,
            attention-deficit/hyperactivity disorder, autism spectrum disorder, mood
            disorders, life transitions, and relationship difficulties. Whatever
            brought you here, you will never feel like you are doing it all alone.
          </p>
          <p>
            You can browse every concern we treat on the{" "}
            <Link href="/services">specialties page</Link>, and each one lists the
            clinicians on our team who work with it.
          </p>

          <h2>What therapy looks like here</h2>
          <p>
            There is no single method that works for everyone, so our clinicians draw
            on approaches including CBT, DBT, ACT, client-centered therapy,
            solution-focused therapy, play therapy, and mindfulness-based work,
            adapting to the person in front of them rather than the other way around.
          </p>
          <p>
            Most clients start with a first session focused on getting to know you and
            what you want to be different. From there, you and your clinician decide
            together on the shape of the work &mdash; what to focus on, how often to
            meet, and how you&rsquo;ll know it&rsquo;s helping.
          </p>

          <h2>In person and online</h2>
          <p>
            Our office is at {site.address.street}, {site.address.city},{" "}
            {site.address.state} {site.address.zip}, a few steps from downtown
            Batavia. We also see clients by secure video anywhere in Illinois, which
            makes daytime appointments realistic for people who work, study, or
            parent on a tight schedule.
          </p>

          <h2>Supporting the next generation of clinicians</h2>
          <p>
            Light The Way is also a training practice. We provide clinical supervision
            for counselors and social workers working toward Illinois licensure, and
            we host graduate practicum and internship students.{" "}
            <Link href="/supervision">Learn more about supervision</Link>.
          </p>

          <h2>Meet the team</h2>
          <p>
            {team.length} clinicians practice at Light The Way.{" "}
            <Link href="/team">Read their bios</Link> to find someone whose approach
            sounds like a fit &mdash; or call the office and we&rsquo;ll help you
            decide.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
