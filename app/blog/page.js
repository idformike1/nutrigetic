import Link from "next/link";

import posts from "../../cms/blog/posts";

export const metadata = {
  title: "Nutrition Blog | Health & Wellness Tips",
  description: "Read articles on nutrition, recipes, and healthy living."
};

export default function BlogPage() {
  return (
    <main>
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl stack-5">
            <span className="eyebrow">
              Nutrition and wellness articles
            </span>
            <h1 className="hero-heading">
              Nutrition & Wellness Blog
            </h1>
            <p className="body-copy reading-width sm:text-lg">
              Explore practical articles on healthy routines, wellness support, and simple nutrition topics.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing section-divider">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-6">
            {posts.map((post) => (
              <article key={post.id} className="surface-card panel-padding">
                <p className="text-sm text-slate-500">{post.date}</p>
                <h2 className="mt-3 card-heading text-2xl">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-emerald-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 body-copy reading-width">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-link">
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
