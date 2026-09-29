import Link from "next/link";
import { site } from "@/lib/site";

export default function CTA({
  heading = "Ready when you are.",
  body = "Reaching out is often the hardest part. The contact form or an email to our admin address are the quickest ways to get scheduled. We return messages Monday through Friday, and a message left over the weekend may wait until Monday. You are welcome to call as well, though booking by phone tends to take longer.",
  center = false,
}: {
  heading?: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <section className={center ? "cta center" : "cta"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="cta__bg" src={site.heroImage} alt="" aria-hidden="true" loading="lazy" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="cta__mark" src="/mark.png" alt="" aria-hidden="true" />
      <div className="wrap">
        <hr className="rule" />
        <h2 data-reveal>{heading}</h2>
        <p style={center ? { marginInline: "auto" } : undefined}>{body}</p>
        <div className="btn-row">
          <Link className="btn btn--primary" href="/contact">
            Request an appointment
          </Link>
          <a className="btn btn--ghost" href={`tel:${site.phoneHref}`}>
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
