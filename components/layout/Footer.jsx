import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="container">
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div className="stack-3">
            <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
              Nutrigetic
            </Link>
            <p className="max-w-xs text-sm text-slate-600">
              Practical wellness guidance for healthier, more sustainable daily living.
            </p>
          </div>

          <div className="stack-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
              Navigation
            </h2>
            <nav className="flex flex-col gap-3" aria-label="Footer Navigation">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="stack-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
              Contact
            </h2>
            <div className="stack-3 text-sm text-slate-600">
              <p>123 Wellness Avenue, Health District, New Delhi</p>
              <p>
                <a href="mailto:hello@nutrigetic.com">hello@nutrigetic.com</a>
              </p>
              <p>
                <a href="tel:+910000000000">+91 00000 00000</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-5">
          <p className="text-sm text-slate-500">
            © {year} Nutrigetic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
