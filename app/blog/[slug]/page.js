import Link from "next/link";
import getPostBySlug from "../../../lib/utils/getPostBySlug";
import AnimatedMain from "../../../components/animations/AnimatedMain";

function splitIntoParagraphs(content) {
  const sentences = content.split(". ").filter(Boolean);
  const paragraphs = [];
  for (let index = 0; index < sentences.length; index += 2) {
    const chunk = sentences.slice(index, index + 2).join(". ");
    paragraphs.push(chunk.endsWith(".") ? chunk : `${chunk}.`);
  }
  return paragraphs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found", description: "Not found" };
  return { title: post.metaTitle, description: post.metaDescription };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen pt-32 text-center bg-[var(--color-cream)]">
        <h1 className="font-display text-4xl">Post Not Found</h1>
        <Link href="/blog" className="text-[var(--color-amber)] mt-4 inline-block">Return to Blog</Link>
      </main>
    );
  }

  const paragraphs = splitIntoParagraphs(post.content);

  return (
    <AnimatedMain>
      <div className="bg-[var(--color-white)] pt-[10rem] pb-20">
        <div className="container max-w-[1100px] grid lg:grid-cols-[1fr_280px] gap-16 items-start">
          
          {/* Article Column */}
          <article className="max-w-[720px]">
             <Link href="/blog" className="text-[var(--color-amber)] font-medium text-sm mb-12 inline-block hover:-translate-x-1 transition-transform">
               ← Back to Blog
             </Link>
             
             <div className="mb-6">
                <span className="inline-block bg-[var(--color-amber)] text-white text-[0.72rem] font-medium uppercase px-4 py-1.5 rounded-full tracking-wider mb-8">
                  {post.category || "Wellness"}
                </span>
                <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-[var(--color-forest)] leading-[1.1] mb-6">
                  {post.title}
                </h1>
                <p className="text-[0.78rem] text-[var(--color-text-muted)] tracking-[0.06em] uppercase">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
             </div>

             <div className="mt-12 text-[1.05rem] leading-[1.9] text-[var(--color-text)] font-body space-y-6">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
             </div>
             
             <blockquote className="mt-12 border-l-4 border-[var(--color-amber)] pl-8 py-2 font-display italic text-[1.5rem] text-[var(--color-forest)] leading-relaxed">
               "Built for sustainable routines, Nutrigetic focuses on practical lifestyle integration over restrictive diet culture."
             </blockquote>
          </article>

          {/* Sticky Sidebar CTA */}
          <aside className="sticky top-[8rem] hidden lg:block">
            <div className="bg-[var(--color-forest)] p-8 rounded-[var(--radius-card)] text-[var(--color-cream)] shadow-xl">
               <h3 className="font-display text-xl mb-4 leading-tight">Ready to start your nutrition journey?</h3>
               <p className="text-[0.85rem] opacity-60 mb-8 leading-relaxed">
                 Book a clinical consultation to tailor these insights to your specific health profile.
               </p>
               <Link href="/contact" className="poso-button poso-button-amber w-full text-center">
                 Book Now
               </Link>
            </div>
          </aside>
          
          {/* Mobile CTA */}
          <div className="lg:hidden mt-20 p-8 bg-[var(--color-forest)] rounded-[var(--radius-card)] text-center text-[var(--color-cream)]">
             <h3 className="font-display text-2xl mb-4">Start Your Journey</h3>
             <Link href="/contact" className="poso-button poso-button-amber w-full">
                Book Consultation
             </Link>
          </div>
        </div>
      </div>
    </AnimatedMain>
  );
}
