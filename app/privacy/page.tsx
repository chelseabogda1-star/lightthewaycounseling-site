import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Notice of Privacy Practices and website privacy information for Light The Way Counseling, PLLC in Batavia, Illinois.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / Privacy
          </p>
          <h1>Privacy</h1>
          <p className="lede">
            How we protect your health information, and what happens to anything
            you send us through this website.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-narrow">
          <div className="notice" style={{ marginBottom: 40 }}>
            <strong>For the practice, not for clients:</strong> this page is a
            starting draft. It has to be checked against the Notice of Privacy
            Practices you actually hand to clients, and reviewed by your attorney
            or compliance advisor, before you rely on it. Anywhere it says
            something about how the practice operates, confirm it is true.
          </div>

          <div className="prose">
            <h2>Notice of Privacy Practices</h2>
            <p>
              <em>
                This notice describes how medical information about you may be used
                and disclosed, and how you can get access to this information.
                Please review it carefully.
              </em>
            </p>
            <p>
              Light The Way Counseling, PLLC is required by law to maintain the
              privacy of your protected health information, to give you this
              notice of our legal duties and privacy practices, and to follow the
              terms of the notice currently in effect.
            </p>

            <h3>Illinois law is stricter than HIPAA</h3>
            <p>
              Mental health records in Illinois are governed by the Mental Health
              and Developmental Disabilities Confidentiality Act, which protects
              them more tightly than federal law does. In most situations we need
              your written consent before we share anything, including with other
              providers, and that consent has to name who is receiving the
              information and why.
            </p>

            <h3>How we use and share your information</h3>
            <ul>
              <li>
                <strong>Treatment.</strong> To provide and coordinate your care
                within the practice.
              </li>
              <li>
                <strong>Payment.</strong> To bill you or your insurance, which can
                involve sharing diagnosis and dates of service with your plan.
              </li>
              <li>
                <strong>Operations.</strong> For scheduling, quality review,
                supervision of clinicians working toward licensure, and similar
                administrative work.
              </li>
              <li>
                <strong>When the law requires it.</strong> Including suspected
                abuse or neglect of a child or a vulnerable adult, a serious and
                imminent threat to you or someone else, and valid court orders.
              </li>
            </ul>
            <p>
              Anything outside those categories needs your written authorization,
              and you can revoke that authorization in writing at any time.
            </p>

            <h3>Your rights</h3>
            <ul>
              <li>To inspect and request a copy of your record.</li>
              <li>To ask us to correct information you believe is wrong.</li>
              <li>
                To ask for a restriction on how we use or share your information.
              </li>
              <li>
                To ask us to contact you a particular way, or at a particular
                address or number.
              </li>
              <li>To receive a list of certain disclosures we have made.</li>
              <li>To receive a paper copy of this notice.</li>
              <li>
                To be told promptly if your unsecured health information is
                breached.
              </li>
            </ul>

            <h3>Questions or complaints</h3>
            <p>
              Contact us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>. You may also file
              a complaint with the U.S. Department of Health and Human Services,
              Office for Civil Rights, at{" "}
              <a
                href="https://www.hhs.gov/ocr/complaints"
                target="_blank"
                rel="noopener noreferrer"
              >
                hhs.gov/ocr/complaints
              </a>
              . We will not retaliate against you for filing one.
            </p>

            <hr />

            <h2>This website</h2>

            <h3>What the contact form collects</h3>
            <p>
              The appointment request form asks for your name, your contact
              details, and whatever you choose to tell us about what brings you
              in. We use it only to respond to you and to schedule an
              appointment.
            </p>
            <p>
              <strong>The form is not a secure clinical channel.</strong> Please
              keep what you write general, and leave out detailed clinical
              information until we are talking somewhere private. Sending the form
              does not by itself begin a therapeutic relationship, and it does not
              guarantee an appointment.
            </p>

            <h3>Emergencies</h3>
            <p>
              This website and inbox are not monitored around the clock and are
              never the right channel for an emergency. If you are in crisis, call
              or text <strong>988</strong> for the Suicide and Crisis Lifeline, or
              call 911.
            </p>

            <h3>Links to other sites</h3>
            <p>
              Where we link to a directory, a resource, or a client portal, that
              site has its own privacy practices and we are not responsible for
              them.
            </p>

            <h3>Changes</h3>
            <p>
              We may update this notice. The version posted here is the one in
              effect, and it applies to information we already hold as well as
              information we receive in the future.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
