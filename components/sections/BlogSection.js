import Link from "next/link";
import posts from "../../cms/blog/posts";

export default function BlogSection() {
  const featuredPosts = posts.slice(0, 3);
  const images = [
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
  ];

  return (
    <section className="poso-section bg-[var(--color-white)]" data-gsap-section>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="poso-label">Wellness Insights</span>
            <h2 className="poso-heading">Nutrition Insights <br /> & Wellness</h2>
          </div>
          <Link href="/blog" className="poso-ghost-link">
            View All Posts →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-[2rem]">
          {featuredPosts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col bg-[var(--color-cream)] rounded-[0.75rem] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(28,58,39,0.1)]">
              <div className="h-[13rem] relative overflow-hidden bg-gradient-to-br from-[var(--color-forest-mid)] to-[var(--color-forest)]">
                <img src={images[i]} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                <span className="absolute top-4 left-4 bg-[var(--color-amber)] text-white text-[0.65rem] font-medium uppercase px-3 py-1 rounded-full">
                  {post.category || "Wellness"}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[0.72rem] text-[var(--color-text-muted)] tracking-[0.06em] mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <h3 className="font-display text-[1.2rem] font-normal text-[var(--color-forest)] leading-[1.35] mb-4">
                  {post.title}
                </h3>
                <p className="text-[0.82rem] leading-[1.65] text-[var(--color-text-muted)] line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-6 text-[0.75rem] uppercase tracking-wider text-[var(--color-amber)] font-medium">
                  Read Article →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
