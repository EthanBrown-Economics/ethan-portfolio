import { useParams, Link } from "react-router-dom";

const posts = {
  "portfolio-build": {
    title: "Building and Deploying My Portfolio",
    category: "Portfolio Website",
    body: [
      "I built this portfolio using React, Vite, Tailwind, GitHub, and Vercel. The goal was not just to make a clean personal website, but to better understand the full website development process.",
      "The process involved starting with a basic idea, using AI to help generate a template, breaking things, fixing them, and slowly learning how the pieces fit together.",
      "Working through Git, deployment logs, routing, build errors, and project structure helped me understand how modern web projects move from local code to a live deployed site."
    ],
  },
  "data-playground": {
    title: "Why I’m Adding a Data Playground",
    category: "Data Projects",
    body: [
      "I want the portfolio to feel more interactive and alive, so I’m building a Data Playground section for dashboards, model demos, and experiments.",
      "This section will include projects like Airbnb price prediction, Spotify listening analytics, Floyd County demographic analysis, and sales forecasting dashboards.",
      "The goal is to show not only finished work, but also the process of exploring data, building tools, and turning messy datasets into something useful."
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <main className="min-h-screen px-6 py-20 bg-white text-gray-900">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="underline">
            Back to blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-20 bg-white text-gray-900">
      <article className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          {post.category}
        </p>

        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

        <div className="space-y-5 text-gray-700 leading-8">
          {post.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <Link to="/blog" className="inline-block mt-10 underline">
          Back to blog
        </Link>
      </article>
    </main>
  );
}