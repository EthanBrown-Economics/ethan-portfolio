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
const EMAIL = "Ebrown0715@gmail.com";

function LogoBox({ src, alt }) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm">
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </div>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`text-sm font-medium uppercase tracking-[0.3em] ${
        light ? "text-zinc-400" : "text-zinc-500"
      }`}
    >
      {children}
    </p>
  );
}

function TimelineItem({ logo, logoAlt, title, subtitle, date, bullets }) {
  return (
    <div className="group grid gap-6 border-t border-zinc-200 py-8 md:grid-cols-[0.35fr_1fr]">
      <div>
        <p className="text-sm font-medium text-zinc-500">{date}</p>
      </div>

      <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="flex flex-col gap-5 sm:flex-row">
          <LogoBox src={logo} alt={logoAlt} />

          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-1 text-zinc-600">{subtitle}</p>

            {bullets && (
              <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-600">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex min-h-[280px] flex-col justify-between rounded-[2rem] border border-zinc-200 bg-zinc-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-950 hover:bg-white hover:shadow-xl"
    >
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-400">{number}</p>
          <p className="text-sm text-zinc-400 transition group-hover:text-zinc-950">
            View project
          </p>
        </div>

        <p className="mt-10 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
          {project.category}
        </p>

        <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight">
          {project.title}
        </h3>
      </div>

      <p className="mt-8 max-w-xl text-sm leading-6 text-zinc-600">
        {project.summary}
      </p>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="group">
            <p className="text-sm font-semibold tracking-tight">Ethan Brown</p>
            <p className="text-xs text-zinc-500">
              Economics · Data Analytics · ML
            </p>
          </a>

          <div className="hidden gap-7 text-sm text-zinc-600 md:flex">
            <a href="#projects" className="hover:text-zinc-950">
              Projects
            </a>
            <a href="#education" className="hover:text-zinc-950">
              Education
            </a>
            <a href="#experience" className="hover:text-zinc-950">
              Experience
            </a>
            <a href="#skills" className="hover:text-zinc-950">
              Skills
            </a>
            <Link to="/playground" className="hover:text-zinc-950">
              Playground
            </Link>
            <Link to="/blog" className="hover:text-zinc-950">
              Blog
            </Link>
            <a href="#contact" className="hover:text-zinc-950">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-20 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <SectionLabel>Portfolio / Applied Analytics / Economics</SectionLabel>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Using data to study economic behavior, policy-analysis, and business strategy.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            I am an Economics and Data Analytics undergraduate at Berry College. I am passionate about using data and economic analysis to understand market dynamics, inform public policy, and drive business strategy. I have experience with Python, R, SQL, Power BI, and applied econometric methods through coursework, research, and internships. I am particularly interested in empirical applied microeconomics, including how market structure, technology, and public policy shape prices, competition, and welfare.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              View selected work
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium transition hover:border-zinc-950"
            >
              Resume
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium transition hover:border-zinc-950"
            >
              LinkedIn
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium transition hover:border-zinc-950"
            >
              GitHub
            </a>

            <a
              href={transcript}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium transition hover:border-zinc-950"
            >
              Transcript
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md rounded-[2.25rem] border border-zinc-200 bg-zinc-50 p-3 shadow-sm">
            <img
              src={headshot}
              alt="Ethan Brown"
              className="h-[420px] w-full rounded-[1.75rem] object-cover"
            />

            <div className="flex items-center justify-between gap-4 pt-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Academic profile
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Economics + Data Analytics
                </p>
              </div>

              <div className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-950">
                3.80 GPA
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2.25rem] border border-zinc-200 bg-zinc-50 p-8 md:p-12">
          <SectionLabel>Research direction</SectionLabel>

          <p className="mt-5 max-w-5xl text-3xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-5xl">
            Empirical applied microeconomics, with interest in how market
            structure, technology, and public policy shape prices, competition,
            and welfare.
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Projects across analytics, modeling, and visualization.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-zinc-600">
            A curated set of work using Python, SQL, Power BI, APIs, machine
            learning, and applied economic analysis.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-6 py-24">
        <SectionLabel>Education</SectionLabel>

        <div className="mt-4 grid gap-8 md:grid-cols-[0.45fr_1fr]">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Academic background
          </h2>

          <div>
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
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
        <SectionLabel>Experience</SectionLabel>

        <div className="mt-4 grid gap-8 md:grid-cols-[0.45fr_1fr]">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Relevant work experience
          </h2>

          <div>
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
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <SectionLabel>Toolkit</SectionLabel>

        <div className="mt-4 grid gap-8 md:grid-cols-[0.45fr_1fr]">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Tools I use to work with data
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-xl font-semibold">Statistical tools</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Python · R · Stata · SQL · MATLAB
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-xl font-semibold">Data & BI</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Power BI · Excel · SQL Server Management Studio · Azure DevOps
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-xl font-semibold">Research methods</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Econometrics · Causal inference · Machine learning · Data visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.25rem] bg-zinc-950 p-8 text-white md:p-12">
          <SectionLabel light>Contact</SectionLabel>

          <div className="mt-4 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Let’s connect.
              </h2>

              <p className="mt-5 max-w-2xl text-zinc-300">
                I am interested in research opportunities, applied analytics
                work, and projects involving real-world data.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950"
              >
                Email
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:border-white"
              >
                LinkedIn
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:border-white"
              >
                GitHub
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:border-white"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}