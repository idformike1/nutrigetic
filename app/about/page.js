import Link from "next/link";
import AnimatedMain from "../../components/animations/AnimatedMain";

export const metadata = {
  title: "About Nutrigetic | Nutrition Experts",
  description: "Learn about Nutrigetic’s approach to practical nutrition and wellness."
};

const trustItems = [
  {
    title: "Credentials",
    description:
      "Professional nutrition and wellness credentials can be presented here in a clear, concise format."
  },
  {
    title: "Experience",
    description:
      "Relevant years of practice, areas of support, and consultation focus can be summarized here."
  },
  {
    title: "Client Focus",
    description:
      "Every plan is shaped around practical routines, realistic change, and long-term consistency."
  }
];

export default function AboutPage() {
  return (
    <AnimatedMain>
      <section className="section-spacing" data-gsap-hero>
        <div className="container">
          <div className="max-w-3xl stack-5">
            <span className="eyebrow">
              About Nutrigetic
            </span>
            <h1 className="hero-heading">
              About Nutrigetic
            </h1>
            <p className="body-copy reading-width sm:text-lg">
              Nutrigetic is built around clear, supportive nutrition and wellness guidance that
              helps people make healthier decisions with more confidence and less confusion.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider" data-gsap-section>
        <div className="container">
          <div className="max-w-3xl stack-4">
            <h2 className="section-heading">Why Nutrigetic exists</h2>
            <p className="text-base text-slate-600">
              Nutrigetic exists to make nutrition feel more practical, approachable, and easier to
              apply in everyday life. The focus is not on overly complicated routines, but on
              guidance that fits real schedules, real habits, and real health goals.
            </p>
            <p className="text-base text-slate-600">
              The goal is to help people move from uncertainty to clarity with a process that feels
              supportive, structured, and sustainable over time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider" data-gsap-section>
        <div className="container">
          <div className="max-w-3xl stack-4">
            <h2 className="section-heading">Expertise and approach</h2>
            <p className="text-base text-slate-600">
              Services are designed to start with understanding the person first: goals, routines,
              current challenges, and the areas that need the most practical support.
            </p>
            <p className="text-base text-slate-600">
              What makes the approach distinct is its emphasis on simple action, consistent habits,
              and guidance that remains realistic enough to follow beyond the first consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider" data-gsap-section>
        <div className="container">
          <div className="max-w-2xl stack-3">
            <h2 className="section-heading">Trust and credibility</h2>
            <p className="body-copy">
              This section is reserved for concise trust signals that support confidence without
              overwhelming the page.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {trustItems.map((item) => (
              <article key={item.title} className="surface-card card-padding" data-gsap-card>
                <h3 className="card-heading">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider" data-gsap-section>
        <div className="container">
          <div className="surface-card-muted panel-padding">
            <div className="max-w-2xl stack-4">
              <h2 className="section-heading">
                Ready to book a consultation?
              </h2>
              <p className="body-copy">
                Take the next step with a consultation focused on practical nutrition guidance,
                clearer priorities, and a more sustainable path to wellness.
              </p>
              <div>
                <Link href="/contact" className="cta-button">
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
