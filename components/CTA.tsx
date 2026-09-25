import Link from "next/link";
import { site } from "@/lib/site";

export default function CTA({
  heading = "Ready when you are.",
  body = "Reaching out is often the hardest part. Send us a note and we'll help you find the right clinician on our team — usually within one business day.",
  center = false,
}: {
  heading?: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <section className={center ? "cta center" : "cta"}>
      <div className="wrap">
        <hr className="rule" />
        <h2>{heading}</h2>
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
