"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Weight Management",
    text: "The personalized plan completely changed my relationship with food. I feel more energetic and confident every day.",
    sentiment: "Transformative"
  },
  {
    id: 2,
    name: "Mark T.",
    role: "Clinical Support",
    text: "Science-backed advice that actually works for my chronic condition. The clinical approach is exactly what I needed.",
    sentiment: "Clinical Precision"
  },
  {
    id: 3,
    name: "Elena R.",
    role: "Lifestyle Improvement",
    text: "Minimalist, effective, and sustainable. Nutrigetic doesn't just give you a diet; they give you a lifestyle.",
    sentiment: "Sustainable"
  }
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="poso-section bg-[var(--color-cream-dark)] overflow-x-hidden" data-gsap-section>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Header Area */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <span className="poso-label">Success Stories</span>
            <h2 className="poso-heading">What <br /> <em>Clients</em> Say</h2>
            <div className="mt-12 flex gap-4">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border border-[var(--color-forest)]/20 flex items-center justify-center hover:bg-[var(--color-forest)] hover:text-white transition-all group"
                aria-label="Previous testimonial"
              >
                <span className="group-hover:-translate-x-1 transition-transform text-xl">←</span>
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border border-[var(--color-forest)]/20 flex items-center justify-center hover:bg-[var(--color-forest)] hover:text-white transition-all group"
                aria-label="Next testimonial"
              >
                <span className="group-hover:translate-x-1 transition-transform text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Carousel Area */}
          <div className="lg:w-2/3 relative min-h-[450px] w-full">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  active === i
                    ? "opacity-100 translate-x-0 scale-100 z-10"
                    : "opacity-0 translate-x-12 scale-95 z-0 pointer-events-none"
                }`}
              >
                <div className="bg-[var(--color-forest)] text-[var(--color-cream)] p-10 sm:p-16 rounded-[var(--radius-card)] shadow-2xl h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H8.01703C6.91246 16 6.01703 16.8954 6.01703 18V21M14.017 21H18.017C19.1216 21 20.017 20.1046 20.017 19V10L12.017 3L4.01703 10V19C4.01703 20.1046 4.91246 21 6.01703 21H10.017M14.017 21V16" />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <span className="text-[var(--color-amber)] font-medium text-xs mb-6 block uppercase tracking-[0.2em]">
                      {t.sentiment}
                    </span>
                    <blockquote className="font-display text-2xl sm:text-4xl font-light italic leading-relaxed">
                      "{t.text}"
                    </blockquote>
                  </div>
                  <div className="mt-12 flex items-center gap-6 relative z-10">
                    <div className="w-12 h-[1px] bg-[rgba(245,240,232,0.2)]" />
                    <div>
                      <cite className="text-xl font-display font-normal not-italic block">{t.name}</cite>
                      <span className="text-[rgba(245,240,232,0.5)] text-sm font-body tracking-wide">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Pagination */}
            <div className="absolute -bottom-12 right-0 flex gap-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 transition-all duration-300 ${
                    active === i ? "w-16 bg-[var(--color-amber)]" : "w-6 bg-[var(--color-forest)]/10"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
