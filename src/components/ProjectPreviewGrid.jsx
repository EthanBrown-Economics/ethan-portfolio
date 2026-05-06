import { Link } from "react-router-dom";

const featuredProjects = [
  {
    number: "01",
    title: "Airbnb Price Prediction",
    slug: "airbnb-price-prediction",
    category: "Machine Learning / Python / Geospatial Analytics",
    description:
      "A machine learning project using 100,000+ Airbnb listings across 30+ U.S. cities to predict listing prices and identify key pricing drivers.",
  },
  {
    number: "02",
    title: "Berry College Bookstore Analytics",
    slug: "bookstore-analytics",
    category: "Power BI / Clover API / Retail Analytics",
    description:
      "A business analytics project combining Clover, Shopify, and store data to analyze sales patterns, seasonality, and customer behavior.",
  },
  {
    number: "03",
    title: "Horse Racing Simulation",
    slug: "horse-racing-simulation",
    category: "Predictive Modeling / GPS Data / Simulation",
    description:
      "A race prediction and simulation project using GPS-derived and traditional racing data to model performance and race outcomes.",
  },
  {
    number: "04",
    title: "Spotify Listening Dashboard",
    slug: "spotify-dashboard",
    category: "API / Dashboard / Personal Data",
    description:
      "An interactive dashboard project using personal Spotify streaming data to explore listening behavior, artists, genres, and trends.",
  },
];

export default function ProjectPreviewGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {featuredProjects.map((project) => (
        <Link
          key={project.slug}
          to={`/projects/${project.slug}`}
          className="group rounded-3xl border border-neutral-200 bg-neutral-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-white hover:shadow-xl"
        >
          <div className="mb-16 flex items-center justify-between">
            <span className="text-sm text-neutral-400">{project.number}</span>
            <span className="text-sm text-neutral-400 transition group-hover:text-black">
              View project
            </span>
          </div>

          <p className="mb-3 text-sm uppercase tracking-[0.18em] text-neutral-500">
            {project.category}
          </p>

          <h3 className="text-2xl font-semibold tracking-tight text-black">
            {project.title}
          </h3>

          <p className="mt-5 max-w-xl leading-7 text-neutral-600">
            {project.description}
          </p>
        </Link>
      ))}
    </div>
  );
}