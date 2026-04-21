"use client";

import AnimatedMain from "../../components/animations/AnimatedMain";

export default function AboutPage() {
  return (
    <AnimatedMain>
      {/* About Hero */}
      <section className="bg-[var(--color-forest)] pt-[12rem] pb-[7rem] px-4 md:px-[4rem]">
        <div className="container">
          <span className="poso-label text-[var(--color-amber)] before:bg-[var(--color-amber)]">About Nutrigetic</span>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.08] text-[var(--color-cream)] mt-4">
            Our <em>Philosophy</em>
          </h1>
          <p className="mt-8 max-w-[52ch] text-[1.125rem] leading-[1.8] text-[rgba(245,240,232,0.65)] font-body">
            Nutrigetic is built around clear, supportive nutrition and wellness guidance that focuses on creating realistic, sustainable habits.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="poso-section bg-[var(--color-white)]" data-gsap-section>
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="font-display italic text-[2.2rem] text-[var(--color-forest)] leading-tight border-l-4 border-[var(--color-amber)] pl-10" data-gsap-card>
            "Nutrition isn't about restriction; it's about building a supportive foundation for the life you want to live."
          </div>
          <div>
            <h2 className="poso-heading mb-6">Why Nutrigetic <em>exists</em></h2>
            <p className="text-[var(--color-text-muted)] leading-[1.9] mb-6">
              Nutrigetic exists to make nutrition feel more practical, approachable, and easier to apply in everyday life. The focus is not on overly complicated routines, but on guidance that fits real schedules, real habits, and real health goals.
            </p>
            <p className="text-[var(--color-text-muted)] leading-[1.9]">
              The goal is to help people move from uncertainty to clarity with a process that feels supportive, structured, and sustainable over time.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="poso-section bg-[var(--color-cream-dark)]" data-gsap-section>
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="poso-heading mb-6">Expertise and <em>approach</em></h2>
            <p className="text-[var(--color-text-muted)] leading-[1.9] mb-6">
              Services are designed to start with understanding the person first: goals, routines, current challenges, and the areas that need the most practical support.
            </p>
            <p className="text-[var(--color-text-muted)] leading-[1.9]">
              What makes the approach distinct is its emphasis on simple action, consistent habits, and guidance that remains realistic enough to follow beyond the first consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { title: "Credentials", body: "Professional nutrition and wellness credentials can be presented here in a clear, concise format." },
              { title: "Experience", body: "Relevant years of practice, areas of support, and consultation focus can be summarized here." },
              { title: "Client Focus", body: "Every plan is shaped around practical routines, realistic change, and long-term consistency." }
            ].map((item) => (
              <div key={item.title} className="bg-[var(--color-white)] p-8 rounded-[var(--radius-card)] shadow-[var(--shadow-card)]" data-gsap-card>
                <h3 className="font-display text-[1.4rem] text-[var(--color-forest)] mb-2">{item.title}</h3>
                <p className="text-[0.87rem] text-[var(--color-text-muted)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedMain>
  );
}
