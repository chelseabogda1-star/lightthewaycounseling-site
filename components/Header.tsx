"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header" data-open={open ? "true" : "false"}>
      <div className="wrap">
        <div className="header-bar">
          <Link href="/" className="brand" aria-label={`${site.shortName} home`}>
            <Logo />
            <span className="brand__text">
              <span className="brand__name">Light The Way</span>
              <span className="brand__sub">Counseling, PLLC</span>
            </span>
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
            <a className="btn btn--primary header-cta" href={`tel:${site.phoneHref}`}>
              {site.phone}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
