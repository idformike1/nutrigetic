import Link from "next/link";
import AnimatedMain from "../components/animations/AnimatedMain";

export const metadata = {
  title: "Nutrition & Wellness Consultation | Nutrigetic",
  description: "Get personalized nutrition plans and wellness consultations with Nutrigetic."
};

const services = [
  {
    title: "Personal Nutrition Guidance",
    description:
      "Structured nutrition support focused on practical habits, sustainable food choices, and daily consistency."
  },
  {
    title: "Wellness Consultations",
    description:
      "One-to-one consultation sessions designed to clarify goals, assess lifestyle patterns, and build an actionable plan."
  },
  {
    title: "Weight Management Support",
    description:
      "Balanced guidance for improving energy, confidence, and long-term health without overly restrictive routines."
  },
  {
    title: "Family Nutrition Planning",
    description:
      "Simple meal and wellness strategies that help households make healthier choices with less confusion."
  }
];

const testimonials = [
  "Clients describe the consultation approach as practical, clear, and easy to follow.",
  "Plans are shaped around real routines so progress feels sustainable instead of overwhelming.",
  "Nutrition advice stays focused on trust, clarity, and measurable next steps."
];

const posts = [
  {
    title: "Simple Nutrition Habits That Support Everyday Wellness",
    excerpt: "A short guide to consistent habits that make healthy eating easier to maintain."
  },
  {
    title: "How to Prepare for Your First Wellness Consultation",
    excerpt: "What to bring, what to expect, and how to make your first session more effective."
  },
  {
    title: "Balanced Meal Planning for Busy Professionals",
    excerpt: "Practical planning ideas for people who want better nutrition without complex routines."
  }
];

export default function HomePage() {
  return (
    <AnimatedMain>
      <section className="section-spacing" data-gsap-hero>
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="stack-5">
            <span className="eyebrow">
              Nutrition & Wellness Support
            </span>
            <h1 className="hero-heading">
              Personalized Nutrition & Wellness Consultation
            </h1>
            <p className="body-copy max-w-xl sm:text-lg">
              Practical guidance for stronger nutrition habits, sustainable wellness, and confident
              daily choices.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-amber-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(217,119,6,0.24)] ring-1 ring-amber-500/30 transition-colors hover:bg-amber-700"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          <div
            className="min-h-[300px] rounded-xl bg-amber-50 ring-1 ring-amber-100"
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="pb-12" data-gsap-section>
        <div className="container">
          <div className="grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white px-5 py-4 ring-1 ring-slate-200">
              Personalized Plans
            </div>
            <div className="rounded-lg bg-white px-5 py-4 ring-1 ring-slate-200">
              1:1 Consultation
            </div>
            <div className="rounded-lg bg-white px-5 py-4 ring-1 ring-slate-200">
              Sustainable Results
            </div>
            <div className="rounded-lg bg-white px-5 py-4 ring-1 ring-slate-200">
              Trusted Guidance
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider bg-gray-50" data-gsap-section>
        <div className="container">
          <div className="max-w-2xl stack-3">
            <h2 className="section-heading">Services</h2>
            <p className="body-copy">
              Core support areas built around practical nutrition planning and consultation-led
              wellness improvement.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="surface-card card-padding" data-gsap-card>
                <h3 className="card-heading">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider bg-white" data-gsap-section>
        <div className="container">
          <div className="max-w-2xl stack-3">
            <h2 className="section-heading">Why clients trust Nutrigetic</h2>
            <p className="body-copy">
              A simple credibility section focused on clarity, consistency, and supportive guidance.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item} className="surface-card-muted card-padding" data-gsap-card>
                <p className="text-sm text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider bg-gray-50" data-gsap-section>
        <div className="container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl stack-3">
              <h2 className="section-heading">From the blog</h2>
              <p className="body-copy">
                Useful content designed to support SEO visibility and answer practical wellness questions.
              </p>
            </div>
            <Link href="/blog" className="text-link">
              View all posts
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="surface-card card-padding" data-gsap-card>
                <h3 className="card-heading">{post.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
                <Link href="/blog" className="mt-4 inline-flex text-link">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-spacing section-divider bg-green-50 [--section-space:88px] md:[--section-space:104px]"
        data-gsap-section
      >
        <div className="container">
          <div className="surface-card-muted panel-padding">
            <div className="max-w-2xl stack-4">
              <h2 className="section-heading">
                Ready to start your nutrition and wellness consultation?
              </h2>
              <p className="body-copy">
                Book a consultation to get practical direction, clearer priorities, and a more
                confident path toward better daily wellness.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-amber-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(217,119,6,0.24)] ring-1 ring-amber-500/30 transition-colors hover:bg-amber-700"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedMain>
  );
}
