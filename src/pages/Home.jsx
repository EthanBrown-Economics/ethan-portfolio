import { Link } from "react-router-dom";
import headshot from "../assets/EthanHeadshot.JPG";
import berryLogo from "../assets/berry-logo.jpg";
import utkLogo from "../assets/UTK-logo.png";
import gasSouthLogo from "../assets/gassouth-logo.jpg";
import shipyardLogo from "../assets/shipyard-logo.jpg";
import transcript from "../assets/transcript.pdf";
import { projects } from "../data/projects";

const LINKEDIN_URL = "https://www.linkedin.com/in/ethanbrown04/";
const GITHUB_URL = "https://github.com/ebrown04";
const RESUME_URL = "/resume.pdf";
const EMAIL = "Ethan.Brown@vikings.berry.edu";

function LogoBox({ src, alt }) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm">
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
      {children}
    </p>
  );
}

function TimelineItem({ logo, logoAlt, title, subtitle, date, bullets }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-8 h-full w-px bg-zinc-200" />
      <div className="absolute left-[-5px] top-8 h-3 w-3 rounded-full bg-zinc-950" />

      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="flex flex-col gap-5 sm:flex-row">
          <LogoBox src={logo} alt={logoAlt} />

          <div className="flex-1">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-1 text-zinc-600">{subtitle}</p>
              </div>

              <p className="text-sm font-medium text-zinc-500">{date}</p>
            </div>

            {bullets && (
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600">
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-sm font-semibold tracking-tight">
            Ethan Brown
          </a>

          <div className="hidden gap-6 text-sm text-zinc-600 md:flex">
            <a href="#education" className="hover:text-zinc-950">Education</a>
            <a href="#experience" className="hover:text-zinc-950">Experience</a>
            <a href="#projects" className="hover:text-zinc-950">Projects</a>
            <a href="#skills" className="hover:text-zinc-950">Skills</a>
            <Link to="/blog" className="hover:text-zinc-950">Blog</Link>
            <a href="#contact" className="hover:text-zinc-950">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionLabel>Economics · Data Analytics · Applied Research</SectionLabel>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
            I use data to study economic behavior, policy, and real-world markets.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            I am an Economics and Data Analytics undergraduate at Berry College
            preparing for graduate study in economics. My work focuses on
            applied microeconomics, econometrics, data engineering, and
            policy-relevant empirical analysis.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              View Projects
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium hover:border-zinc-950"
            >
              Resume
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium hover:border-zinc-950"
            >
              LinkedIn
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium hover:border-zinc-950"
            >
              GitHub

            </a>
                        <a
              href={transcript}
              target="_blank"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium hover:border-zinc-950"
            >
              Transcript
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-2xl font-semibold">3.80</p>
              <p className="mt-1 text-xs text-zinc-500">GPA</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-2xl font-semibold">$500K+</p>
              <p className="mt-1 text-xs text-zinc-500">Revenue managed</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-2xl font-semibold">15+</p>
              <p className="mt-1 text-xs text-zinc-500">Staff supervised</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-3 shadow-sm">
            <img
              src={headshot}
              alt="Ethan Brown"
              className="h-80 w-80 rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-[2rem] border border-zinc-200 bg-zinc-950 p-8 text-white">
          <SectionLabel>Research interests</SectionLabel>
          <p className="mt-4 max-w-4xl text-2xl font-semibold leading-snug">
            Empirical applied microeconomics, with interest in how market
            structure, technological change, and public policy shape prices,
            competition, and welfare.
          </p>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Education</SectionLabel>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Academic background
        </h2>

        <div className="mt-10 space-y-8">
          <TimelineItem
            logo={utkLogo}
            logoAlt="University of Tennessee Knoxville logo"
            title="University of Tennessee, Knoxville"
            subtitle="M.A. Economics"
            date="Aug. 2026 – May 2027, expected"
            bullets={[
              "Graduate study in economics with an emphasis on econometrics, applied research, and advanced economic theory.",
              "Preparing for doctoral-level economics training and empirical research.",
            ]}
          />

          <TimelineItem
            logo={berryLogo}
            logoAlt="Berry College logo"
            title="Berry College"
            subtitle="B.S. Economics and Data Analytics"
            date="Aug. 2022 – May 2026"
            bullets={[
              "Dean’s List · Barry Griswell Scholar · TRIO SSS Scholar · Zell Miller Recipient.",
              "Relevant preparation in econometrics, applied research, business analytics, data visualization, and statistical computing.",
            ]}
          />
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Relevant work experience
        </h2>

        <div className="mt-10 space-y-8">
          <TimelineItem
            logo={gasSouthLogo}
            logoAlt="Gas South logo"
            title="Gas South"
            subtitle="Data Engineering Intern · Atlanta, Georgia"
            date="May 2025 – Aug. 2025"
            bullets={[
              "Optimized SQL queries to improve runtime efficiency and ensure cleaner data output across multiple reporting pipelines.",
              "Automated recurring reports, reducing manual workload for the business intelligence team.",
              "Performed data validation in SQL Server Management Studio to improve reporting reliability.",
              "Supported version-controlled ETL updates through Azure DevOps in collaboration with senior engineers.",
            ]}
          />

          <TimelineItem
            logo={berryLogo}
            logoAlt="Berry College logo"
            title="Berry College"
            subtitle="Economics Tutor & Research Associate · Rome, Georgia"
            date="Jan. 2023 – May 2023; May 2025 – Present"
            bullets={[
              "Tutored principles-level economics coursework emphasizing economic literacy, market price determination, government regulation, and international trade.",
              "Supported students in applied calculus and statistics, including limits, derivatives, integrals, optimization, probability, and introductory regression analysis.",
            ]}
          />

          <TimelineItem
            logo={shipyardLogo}
            logoAlt="The Shipyard logo"
            title="The Shipyard"
            subtitle="Student General Manager · Berry College"
            date="Jan. 2023 – Present"
            bullets={[
              "Lead operations for a student-run enterprise generating $500K+ in annual revenue.",
              "Manage training and day-to-day supervision of 15+ student employees.",
              "Implemented new systems, including Thrive POS and Microsoft Teams, to streamline communication and order processing.",
            ]}
          />
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Selected work</SectionLabel>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Applied projects across economics, analytics, data engineering,
          machine learning, and visualization.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg"
            >
              <p className="text-sm font-medium text-zinc-500">
                {project.category}
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                {project.summary}
              </p>

              <p className="mt-5 text-sm font-medium">
                View project →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Toolkit</SectionLabel>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Skills
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-xl font-semibold">Statistical tools</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              Python · R · Stata · SQL · MatLab
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-xl font-semibold">Data & BI</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              Power BI · Excel · SQL Server Management Studio · Azure DevOps
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-xl font-semibold">Research methods</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              Econometrics · Causal inference · Machine learning · Data visualization
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] bg-zinc-950 p-8 text-white md:p-10">
          <SectionLabel>Contact</SectionLabel>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Let’s connect.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-300">
            I am interested in research opportunities, applied analytics work, and projects involving real-world data.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950"
            >
              Email
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:border-white"
            >
              LinkedIn
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:border-white"
            >
              GitHub
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:border-white"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}