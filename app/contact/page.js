import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Nutrigetic | Book Consultation",
  description: "Contact Nutrigetic to book your personalized nutrition consultation."
};

export default function ContactPage() {
  return (
    <main>
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl stack-5">
            <span className="eyebrow">
              Contact Nutrigetic
            </span>
            <h1 className="hero-heading">
              Contact Nutrigetic to Book a Consultation
            </h1>
            <p className="body-copy reading-width sm:text-lg">
              Reach out with your goals, questions, or consultation request. The contact process is
              designed to feel simple, supportive, and easy to follow.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
            <div className="surface-card panel-padding">
              <div className="max-w-2xl stack-3">
                <h2 className="section-heading">Book a consultation</h2>
                <p className="body-copy">
                  Share a few details to start the conversation. A simple form is enough for now.
                </p>
              </div>

              <ContactForm />
            </div>

            <aside className="surface-card-muted panel-padding">
              <div className="stack-3">
                <h2 className="section-heading">Contact information</h2>
                <p className="body-copy">
                  Use the form or reach out directly through the details below.
                </p>
              </div>

              <div className="mt-8 space-y-6 text-sm text-slate-700">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-900">Address</h3>
                  <p>123 Wellness Avenue, Health District, New Delhi</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-900">Email</h3>
                  <p>
                    <a href="mailto:hello@nutrigetic.com">hello@nutrigetic.com</a>
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-900">Phone</h3>
                  <p>
                    <a href="tel:+910000000000">+91 00000 00000</a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider">
        <div className="container">
          <div className="surface-card-muted panel-padding">
            <div className="max-w-2xl stack-4">
              <h2 className="section-heading">
                Start with a consultation that feels clear and practical.
              </h2>
              <p className="body-copy">
                Share your goals and take the first step toward a more focused nutrition and wellness plan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
