"use client";

import Link from "next/link";
import posts from "../../cms/blog/posts";
import AnimatedMain from "../../components/animations/AnimatedMain";

const blogImages = [
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=900&q=80"
];

export default function BlogPage() {
  return (
    <AnimatedMain>
      {/* Blog Hero */}
      <section className="bg-[var(--color-forest)] pt-[12rem] pb-[7rem] px-4 md:px-[4rem]">
        <div className="container">
          <span className="poso-label text-[var(--color-amber)] before:bg-[var(--color-amber)]">Resource Library</span>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.08] text-[var(--color-cream)] mt-4">
            Nutrition <em>Insights</em>
          </h1>
          <p className="mt-8 max-w-[52ch] text-[1.125rem] leading-[1.8] text-[rgba(245,240,232,0.65)] font-body">
            Explore practical articles on healthy routines, wellness support, and simple nutrition topics designed for sustainable living.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="poso-section bg-[var(--color-white)]" data-gsap-section>
        <div className="container overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col bg-[var(--color-cream)] rounded-[0.75rem] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(28,58,39,0.1)]">
                <div className="h-[14rem] relative overflow-hidden bg-gradient-to-br from-[var(--color-forest-mid)] to-[var(--color-forest)]">
                  <img src={blogImages[i % blogImages.length]} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                  <span className="absolute top-4 left-4 bg-[var(--color-amber)] text-white text-[0.65rem] font-medium uppercase px-3 py-1 rounded-full">
                    {post.category || "Wellness"}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[0.72rem] text-[var(--color-text-muted)] tracking-[0.06em] mb-4">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <h3 className="font-display text-[1.4rem] font-normal text-[var(--color-forest)] leading-[1.3] mb-4 group-hover:text-[var(--color-amber)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[0.87rem] leading-[1.7] text-[var(--color-text-muted)] line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto text-[0.75rem] uppercase tracking-wider text-[var(--color-amber)] font-medium">
                    Read Article →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AnimatedMain>
  );
}
