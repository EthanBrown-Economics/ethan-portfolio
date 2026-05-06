import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

function FeaturedImage({ post }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100">
      {post.image ? (
        <img
          src={post.image}
          alt={post.title}
          className="h-[360px] w-full object-cover"
        />
      ) : (
        <div className="flex h-[360px] items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Featured Image
        </div>
      )}
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-white px-6 py-20 text-zinc-950">
        <section className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Blog
          </p>
          <h1 className="mt-4 text-3xl font-semibold">Post not found</h1>
          <Link to="/blog" className="mt-6 inline-block underline">
            Back to blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-semibold tracking-tight">Ethan Brown</p>
            <p className="text-xs text-zinc-500">Article</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <Link to="/blog" className="hover:text-zinc-950">
              Blog
            </Link>
            <Link to="/" className="hover:text-zinc-950">
              Portfolio
            </Link>
          </div>
        </div>
      </nav>

      <article className="mx-auto max-w-5xl px-6 pb-20 pt-14">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            {post.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-500">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.status}</span>
          </div>
        </div>

        <div className="mt-10">
          <FeaturedImage post={post} />
        </div>

        <div className="mt-12 max-w-3xl space-y-6 text-lg leading-8 text-zinc-700">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 flex gap-6 text-sm">
          <Link to="/blog" className="underline underline-offset-4">
            ← Back to blog
          </Link>
          <Link to="/" className="underline underline-offset-4">
            Back to portfolio
          </Link>
        </div>
      </article>
    </main>
  );
}