import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Request an appointment with Light The Way Counseling in Batavia, IL. Call (630) 326-9951 or send a message — in-person and telehealth counseling across Illinois.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link href="/">Home</Link> / Contact
          </p>
          <h1>Get in touch</h1>
          <p className="lede">
            Reaching out is often the hardest part. Tell us a little about what
            you&rsquo;re looking for and we&rsquo;ll take it from there &mdash;
            usually within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">Request an appointment</p>
              <hr className="rule" />
              <ContactForm />
            </div>

            <div>
              <p className="eyebrow">Office</p>
              <hr className="rule" />
              <ul className="factlist">
                <li>
                  <span className="k">Address</span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </li>
                <li>
                  <span className="k">Office</span>
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                </li>
                <li>
                  <span className="k">Fax</span>
                  {site.fax}
                </li>
                <li>
                  <span className="k">Email</span>
                  <a href={`mailto:${site.email}`} style={{ wordBreak: "break-all" }}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="k">Telehealth</span>
                  Available to clients anywhere in Illinois
                </li>
              </ul>

              <div className="frame" style={{ marginTop: 26, aspectRatio: "4 / 3" }}>
                <iframe
                  title="Map to Light The Way Counseling"
                  src={`https://www.google.com/maps?q=${site.mapQuery}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="notice" style={{ marginTop: 26 }}>
                <strong>If you are in crisis</strong>, please don&rsquo;t wait for a
                reply here. Call or text <strong>988</strong> for the Suicide &amp;
                Crisis Lifeline, or call 911. This inbox is not monitored around the
                clock.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
