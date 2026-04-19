import Link from "next/link";

import posts from "../../cms/blog/posts";

export const metadata = {
  title: "Nutrition Blog | Health & Wellness Tips",
  description: "Read articles on nutrition, recipes, and healthy living."
};

const blogImages = [
  {
    category: "Hydration",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Balanced breakfast bowl with fruit and grains"
  },
  {
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Fresh salad bowl with vegetables and healthy ingredients"
  },
  {
    category: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Fresh ingredients arranged for healthy food preparation"
  }
];

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
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => {
              const image = blogImages[index % blogImages.length];

              return (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-lg bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="overflow-hidden bg-green-50">
                      <img
                        src={image.image}
                        alt={image.imageAlt}
                        className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-green-700">
                        {image.category}
                      </p>
                      <h2 className="mt-3 card-heading">{post.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                      <p className="mt-5 text-xs font-medium text-slate-500">{post.date}</p>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
