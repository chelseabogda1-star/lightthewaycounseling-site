"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [stuck, setStuck] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Slide the bar away when scrolling down, bring it back on the way up.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last = window.scrollY;
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        setStuck(y > 8);
        // Ignore tiny jitters, and never hide it near the top of the page.
        if (Math.abs(y - last) > 6) {
          setHidden(y > last && y > 220);
          last = y;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="utility">
        <div className="wrap">
          <div className="utility__bar">
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            <span>
              {site.address.city}, {site.address.state} &amp; telehealth across Illinois
            </span>
            <a href={`mailto:${site.email}`}>Email us</a>
          </div>
        </div>
      </div>

      <header
        className="site-header"
        data-open={open ? "true" : "false"}
        data-hidden={hidden && !open ? "true" : "false"}
        data-stuck={stuck ? "true" : "false"}
      >
        <div className="wrap">
        <div className="header-bar">
          <Link href="/" className="brand" aria-label={`${site.shortName} home`}>
            <Logo height={46} />
          </Link>

          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>

          <nav className="nav" id="primary-nav" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "true"
                    : "false"
                }
              >
                {item.label}
              </Link>
            ))}
            <Link className="btn btn--primary header-cta" href="/contact">
              Request an Appointment
            </Link>
          </nav>
        </div>
        </div>
      </header>
    </>
  );
}
