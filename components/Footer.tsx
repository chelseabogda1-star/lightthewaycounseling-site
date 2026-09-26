import Link from "next/link";
import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link
              href="/"
              className="brand"
              style={{ marginBottom: 18, display: "inline-block" }}
            >
              <Logo height={52} />
            </Link>
            <p>
              Individual counseling for children, adolescents, and adults in Batavia,
              Illinois &mdash; in person and by telehealth across Illinois.
            </p>
            <div className="crisis">
              <strong>In crisis?</strong> Call or text <strong>988</strong> for the
              Suicide &amp; Crisis Lifeline, or call 911. This website is not monitored
              for emergencies.
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul className="footer-list">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Specialties</Link>
              </li>
              <li>
                <Link href="/team">Our Team</Link>
              </li>
              <li>
                <Link href="/online-therapy-illinois">Online Therapy</Link>
              </li>
              <li>
                <Link href="/locations">Areas We Serve</Link>
              </li>
              <li>
                <Link href="/supervision">Supervision</Link>
              </li>
              <li>
                <Link href="/rates">Rates &amp; Insurance</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Common Concerns</h4>
            <ul className="footer-list">
              <li>
                <Link href="/services/anxiety">Anxiety</Link>
              </li>
              <li>
                <Link href="/services/adhd">ADHD</Link>
              </li>
              <li>
                <Link href="/services/depression">Depression</Link>
              </li>
              <li>
                <Link href="/services/autism">Autism</Link>
              </li>
              <li>
                <Link href="/services/grief">Grief &amp; Loss</Link>
              </li>
              <li>
                <Link href="/services/life-transitions">Life Transitions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-list">
              <li>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </li>
              <li>
                Office: <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
              <li>Fax: {site.fax}</li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {year} Light The Way Counseling, PLLC. All rights reserved.
          </span>
          <span>
            <Link href="/contact">Request an appointment</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
