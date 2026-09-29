import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rates & Insurance",
  description:
    "Fees, insurance, and payment information for Light The Way Counseling in Batavia, IL, including Good Faith Estimate and No Surprises Act information.",
  alternates: { canonical: "/rates" },
};

export default function Rates() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / Rates &amp; Insurance
          </p>
          <h1>Rates &amp; insurance</h1>
          <p className="lede">
            We try to make the money part of therapy as unsurprising as possible.
            Here&rsquo;s how fees, insurance, and cancellations work at Light The Way.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-narrow prose">
          <h2>Session fees</h2>
          <p>
            These are our self-pay rates. Sessions run about 50 to 55 minutes.
          </p>
          <ul className="factlist" style={{ marginBottom: 24 }}>
            <li>
              <span className="k">Initial assessment</span>
              $160
            </li>
            <li>
              <span className="k">
                Follow-up session, individual, family or couples
              </span>
              $110
            </li>
            <li>
              <span className="k">Session with a master&rsquo;s level intern</span>
              $40
            </li>
          </ul>
          <p>
            If you are using insurance, what you pay depends on your plan, and you
            pay your copay at each session. Fees may be adjusted at the start of a
            calendar year, and we give notice before that happens. Call{" "}
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a> or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> if you want to confirm
            anything before you schedule.
          </p>

          <h2>Insurance</h2>
          <p>
            Several of our clinicians are in network with major commercial plans, and
            coverage differs from clinician to clinician. When you contact us, let us
            know your insurance carrier and we will tell you which of our clinicians
            are in network with that plan.
          </p>
          <p>
            If we are out of network with your plan, you may still have out-of-network
            outpatient mental health benefits. We can provide a superbill, an
            itemized receipt you submit to your insurer for reimbursement.
          </p>
          <p>
            As a courtesy we will bill your insurance company, HMO, or other
            responsible party on your behalf. If you have not met your deductible,
            the full fee is due at each session until it is satisfied. If your plan
            denies payment or does not cover counseling, the balance is due at that
            time.
          </p>
          <p>Questions worth asking your insurer before your first session:</p>
          <ul>
            <li>Do I have outpatient mental health benefits?</li>
            <li>What is my deductible, and has it been met this year?</li>
            <li>What is my copay or coinsurance per session?</li>
            <li>Is there a limit on the number of sessions per year?</li>
            <li>Do I need a referral from my primary care physician?</li>
            <li>Are telehealth sessions covered the same as in-person sessions?</li>
          </ul>

          <h2>Payment</h2>
          <p>
            We accept major credit and debit cards, HSA and FSA cards. Payment or copay
            is collected at the time of service. If an account becomes overdue and is
            turned over to collections, the client or responsible party is
            responsible for any collection fees.
          </p>

          <h2>Cancellations</h2>
          <p>
            Your appointment time is held for you. We ask for at least{" "}
            <strong>24 business hours&rsquo; notice</strong> to cancel or reschedule.
            Without that notice there is a late cancellation fee of{" "}
            <strong>$75</strong>, or <strong>$20</strong> for a session with an
            intern. Insurance does not cover it.
          </p>
          <p>
            For virtual appointments, if you have not joined, your clinician will try
            to reach you after ten minutes. If there is still no response fifteen
            minutes after the start time, the late cancellation fee may apply.
          </p>
          <p>
            Life happens. Talk to your clinician if something comes up.
          </p>

          <h2>Good Faith Estimate</h2>
          <p>
            Under the federal No Surprises Act, you have the right to receive a Good
            Faith Estimate explaining how much your care will cost if you are
            uninsured or are not planning to use insurance.
          </p>
          <ul>
            <li>
              You have the right to receive a Good Faith Estimate for the total
              expected cost of any non-emergency services.
            </li>
            <li>
              You can ask for a Good Faith Estimate before you schedule, and we will
              provide one in writing at least one business day before your service.
            </li>
            <li>
              If you receive a bill that is at least $400 more than your Good Faith
              Estimate, you can dispute the bill.
            </li>
            <li>
              Keep a copy of your Good Faith Estimate. For questions or more
              information, visit{" "}
              <a
                href="https://www.cms.gov/nosurprises"
                target="_blank"
                rel="noopener noreferrer"
              >
                cms.gov/nosurprises
              </a>
              .
            </li>
          </ul>

          <h2>If cost is the barrier</h2>
          <p>
            If fees are what&rsquo;s standing between you and starting therapy, say so
            when you reach out. We&rsquo;d rather have that conversation than have you
            not call.
          </p>
        </div>
      </section>

      <CTA
        heading="Have a question about coverage?"
        body="Send us your insurance carrier and we'll tell you which of our clinicians are in network. No obligation to schedule."
      />
    </>
  );
}
