"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact", cta: true },
  { href: "/bmi-calculator", label: "BMI Calculator" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="container">
        <div className="flex min-h-18 items-center justify-between gap-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            Nutrigetic
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary Navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.cta
                    ? "inline-flex rounded-full bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(217,119,6,0.2)] ring-1 ring-amber-500/30 transition-colors hover:bg-amber-700"
                    : "rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">
              {isOpen ? "Close navigation menu" : "Open navigation menu"}
            </span>
            <span className="flex h-5 w-5 flex-col items-center justify-center gap-1">
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
            </span>
          </button>
        </div>

        {isOpen ? (
          <nav
            id="mobile-navigation"
            className="border-t border-slate-200 py-4 md:hidden"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.cta
                      ? "inline-flex rounded-xl bg-amber-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(217,119,6,0.2)] ring-1 ring-amber-500/30 transition-colors hover:bg-amber-700"
                      : "rounded-xl px-4 py-3 text-sm font-medium text-slate-700"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
