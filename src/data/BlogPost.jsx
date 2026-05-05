import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-white px-6 py-24 text-neutral-900">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-semibold">Post not found</h1>
          <p className="mb-8 text-neutral-600">
            This blog post does not exist or may have been moved.
          </p>
          <Link to="/blog" className="underline underline-offset-4">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-20">
        <Link
          to="/blog"
          className="mb-10 inline-block text-sm font-medium text-neutral-500 underline underline-offset-4 hover:text-neutral-900"
        >
          Back to Blog
        </Link>

        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
            {post.category}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              post.status === "Published"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {post.status}
          </span>
        </div>

        <h1 className="mb-5 text-4xl font-semibold tracking-tight md:text-5xl">
          {post.title}
        </h1>

        <div className="mb-10 flex items-center gap-3 text-sm text-neutral-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="space-y-6 text-lg leading-8 text-neutral-700">
          {post.content
            .trim()
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
        </div>
      </article>
    </main>
  );
}