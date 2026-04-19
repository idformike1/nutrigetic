import Link from "next/link";
import AnimatedMain from "../components/animations/AnimatedMain";

export const metadata = {
  title: "Nutrition & Wellness Consultation | Nutrigetic",
  description: "Get personalized nutrition plans and wellness consultations with Nutrigetic."
};

const services = [
  {
    icon: "01",
    title: "Personal Nutrition Guidance",
    description:
      "Practical habit support for better food choices and daily consistency."
  },
  {
    icon: "02",
    title: "Wellness Consultations",
    description:
      "One-to-one sessions that clarify goals and shape an actionable plan."
  },
  {
    icon: "03",
    title: "Weight Management Support",
    description:
      "Balanced guidance for energy, confidence, and long-term health."
  },
  {
    icon: "04",
    title: "Family Nutrition Planning",
    description:
      "Simple meal strategies that make healthier household choices easier."
  }
];

const testimonials = [
  {
    quote: "Simple and practical guidance that actually worked for my routine.",
    name: "Client, Delhi",
    role: "Wellness consultation"
  },
  {
    quote: "The plan felt realistic, clear, and easy to follow day by day.",
    name: "Client, Gurugram",
    role: "Nutrition planning"
  },
  {
    quote: "Supportive advice without pressure, with steps I could maintain.",
    name: "Client, Noida",
    role: "Lifestyle support"
  }
];

const trustStats = [
  "100+ clients supported",
  "Personalized plans",
  "Sustainable results"
];

const posts = [
  {
    category: "Wellness",
    date: "Jan 12, 2026",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Balanced breakfast bowl with fruit and grains",
    title: "Simple Nutrition Habits That Support Everyday Wellness",
    excerpt: "A short guide to consistent habits that make healthy eating easier to maintain."
  },
  {
    category: "Consultation",
    date: "Jan 8, 2026",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Wellness professional working on a laptop during consultation notes",
    title: "How to Prepare for Your First Wellness Consultation",
    excerpt: "What to bring, what to expect, and how to make your first session more effective."
  },
  {
    category: "Meal Planning",
    date: "Jan 4, 2026",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Fresh salad bowl with vegetables and healthy ingredients",
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

          <div className="overflow-hidden rounded-xl bg-green-50 shadow-[0_18px_44px_rgba(15,23,42,0.10)] ring-1 ring-green-100">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
              alt="Fresh ingredients arranged for healthy food preparation"
              className="h-[320px] w-full object-cover md:h-[420px]"
            />
          </div>
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
          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                data-gsap-card
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-sm font-semibold text-green-700 ring-1 ring-green-100">
                  {service.icon}
                </div>
                <h3 className="mt-5 card-heading">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <Link href="/services" className="mt-5 inline-flex text-sm font-semibold text-green-700">
                  Learn more
                </Link>
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
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-lg bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] ring-1 ring-slate-200"
                data-gsap-card
              >
                <p className="text-base font-medium leading-7 text-slate-800">
                  "{item.quote}"
                </p>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-green-700">
                    {item.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
            {trustStats.map((item) => (
              <div key={item} className="rounded-lg bg-green-50 px-5 py-4 ring-1 ring-green-100">
                {item}
              </div>
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
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-lg bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                data-gsap-card
              >
                <div className="overflow-hidden bg-green-50">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-green-700">
                    {post.category}
                  </p>
                  <h3 className="mt-3 card-heading">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  <p className="mt-5 text-xs font-medium text-slate-500">{post.date}</p>
                </div>
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
