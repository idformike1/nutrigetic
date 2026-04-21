"use client";

import AnimatedMain from "../../components/animations/AnimatedMain";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <AnimatedMain>
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Panel */}
        <div className="bg-[var(--color-forest)] pt-[10rem] pb-[5rem] px-6 md:px-[6rem] relative overflow-hidden flex flex-col justify-between">
          <svg viewBox="0 0 200 200" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-[0.06] text-white">
             <path fill="currentColor" d="M100,20 C120,20 140,40 140,80 C140,120 120,160 100,180 C80,160 60,120 60,80 C60,40 80,20 100,20" />
          </svg>

          <div className="relative z-10">
            <span className="poso-label text-[var(--color-amber-light)] before:bg-[var(--color-amber-light)]">Start your journey</span>
            <h1 className="font-display text-4xl md:text-6xl text-[var(--color-cream)] mt-6 leading-tight">
              Book your <br /> <em>consultation</em>
            </h1>
            <p className="mt-8 text-[rgba(245,240,232,0.6)] font-body leading-relaxed max-w-[40ch]">
              Share your clinical goals and health history to help us prepare a supportive session designed around your routine.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 mt-12">
            {[
              "589+ Clients",
              "20+ Years",
              "Certified"
            ].map((badge) => (
              <span key={badge} className="px-4 py-2 rounded-full border border-[rgba(245,240,232,0.1)] text-[var(--color-cream)] text-[0.75rem] font-medium tracking-wide">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-[var(--color-white)] pt-[10rem] pb-[5rem] px-6 md:px-[6rem] flex flex-col justify-center">
          <ContactForm />
        </div>
      </div>
    </AnimatedMain>
  );
}
