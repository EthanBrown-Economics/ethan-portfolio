export default function Blog() {
  return (
    <main className="min-h-screen px-6 py-20 bg-white text-gray-900">
      <section className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Build Log
        </p>

        <h1 className="text-4xl font-bold mb-4">
          Notes from What I’m Building
        </h1>

        <p className="text-gray-600 max-w-2xl mb-10">
          Short writeups on projects, technical problems, data experiments, and
          what I’m learning while building this portfolio.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm text-gray-500 mb-2">Portfolio Website</p>
            <h2 className="text-xl font-semibold mb-2">
              Building and Deploying My Portfolio
            </h2>
            <p className="text-gray-600 mb-4">
              A short reflection on using React, Vite, Tailwind, GitHub, and
              Vercel to build a personal portfolio from scratch.
            </p>
            <a href="/blog/portfolio-build" className="font-medium underline">
              Read more
            </a>
          </article>

          <article className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm text-gray-500 mb-2">Data Projects</p>
            <h2 className="text-xl font-semibold mb-2">
              Why I’m Adding a Data Playground
            </h2>
            <p className="text-gray-600 mb-4">
              I want this site to become more than a resume — a place to show
              interactive dashboards, model demos, and active experiments.
            </p>
            <a href="/blog/data-playground" className="font-medium underline">
              Read more
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}