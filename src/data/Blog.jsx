import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Blog
          </p>

          <h1 className="mb-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Notes, Builds, & Ideas
          </h1>

          <p className="text-lg leading-8 text-neutral-600">
            A growing collection of project notes, technical reflections, and
            short writeups on data analytics, economics, machine learning, and
            things I am building. Some posts are polished reflections, while
            others are early notes that may grow into larger projects over time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex flex-wrap items-center gap-2">
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

              <h2 className="mb-3 text-2xl font-semibold tracking-tight">
                {post.title}
              </h2>

              <p className="mb-5 leading-7 text-neutral-600">{post.excerpt}</p>

              <div className="mb-6 flex items-center gap-3 text-sm text-neutral-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium text-neutral-900 underline underline-offset-4 transition group-hover:text-neutral-600"
              >
                Read post
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}