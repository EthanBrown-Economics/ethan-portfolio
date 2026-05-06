import { Link } from "react-router-dom";

const playgroundItems = [
  {
    title: "Spotify Listening Dashboard",
    category: "Interactive Dashboard",
    status: "Prototype",
    description:
      "An interactive dashboard built from Spotify Extended Streaming History data, showing listening trends, artists, genres, and behavior over time.",
    tools: ["Python", "Plotly", "Dash", "Pandas"],
    type: "HTML dashboard",
    href: "/dashboards/spotify-dashboard.html",
  },
  {
    title: "Airbnb Geospatial Map",
    category: "Geospatial Analytics",
    status: "Live",
    description:
      "A browser-based map showing Airbnb listings across major U.S. cities, built to explore spatial pricing patterns and clustering.",
    tools: ["Kepler.gl", "Python", "Geospatial Data"],
    type: "Embedded HTML",
    href: "/maps/airbnb-map.html",
  },
  {
    title: "Bookstore Sales Analytics",
    category: "Business Intelligence",
    status: "Coming Soon",
    description:
      "A sales analytics playground for exploring bookstore performance, seasonality, product trends, and customer behavior.",
    tools: ["Power BI", "Clover", "Shopify", "Excel"],
    type: "Power BI / Case Study",
    href: "#",
  },
  {
    title: "Forecasting Demo",
    category: "Machine Learning",
    status: "Coming Soon",
    description:
      "A small interactive forecasting demo showing how historical sales data can be used to estimate future demand.",
    tools: ["Python", "Machine Learning", "React"],
    type: "React demo",
    href: "#",
  },
];

function PlaygroundCard({ item }) {
  const isAvailable = item.href && item.href !== "#";

  return (
    <article className="group rounded-[2rem] border border-zinc-200 bg-zinc-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-950 hover:bg-white hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            {item.category}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            {item.title}
          </h2>
        </div>

        <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
          {item.status}
        </span>
      </div>

      <p className="mt-6 text-sm leading-7 text-zinc-600">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-5">
        <p className="text-sm text-zinc-500">{item.type}</p>

        {isAvailable ? (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4"
          >
            Open demo
          </a>
        ) : (
          <span className="text-sm text-zinc-400">In progress</span>
        )}
      </div>
    </article>
  );
}

export default function DataPlayground() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-semibold tracking-tight">Ethan Brown</p>
            <p className="text-xs text-zinc-500">Data Playground</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <Link to="/" className="hover:text-zinc-950">
              ← Back to portfolio
            </Link>
            <Link to="/blog" className="hover:text-zinc-950">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Interactive work
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            A playground for dashboards, maps, models, and experiments.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            This section collects interactive work that goes beyond static
            project writeups, including dashboards, embedded maps, forecasting
            demos, and applied data experiments.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {playgroundItems.map((item) => (
            <PlaygroundCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}