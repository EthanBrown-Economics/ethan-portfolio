import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

function ArticleImage({ post }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-100">
      {post.image ? (
        <img
          src={post.image}
          alt={post.title}
          className="h-56 w-full object-cover"
        />
      ) : (
        <div className="flex h-56 items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Featured Image
        </div>
      )}
    </div>
  );
}

export default function Blog() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-semibold tracking-tight">Ethan Brown</p>
            <p className="text-xs text-zinc-500">Writing / Build Log</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <Link to="/" className="hover:text-zinc-950">
              ← Back to portfolio
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Build Log
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            Notes from What I’m Building
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Short writeups on projects, technical problems, data experiments,
            and what I’m learning while building this portfolio.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <ArticleImage post={post} />

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {post.excerpt}
                </p>

                <div className="mt-6">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-medium text-zinc-950 underline underline-offset-4"
                  >
                    Read article
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}