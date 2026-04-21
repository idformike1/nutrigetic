"use client";

import Link from "next/link";
import AnimatedMain from "../../components/animations/AnimatedMain";

export default function ServicesPage() {
  return (
    <AnimatedMain>
      {/* Services Hero */}
      <section className="bg-[var(--color-forest)] pt-[12rem] pb-[7rem] px-4 md:px-[4rem]">
        <div className="container">
          <span className="poso-label text-[var(--color-amber)] before:bg-[var(--color-amber)]">Our Services</span>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.08] text-[var(--color-cream)] mt-4">
            Nutrition <em>Programs</em>
          </h1>
          <p className="mt-8 max-w-[52ch] text-[1.125rem] leading-[1.8] text-[rgba(245,240,232,0.65)] font-body">
            Explore Nutrigetic's range of services: from sustainable weight management to specialized clinical nutrition plans.
          </p>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="poso-section bg-[var(--color-white)]" data-gsap-section>
        <div className="container grid md:grid-cols-2 gap-8">
          {[
            { id: "01", title: "Weight Management", body: "Support focused on sustainable habits, clearer food choices, and realistic progress." },
            { id: "02", title: "Lifestyle Nutrition", body: "Guidance designed to improve everyday nutrition patterns." },
            { id: "03", title: "Personalized Diet Plan", body: "Structured recommendations shaped around individual needs." },
            { id: "04", title: "Consultation Sessions", body: "One-to-one sessions that help clarify priorities." }
          ].map((s) => (
            <div key={s.id} className="bg-[var(--color-cream)] p-10 rounded-[var(--radius-card)] relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]" data-gsap-card>
              <span className="block font-display text-[4rem] font-light leading-none text-[rgba(28,58,39,0.08)] mb-4">{s.id}</span>
              <h3 className="font-display text-[1.6rem] font-normal text-[var(--color-forest)] mb-4">{s.title}</h3>
              <p className="text-[0.87rem] leading-[1.75] text-[var(--color-text-muted)] mb-8">{s.body}</p>
              <Link href="/contact" className="text-[0.78rem] font-medium uppercase tracking-wider text-[var(--color-amber)]">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="poso-section bg-[var(--color-cream-dark)]" data-gsap-section>
        <div className="container">
          <div className="mb-14 text-center">
            <span className="poso-label">The Process</span>
            <h2 className="poso-heading mx-auto">How We Work <em>Together</em></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Share your goals", body: "We start by discussing your health history and current routine." },
              { num: "02", title: "Review routines", body: "We identify areas where nutrition can be improved practically." },
              { num: "03", title: "Receive recommendations", body: "Get a clear, achievable nutrition plan built for your lifestyle." },
              { num: "04", title: "Move forward", body: "Implement the plan with ongoing support and adjustments." }
            ].map((step, i) => (
              <div key={step.num} className="relative group text-center md:text-left">
                <span className="block font-display text-[3.5rem] font-light text-[var(--color-forest)]/10 mb-4">{step.num}</span>
                <h3 className="font-display text-[1.4rem] font-medium text-[var(--color-forest)] mb-2">{step.title}</h3>
                <p className="text-[0.87rem] text-[var(--color-text-muted)] leading-[1.7]">{step.body}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-[2rem] -right-4 w-8 h-[1px] bg-[var(--color-rule)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-luxury" data-gsap-section>
        <div className="cta-circle-deco cta-circle-1" />
        <div className="cta-circle-deco cta-circle-2" />
        <div className="container relative z-10 text-center">
          <span className="section-label-amber poso-label">Start Today</span>
          <h2 className="mx-auto mt-4 max-w-[16ch] font-display text-4xl sm:text-6xl text-[var(--color-cream)]">
            Ready to Build a Healthier Routine?
          </h2>
          <div className="mt-10">
            <Link href="/contact" className="poso-button poso-button-amber">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </AnimatedMain>
  );
}
