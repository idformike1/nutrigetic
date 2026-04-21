import Link from "next/link";
import AnimatedMain from "../components/animations/AnimatedMain";
import TestimonialSection from "../components/sections/TestimonialSection";
import BlogSection from "../components/sections/BlogSection";

export const metadata = {
  title: "Nutrition & Wellness Consultation | Nutrigetic",
  description: "Get personalized nutrition plans and wellness consultations with Nutrigetic."
};

const stats = [
  { value: "589+", label: "Happy Clients" },
  { value: "75", label: "Programs" },
  { value: "20+", label: "Years" },
  { value: "1526+", label: "Success Stories" }
];

const aboutCards = [
  "Personalized wellness plans",
  "Practical nutrition guidance",
  "Supportive habit coaching"
];

const services = [
  {
    icon: "🍃",
    title: "Nutrition Planning",
    description: "Personalized food guidance shaped around goals, routines, and sustainable habits."
  },
  {
    icon: "🥗",
    title: "Healthy Meal Support",
    description: "Simple meal direction for better energy, consistency, and everyday confidence."
  },
  {
    icon: "💪",
    title: "Weight Management",
    description: "Balanced support for realistic progress without extreme or restrictive routines."
  }
];

const programs = [
  "Weight Management",
  "Lifestyle Improvement",
  "Clinical Nutrition"
];

const steps = [
  {
    title: "Consultation",
    description: "Share your goals, current routine, health priorities, and daily challenges."
  },
  {
    title: "Plan Creation",
    description: "Receive structured nutrition direction designed around your lifestyle."
  },
  {
    title: "Guided Progress",
    description: "Adjust habits with clear next steps and steady support over time."
  }
];

const testimonials = [
  {
    quote: "Simple and practical guidance that actually worked for my routine.",
    name: "Client",
    location: "Delhi"
  },
  {
    quote: "The plan felt realistic, clear, and easy to follow day by day.",
    name: "Client",
    location: "Gurugram"
  },
  {
    quote: "Supportive advice without pressure, with steps I could maintain.",
    name: "Client",
    location: "Noida"
  }
];


export default function HomePage() {
  return (
    <AnimatedMain>
      {/* Hero Section */}
      <section className="poso-hero-luxury" data-gsap-hero>
        <div className="hero-shape-decorator" />
        <div className="rotating-ring-decorator" />
        
        <div className="poso-hero-content-luxury">
          <span className="eyebrow">Welcome to Nutrigetic</span>
          <h1 className="hero-h1-luxury">
            Personalized Nutrition <br /> & <em>Wellness</em>
          </h1>
          <p className="mb-10 max-w-[38ch] font-body text-[1rem] leading-[1.75] text-[var(--color-text-muted)]">
            Practical nutrition guidance, supportive consultation, and wellness programs built for healthier daily routines.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="/contact" className="poso-button group">
              Book Consultation
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <button className="poso-ghost-link group">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-forest)] transition-transform group-hover:scale-110">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                  <path d="M10 6L0 12V0L10 6Z" />
                </svg>
              </span>
              View Programs
            </button>
          </div>

          <div className="poso-stats-luxury mt-14 flex gap-10 border-t border-[var(--color-rule)] pt-8">
            {[
              { val: "589+", label: "Happy Clients" },
              { val: "75", label: "Programs" },
              { val: "20+", label: "Years" },
              { val: "1526+", label: "Success Stories" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-[2.4rem] font-semibold leading-none text-[var(--color-forest)]">{stat.val}</span>
                <span className="mt-1 text-[0.73rem] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="poso-hero-visual-luxury">
          <div className="luxury-image-wrapper">
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full opacity-30">
              <path fill="white" d="M100,20 C120,20 140,40 140,80 C140,120 120,160 100,180 C80,160 60,120 60,80 C60,40 80,20 100,20" />
            </svg>
          </div>
          
          <div className="floating-pill">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-amber)] text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[var(--color-forest)]">Certified Nutritionist</span>
              <span className="text-[0.7rem] text-[var(--color-text-muted)]">20+ Years Experience</span>
            </div>
          </div>

          <div className="floating-badge">
            <span className="font-display text-[1.6rem] font-semibold">75</span>
            <span className="text-[0.6rem] uppercase tracking-[0.1em]">Programs</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="poso-section bg-[var(--color-white)]" data-gsap-section>
        <div className="container grid lg:grid-cols-2 lg:gap-[6rem] items-center">
          <div className="about-visual-panel">
            <div className="about-main-card">
              <svg viewBox="0 0 200 200" className="absolute bottom-4 right-4 h-48 w-48 opacity-15">
                <path fill="white" d="M100,20 C120,20 140,40 140,80 C140,120 120,160 100,180 C80,160 60,120 60,80 C60,40 80,20 100,20" />
              </svg>
            </div>
            <div className="experience-card-floating">
              <span className="block font-display text-[3rem] font-semibold text-[var(--color-forest)]">20+</span>
              <span className="text-[0.72rem] uppercase tracking-wide text-[var(--color-text-muted)]">Years of Experience</span>
            </div>
          </div>

          <div>
            <span className="poso-label">About Nutrigetic</span>
            <h2 className="poso-heading mb-6">Nutrition Guidance Designed Around <em>Real Life</em></h2>
            <p className="mb-8 text-[1.0625rem] text-[var(--color-text-muted)] leading-[1.75]">
              We help clients build healthier routines through clear nutrition planning, practical consultation, and sustainable wellness habits that fit daily life.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Personalized wellness plans",
                "Practical nutrition guidance",
                "Supportive habit coaching"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-[0.9rem] text-[var(--color-text-muted)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-forest)] text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="poso-section bg-[var(--color-forest)]" data-gsap-section>
        <div className="container">
          <div className="mb-14">
            <span className="section-label-amber poso-label">Our Services</span>
            <h2 className="poso-heading text-[var(--color-cream)]">Support for Better Nutrition <br /> and Wellness</h2>
          </div>

          <div className="services-container-luxury">
            {[
              { id: "01", title: "Nutrition Planning", body: "Personalized food guidance shaped around goals, routines, and sustainable habits." },
              { id: "02", title: "Healthy Meal Support", body: "Simple meal direction for better energy, consistency, and everyday confidence." },
              { id: "03", title: "Weight Management", body: "Balanced support for realistic progress without extreme or restrictive routines." }
            ].map((s) => (
              <div key={s.id} className="service-card-luxury group">
                <span className="mb-8 block font-display text-[4rem] font-light leading-none text-white/10">{s.id}</span>
                <h3 className="mb-4 font-display text-[1.5rem] font-normal text-[var(--color-cream)]">{s.title}</h3>
                <p className="mb-8 text-[0.85rem] leading-[1.75] text-[rgba(245,240,232,0.55)]">{s.body}</p>
                <Link href="/services" className="text-[0.75rem] uppercase tracking-[0.08em] text-[var(--color-amber-light)] opacity-0 transition-opacity group-hover:opacity-100">
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="poso-section poso-cream" data-gsap-section>
        <div className="container poso-program">
          <div className="poso-program-copy">
            <span className="poso-label">Featured Programs</span>
            <h2 className="poso-heading">Programs Built for Sustainable Progress</h2>
            <p>
              Choose structured support for nutrition, lifestyle, and wellness goals with a process
              that feels focused and realistic.
            </p>
            <Link href="/services" className="poso-button">
              Explore Programs
            </Link>
          </div>
          <div className="poso-program-media">
            <div className="poso-image-card poso-image-card-large">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80"
                alt="Healthy food preparation"
              />
            </div>
            <div className="poso-program-list">
              {programs.map((program) => (
                <div key={program} className="poso-program-pill">
                  {program}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="poso-section bg-[var(--color-cream-dark)]" data-gsap-section>
        <div className="container grid lg:grid-cols-[1.2fr_2fr] gap-[5rem] items-start">
          <div>
            <span className="poso-label">How It Works</span>
            <h2 className="poso-heading">A Clear Process for Your <em>Wellness Journey</em></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-[3rem]">
            {[
              { id: "01", title: "Consultation", body: "Share your goals, current routine, health priorities, and daily challenges." },
              { id: "02", title: "Plan Creation", body: "Receive structured nutrition direction designed around your lifestyle." },
              { id: "03", title: "Guided Progress", body: "Adjust habits with clear next steps and steady support over time." }
            ].map((step, i) => (
              <div key={step.id} className="relative group">
                <span className="block font-display text-[5rem] font-light leading-none text-[rgba(28,58,39,0.08)] mb-4">{step.id}</span>
                <h3 className="font-display text-[1.6rem] font-normal text-[var(--color-forest)] mb-3">{step.title}</h3>
                <p className="text-[0.87rem] leading-[1.75] text-[var(--color-text-muted)] font-body">
                  {step.body}
                </p>
                {i < 2 && (
                  <div className="hidden lg:block absolute -right-[1.5rem] top-[2.5rem] w-[3rem] h-[1px] bg-[var(--color-rule)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="poso-video-section" data-gsap-section>
        <div className="container">
          <div className="poso-video-card">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
              alt="Balanced nutritious meal"
            />
            <button type="button" className="poso-video-play" aria-label="Play wellness video">
              ▶
            </button>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <BlogSection />

      {/* Final CTA Section */}
      <section className="final-cta-luxury" data-gsap-section>
        <div className="cta-circle-deco cta-circle-1" />
        <div className="cta-circle-deco cta-circle-2" />
        
        <div className="container relative z-10">
          <span className="section-label-amber poso-label">Start Today</span>
          <h2 className="mx-auto mt-4 max-w-[16ch] font-display text-4xl sm:text-6xl text-[var(--color-cream)]">
            Ready to Build a Healthier Routine?
          </h2>
          <p className="mx-auto mt-6 max-w-[44ch] text-[var(--color-cream)] opacity-60">
            Book a consultation and get practical nutrition guidance designed around your goals.
          </p>
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
