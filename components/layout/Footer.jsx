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
    <footer className="bg-[#111d16] py-[5rem] px-4 md:px-[4rem] text-[var(--color-cream)]">
      <div className="container lg:grid lg:grid-cols-4 lg:gap-[4rem] flex flex-col gap-10">
        {/* Column 1 - Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-display text-[1.5rem] font-semibold text-[var(--color-cream)]">
            Nutri<span className="italic text-[var(--color-amber)]">getic</span>
          </Link>
          <p className="max-w-[22ch] text-[0.83rem] leading-[1.7] text-[rgba(245,240,232,0.4)] font-body">
            Practical wellness guidance for healthier, more sustainable daily living.
          </p>
        </div>

        {/* Column 2 - Navigation */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-[rgba(245,240,232,0.35)] font-body">
            Navigation
          </h2>
          <nav className="flex flex-col gap-3" aria-label="Footer Navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.85rem] text-[rgba(245,240,232,0.55)] transition-colors hover:text-[var(--color-cream)] font-body"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3 - Services */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-[rgba(245,240,232,0.35)] font-body">
            Services
          </h2>
          <nav className="flex flex-col gap-3" aria-label="Services Navigation">
            {["Nutrition Planning", "Healthy Meal Support", "Weight Management", "BMI Calculator"].map((item) => (
              <span key={item} className="text-[0.85rem] text-[rgba(245,240,232,0.55)] font-body">
                {item}
              </span>
            ))}
          </nav>
        </div>

        {/* Column 4 - Contact */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-[rgba(245,240,232,0.35)] font-body">
            Contact
          </h2>
          <div className="flex flex-col gap-4 text-[0.85rem] text-[rgba(245,240,232,0.6)] font-body">
            <div>
              <p className="text-[0.68rem] uppercase text-[rgba(245,240,232,0.35)] mb-1">Office</p>
              <p>123 Wellness Avenue, Health District, New Delhi</p>
            </div>
            <div>
              <p className="text-[0.68rem] uppercase text-[rgba(245,240,232,0.35)] mb-1">Email</p>
              <a href="mailto:hello@nutrigetic.com" className="hover:text-[var(--color-cream)] transition-colors">hello@nutrigetic.com</a>
            </div>
            <div>
              <p className="text-[0.68rem] uppercase text-[rgba(245,240,232,0.35)] mb-1">Phone</p>
              <a href="tel:+910000000000" className="hover:text-[var(--color-cream)] transition-colors">+91 00000 00000</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="col-span-full mt-10 border-t border-[rgba(245,240,232,0.08)] pt-[1.5rem] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.78rem] text-[rgba(245,240,232,0.3)] font-body">
            © {year} Nutrigetic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
