import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Request an appointment with Light The Way Counseling in Batavia, IL. Call (630) 326-9951 or send a message. In-person and telehealth counseling across Illinois.",
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
            you&rsquo;re looking for and we&rsquo;ll take it from there. We return
            messages Monday through Friday.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">Three ways to reach us</p>
              <hr className="rule" />
              <ul className="ways">
                <li>
                  <b>The form below</b>
                  <span>
                    Quickest way to get scheduled. It writes the email for you, so
                    you do not have to work out what to include, then opens your own
                    email program with it ready to send.
                  </span>
                </li>
                <li>
                  <b>
                    Email{" "}
                    <a href={`mailto:${site.email}`} style={{ wordBreak: "break-word" }}>
                      {site.email}
                    </a>
                  </b>
                  <span>
                    The same inbox the form writes to. Go straight here if you would
                    rather write it yourself.
                  </span>
                </li>
                <li>
                  <b>
                    Call <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                  </b>
                  <span>
                    Always an option, and the right one for anything clinical.
                    Scheduling by phone usually takes longer, because it often means
                    voicemail and a call back rather than a straight answer.
                  </span>
                </li>
              </ul>

              <div className="notice" style={{ marginTop: 22 }}>
                <strong>Keep written messages to scheduling.</strong> Email and text
                are not confidential and are not HIPAA compliant, so a sentence or
                two about what you are looking for is plenty. Anything clinical is
                better on the phone or in session. We cannot guarantee 24-hour
                crisis coverage; if you need help now, call or text{" "}
                <strong>988</strong>, call 911, or go to your nearest emergency
                room.
              </div>

              <p className="eyebrow" style={{ marginTop: 34 }}>Request an appointment</p>
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
