import posts from "../../cms/blog/posts";

export default function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
