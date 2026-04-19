import Link from "next/link";
import AnimatedMain from "../../components/animations/AnimatedMain";

export const metadata = {
  title: "Nutrition Services | Personalized Diet Plans",
  description: "Explore nutrition services including weight management and lifestyle planning."
};

const services = [
  {
    title: "Weight Management",
    description:
      "Support focused on sustainable habits, clearer food choices, and realistic progress over time."
  },
  {
    title: "Lifestyle Nutrition",
    description:
      "Guidance designed to improve everyday nutrition patterns in a way that fits work, family, and routine."
  },
  {
    title: "Personalized Diet Plan",
    description:
      "Structured recommendations shaped around individual needs, preferences, and practical goals."
  },
  {
    title: "Consultation Sessions",
    description:
      "One-to-one sessions that help clarify priorities, answer questions, and create a focused next step."
  }
];

const steps = [
  "Book a consultation and share your primary nutrition or wellness goals.",
  "Review current routines, challenges, and the areas that need practical support.",
  "Receive clear recommendations and an approach tailored to your day-to-day life.",
  "Move forward with a plan that is easier to follow and adjust over time."
];

const benefits = [
  "Practical guidance designed for real schedules",
  "Clearer structure for everyday nutrition decisions",
  "Support focused on consistency, not extremes",
  "Consultation-led planning with a client-first approach"
];

export default function ServicesPage() {
  return (
    <AnimatedMain>
      <section className="section-spacing" data-gsap-hero>
        <div className="container">
          <div className="max-w-3xl stack-5">
            <span className="eyebrow">
              Nutrition programs
            </span>
            <h1 className="hero-heading">
              Nutrition Services and Programs
            </h1>
            <p className="body-copy reading-width sm:text-lg">
              Explore nutrition services designed to support healthier routines, clearer decisions,
              and more sustainable wellness progress.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider" data-gsap-section>
        <div className="container">
          <div className="max-w-2xl stack-3">
            <h2 className="section-heading">Nutrition service options</h2>
            <p className="body-copy">
              A focused set of services for clients looking for structure, clarity, and ongoing support.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="surface-card card-padding" data-gsap-card>
                <h3 className="card-heading">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/contact" className="text-link">
                    Learn more
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(217,119,6,0.2)] ring-1 ring-amber-500/30 transition-colors hover:bg-amber-700"
                  >
                    Book Consultation
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider" data-gsap-section>
        <div className="container">
          <div className="max-w-2xl stack-3">
            <h2 className="section-heading">How the consultation process works</h2>
            <p className="body-copy">
              A simple process that keeps the experience clear, supportive, and easy to follow.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step} className="surface-card-muted card-padding" data-gsap-card>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-sm text-slate-700">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider" data-gsap-section>
        <div className="container">
          <div className="max-w-2xl stack-3">
            <h2 className="section-heading">Benefits of nutrition consultation</h2>
            <p className="body-copy">
              Services are shaped to make healthy progress feel clearer and more manageable.
            </p>
          </div>
          <div className="mt-8 max-w-3xl surface-card card-padding">
            <ul className="space-y-3 text-sm text-slate-700">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider" data-gsap-section>
        <div className="container">
          <div className="surface-card-muted panel-padding">
            <div className="max-w-2xl stack-4">
              <h2 className="section-heading">
                Ready to book your nutrition consultation?
              </h2>
              <p className="body-copy">
                Start with a consultation to get focused guidance, practical direction, and a service
                plan that fits your goals.
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
