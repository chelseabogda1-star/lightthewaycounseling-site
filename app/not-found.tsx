import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingBlock: "clamp(80px,12vw,150px)" }}>
      <div className="wrap wrap-narrow center">
        <p className="eyebrow">404</p>
        <hr className="rule" />
        <h1>We couldn&rsquo;t find that page.</h1>
        <p className="lede">
          The link may be out of date. Try our{" "}
          <Link href="/services">specialties</Link>, meet{" "}
          <Link href="/team">our team</Link>, or{" "}
          <Link href="/contact">get in touch</Link>.
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link className="btn btn--primary" href="/">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
