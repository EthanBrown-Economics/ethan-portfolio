import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import Reveal from "../components/Reveal";
import AnimatedNumber from "../components/AnimatedNumber";
import { projects } from "../data/projects";

const isLiveLink = (value) => Boolean(value) && value !== "#";
const isLocalFile = (value) => isLiveLink(value) && value.startsWith("/");

function ModelComparisonChart({ data }) {
  const max = Math.max(...data.map((d) => d.r2));

  return (
    <div className="space-y-3">
      {data.map((d, index) => (
        <div key={d.model} className="flex items-center gap-4">
          <p className="w-36 shrink-0 text-sm text-zinc-600 sm:w-44">
            {d.model}
            {d.best && (
              <span className="ml-2 rounded-full bg-orange-600 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
                Best fit
              </span>
            )}
          </p>

          <div className="h-6 flex-1 rounded-full bg-zinc-100">
            <motion.div
              className={`h-6 rounded-full ${d.best ? "bg-orange-600" : "bg-zinc-400"}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${(d.r2 / max) * 100}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              title={`${d.model}: R² = ${d.r2.toFixed(3)}`}
            />
          </div>

          <p
            className={`w-14 shrink-0 text-right text-sm font-medium tabular-nums ${
              d.best ? "text-orange-700" : "text-zinc-500"
            }`}
          >
            {d.r2.toFixed(3)}
          </p>
        </div>
      ))}
    </div>
  );
}

function FeatureImportanceChart({ data }) {
  const max = Math.max(...data.map((d) => d.importance));

  return (
    <div className="space-y-3">
      {data.map((d, index) => (
        <div key={d.feature} className="flex items-center gap-4">
          <p className="w-36 shrink-0 text-sm text-zinc-600 sm:w-52">
            {d.feature}
          </p>

          <div className="h-6 flex-1 rounded-full bg-zinc-100">
            <motion.div
              className="h-6 rounded-full bg-zinc-950"
              initial={{ width: 0 }}
              whileInView={{ width: `${(d.importance / max) * 100}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              title={`${d.feature}: ${(d.importance * 100).toFixed(1)}% importance`}
            />
          </div>

          <p className="w-12 shrink-0 text-right text-sm font-medium tabular-nums text-zinc-950">
            {(d.importance * 100).toFixed(1)}%
          </p>
        </div>
      ))}
    </div>
  );
}

function CaseStudy({ caseStudy }) {
  return (
    <section className="mt-16">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Key results
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mt-6 rounded-[2rem] border border-zinc-200 bg-gradient-to-br from-zinc-50 to-orange-50/60 p-8 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
          {caseStudy.headline.label}
        </p>
        <p className="mt-3 text-5xl font-semibold tracking-tight text-orange-700">
          <AnimatedNumber
            value={caseStudy.headline.value}
            decimals={caseStudy.headline.decimals}
            prefix={caseStudy.headline.prefix}
          />
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
          {caseStudy.headline.description}
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.1} className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
          <h3 className="text-lg font-semibold tracking-tight">
            Model comparison
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            R² on held-out test data, by model.
          </p>
          <div className="mt-6">
            <ModelComparisonChart data={caseStudy.modelComparison} />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
          <h3 className="text-lg font-semibold tracking-tight">
            What drives price
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            Top feature importances, random forest model.
          </p>
          <div className="mt-6">
            <FeatureImportanceChart data={caseStudy.featureImportance} />
          </div>
          <p className="mt-6 text-xs leading-5 text-zinc-500">
            {caseStudy.featureNote}
          </p>
        </Reveal>
      </div>

      <p className="mt-6 max-w-3xl text-xs leading-5 text-zinc-500">
        {caseStudy.methodology}
      </p>
    </section>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug && p.published);

  if (!project) {
    return (
      <main className="min-h-screen bg-white px-6 py-20 text-zinc-950">
        <section className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <Link to="/" className="mt-6 inline-block underline">
            Back home
          </Link>
        </section>
      </main>
    );
  }

  const hasResources =
    isLiveLink(project.pdf) ||
    isLiveLink(project.github) ||
    isLiveLink(project.code) ||
    isLiveLink(project.data);

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SiteHeader
        subtitle="Project"
        links={[{ label: "← Back to portfolio", to: "/" }]}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          {project.category}
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-600">
          {project.description}
        </p>

        {project.tools && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm text-zinc-700"
              >
                {tool}
              </span>
            ))}
          </div>
        )}

        {project.caseStudy && <CaseStudy caseStudy={project.caseStudy} />}

        {hasResources && (
          <Reveal className="mt-12 grid gap-5 md:grid-cols-2">
            {isLiveLink(project.pdf) && (
              <Link
                to={`/pdf?src=${encodeURIComponent(project.pdf)}&title=${encodeURIComponent(`${project.title} — Report`)}`}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-zinc-400"
              >
                <h2 className="text-xl font-semibold">Project PDF</h2>
                <p className="mt-3 text-sm text-zinc-600">
                  View report, paper, or presentation.
                </p>
              </Link>
            )}

            {isLiveLink(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-zinc-400"
              >
                <h2 className="text-xl font-semibold">GitHub Repository</h2>
                <p className="mt-3 text-sm text-zinc-600">
                  View code and implementation details.
                </p>
              </a>
            )}

            {isLiveLink(project.code) && (
              <a
                href={project.code}
                {...(isLocalFile(project.code)
                  ? { download: project.code.split("/").pop() }
                  : { target: "_blank", rel: "noreferrer" })}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-zinc-400"
              >
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  {isLocalFile(project.code) ? (
                    <Download size={18} />
                  ) : (
                    <ExternalLink size={18} />
                  )}
                  Code File
                </h2>
                <p className="mt-3 text-sm text-zinc-600">
                  {isLocalFile(project.code)
                    ? "Download the notebook or script."
                    : "Open the notebook or script in a new tab."}
                </p>
              </a>
            )}

            {isLiveLink(project.data) && (
              <a
                href={project.data}
                {...(isLocalFile(project.data)
                  ? { download: project.data.split("/").pop() }
                  : { target: "_blank", rel: "noreferrer" })}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-zinc-400"
              >
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  {isLocalFile(project.data) ? (
                    <Download size={18} />
                  ) : (
                    <ExternalLink size={18} />
                  )}
                  Data File
                </h2>
                <p className="mt-3 text-sm text-zinc-600">
                  {isLocalFile(project.data)
                    ? "Download the dataset."
                    : "Open the data source in a new tab."}
                </p>
              </a>
            )}
          </Reveal>
        )}

        {project.map && (
          <Reveal className="mt-20">
            <h2 className="text-3xl font-semibold">Interactive Map</h2>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-600">
              This map visualizes Airbnb listings across major U.S. cities,
              highlighting spatial pricing patterns and clustering behavior.
            </p>

            <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
              <iframe
                src={project.map}
                className="h-[75vh] min-h-[600px] w-full"
                title="Airbnb Map"
              />
            </div>
          </Reveal>
        )}
      </section>
    </main>
  );
}