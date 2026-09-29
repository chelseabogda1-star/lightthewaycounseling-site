import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Privacy Practices",
  description:
    "HIPAA Notice of Privacy Practices for Light The Way Counseling, PLLC in Batavia, Illinois, and how information sent through this website is handled.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / Privacy Practices
          </p>
          <h1>Privacy practices</h1>
          <p className="lede">
            Your information. Your rights. Our responsibilities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-narrow">
          <div className="prose">
            <p className="post-meta">This notice went into effect on January 1, 2025</p>

            <p>
              <strong>
                This notice describes how medical information about you may be used
                and disclosed, and how you can get access to this information.
                Please review it carefully.
              </strong>
            </p>

            <p>
              Light the Way Counseling, PLLC has been and will always be totally
              committed to maintaining client confidentiality. Chelsea Bogda and
              Caitlin Reisel are our Privacy Officers and can be reached at{" "}
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a> or{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>. We are required by
              law to maintain the privacy and security of your protected health
              information, and we will follow the duties and privacy practices
              described here. We will only release healthcare information about you
              in accordance with federal and state laws and the ethics of the
              counseling profession.
            </p>

            <h2>How we use and disclose your health information</h2>
            <p>
              Providing treatment, collecting payment, and running the practice are
              necessary activities for quality care. State and federal laws allow us
              to use and disclose your health information for these purposes.
            </p>
            <ul>
              <li>
                <strong>Treatment.</strong> To provide, manage, or coordinate your
                care or related services. This can include consultants, other
                professionals treating you, and potential referral sources.
              </li>
              <li>
                <strong>Payment.</strong> To verify insurance coverage and benefits
                with your carrier, process claims, and handle billing and
                collections. We may bill the person in your family who pays for your
                insurance.
              </li>
              <li>
                <strong>Healthcare operations.</strong> To review our treatment
                procedures and business activity, and for certification, compliance,
                and licensing.
              </li>
            </ul>

            <h2>Disclosures that do not require your consent</h2>
            <p>
              There are some situations where we may be required to use and disclose
              information without your consent. These include, but are not limited
              to:
            </p>
            <ul>
              <li>Reporting suspected abuse, neglect, or domestic violence.</li>
              <li>
                Preventing or reducing a serious threat to anyone&rsquo;s health or
                safety.
              </li>
              <li>
                Sharing information with law enforcement if a crime is committed on
                our premises or against our staff, or where required by law, such as
                a subpoena or court order.
              </li>
              <li>
                Other uses or restrictions of your information based on state or
                federal law, as described in the confidentiality and emergency
                section of your informed consent.
              </li>
            </ul>

            <h2>Your rights</h2>

            <h3>To request how we contact you</h3>
            <p>
              Our normal practice is to contact you at the home address and daytime
              phone number you gave us when you scheduled, about matters such as
              appointment reminders, and we may leave voicemail messages. You have
              the right to ask us to communicate with you a different way. If you
              have given someone medical power of attorney, or someone is your legal
              guardian, that person can exercise your rights and make choices about
              your health information.
            </p>

            <h3>To inspect and copy your medical and billing records</h3>
            <p>
              You have the right to inspect and obtain a copy of the information in
              your records. Contact the Privacy Officer to request access. Under
              limited circumstances we may deny a request. If you ask for a copy, we
              may charge a reasonable fee for copying, mailing, and supplies.
            </p>

            <h3>To add to or amend your records</h3>
            <p>
              If you believe information in your record is incorrect or incomplete,
              you may ask us to add to or amend it. We will decide within 60 days,
              or in some cases 90. Under certain circumstances we may deny the
              request, and you then have the right to file a statement of
              disagreement, which is added to your record along with our response.
              Requests go to the Privacy Officer in writing, with an explanation of
              the reason.
            </p>

            <h3>To an accounting of disclosures</h3>
            <p>
              You may request an accounting of disclosures we have made, excluding
              those for treatment, payment, or healthcare operations, those shared
              with you or your family, those you specifically consented to, and
              those we were required to release. Submit your request in writing to
              the Privacy Officer for a period no longer than six years and after
              January 1, 2023. We will tell you the cost of preparing the list.
            </p>

            <h3>To request restrictions</h3>
            <p>
              You have the right to ask for restrictions on certain uses and
              disclosures of your health information. The request must be in writing
              to our Privacy Officer, and we are not required to agree to it. Where
              you have paid for services out of pocket and in full, you have the
              right to restrict disclosure of that information. You may revoke an
              authorization in writing at any time, although a revocation does not
              apply to anything we already did in reliance on it.
            </p>

            <h3>To complain</h3>
            <p>
              If you believe your privacy rights have been violated, please contact
              us and discuss your concerns. If you are not satisfied with the
              outcome, you may file a written complaint with the U.S. Department of
              Health and Human Services, 200 Independence Avenue S.W., Washington,
              D.C. 20201, or call 877-696-6775. You will not be retaliated against
              for filing a complaint.
            </p>

            <h3>To receive a copy of this notice and any changes</h3>
            <p>
              You have the right to receive a copy of this document and of any
              future policy changes that follow from changes in state and federal
              law. Ask the Privacy Officer for one.
            </p>

            <p>
              Clinical records, psychotherapy notes, and other disclosures require a
              separate signed release of information. You have a right to be
              notified of a breach of any unsecured personal health information.
            </p>

            <hr />

            <h2>Information you send through this website</h2>

            <h3>What the appointment form does</h3>
            <p>
              The appointment request form collects your name, contact details, and
              a short note about what you are looking for. It writes an email
              addressed to our admin inbox and opens it in your own email program
              for you to send. We use what you send only to respond to you and
              arrange an appointment.
            </p>

            <h3>Keep it to scheduling</h3>
            <p>
              Email and text are not confidential and are not HIPAA compliant. Like
              our clients, please use them only for scheduling and general
              questions, and keep clinical detail out of them. Anything clinical
              belongs in session or on the phone. Sending the form does not by
              itself begin a counseling relationship and does not guarantee an
              appointment.
            </p>

            <h3>When we reply</h3>
            <p>
              We return messages as quickly as we can, Monday through Friday.
              Routine messages left over the weekend may not be returned until
              Monday. <strong>We cannot guarantee 24-hour crisis coverage.</strong>
            </p>

            <h3>In an emergency</h3>
            <p>
              If you need immediate attention and we have not been able to answer
              your call or message, or you cannot wait, contact emergency services:
              call 911 or go to your nearest hospital emergency room. You can also
              call or text <strong>988</strong> for the Suicide and Crisis Lifeline.
              Your counselor will follow up with standard counseling and support
              afterward.
            </p>

            <h3>Social media</h3>
            <p>
              Our clinicians do not respond to contact through social networking
              sites, including friend or follow requests. This protects your
              confidentiality and the counseling relationship.
            </p>

            <h3>Links to other sites</h3>
            <p>
              Where we link to a directory, a resource, or a client portal, that site
              has its own privacy practices and we are not responsible for them.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
