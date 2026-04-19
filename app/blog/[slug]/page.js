import Link from "next/link";

import getPostBySlug from "../../../lib/utils/getPostBySlug";

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

  if (!post) {
    return {
      title: "Not Found | Nutrigetic",
      description: "The requested blog post could not be found."
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main>
        <section className="section-spacing">
          <div className="container">
            <div className="mx-auto max-w-3xl stack-4">
              <h1 className="text-3xl font-semibold text-slate-950">Not Found</h1>
              <p className="body-copy">The requested blog post could not be found.</p>
              <Link href="/blog" className="inline-flex text-link">
                Back to blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const paragraphs = splitIntoParagraphs(post.content);

  return (
    <main>
      <section className="section-spacing">
        <div className="container">
          <article className="mx-auto max-w-[700px]">
            <Link href="/blog" className="inline-flex text-link">
              Back to blog
            </Link>
            <header className="mt-6 stack-4">
              <p className="text-sm text-slate-500">{post.date}</p>
              <h1 className="hero-heading max-w-none">{post.title}</h1>
              <p className="text-lg leading-8 text-slate-600">{post.excerpt}</p>
            </header>
            <div className="mt-10 space-y-6 text-[1.0625rem] leading-8 text-slate-700">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
