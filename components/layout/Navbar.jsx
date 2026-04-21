"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-[100] w-full border-b border-[var(--color-rule)] bg-[rgba(245,240,232,0.85)] py-6 backdrop-blur-md transition-all duration-300">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-[1.6rem] font-semibold tracking-[0.02em] text-[var(--color-forest)]"
          onClick={() => setIsOpen(false)}
        >
          Nutri<span className="italic text-[var(--color-amber)]">getic</span>
        </Link>

        <nav className="hidden items-center gap-[2.5rem] lg:flex" aria-label="Primary Navigation">
          {links.filter(l => !l.cta).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[0.82rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-forest)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-[var(--radius-pill)] bg-[var(--color-forest)] px-[1.6rem] py-[0.65rem] font-body text-[0.82rem] font-medium tracking-[0.06em] text-[var(--color-cream)] transition-all duration-300 hover:bg-[var(--color-amber)] hover:-translate-y-[1px]"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Header Elements */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link
            href="/contact"
            className="rounded-[var(--radius-pill)] bg-[var(--color-forest)] px-4 py-2 font-body text-[0.75rem] font-medium text-[var(--color-cream)]"
          >
            Book
          </Link>
          <button
            type="button"
            className="p-2 text-[var(--color-forest)]"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="flex h-5 w-5 flex-col items-center justify-center gap-1">
              <span className={`block h-[1.5px] w-5 rounded-full bg-current transition-transform ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-5 rounded-full bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] w-5 rounded-full bg-current transition-transform ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="absolute top-full left-0 w-full border-t border-[var(--color-rule)] bg-[var(--color-cream)] p-6 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.9rem] font-medium uppercase tracking-widest ${link.cta ? "text-[var(--color-amber)]" : "text-[var(--color-forest)]"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
