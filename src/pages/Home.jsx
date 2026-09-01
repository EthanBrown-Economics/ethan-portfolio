import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import SiteHeader from "../components/SiteHeader";
import Reveal from "../components/Reveal";
import AnimatedNumber from "../components/AnimatedNumber";
import HeroMotif from "../components/HeroMotif";
import SpotlightArea from "../components/SpotlightArea";
import headshot from "../assets/EthanHeadshot.jpg";
import berryLogo from "../assets/berry-logo.jpg";
import utkLogo from "../assets/UTK-logo.png";
import gasSouthLogo from "../assets/gassouth-logo.jpg";
import shipyardLogo from "../assets/shipyard-logo.jpg";
import ymcaLogo from "../assets/ymca-logo.png";
import transcript from "../assets/transcript.pdf";
import { projects } from "../data/projects";

const publishedProjects = projects.filter((project) => project.published);

const LINKEDIN_URL = "https://www.linkedin.com/in/ethanbrown04/";
const GITHUB_URL = "https://github.com/EthanBrown-Economics";
const RESUME_URL = "/resume.pdf";
const EMAIL = "Ebrown0715@gmail.com";

const pdfViewerUrl = (src, title) =>
  `/pdf?src=${encodeURIComponent(src)}&title=${encodeURIComponent(title)}`;

function LogoBox({ src, alt, fallback }) {
  if (!src) {
    return (
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-100 text-lg font-semibold text-zinc-500">
        {fallback}
      </div>
    );
  }

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

function TimelineItem({ logo, logoAlt, logoFallback, title, subtitle, date, bullets }) {
  return (
    <div className="group grid gap-6 border-t border-zinc-200 py-8 md:grid-cols-[0.35fr_1fr]">
      <div>
        <p className="text-sm font-medium text-zinc-500">{date}</p>
      </div>

      <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="flex flex-col gap-5 sm:flex-row">
          <LogoBox src={logo} alt={logoAlt} fallback={logoFallback} />

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
  const cardRef = useRef(null);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(py * -8);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="h-full"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group flex h-full min-h-[280px] flex-col justify-between rounded-[2rem] border border-zinc-200 bg-zinc-50 p-7 transition-colors duration-300 hover:border-orange-300 hover:bg-white hover:shadow-xl"
      >
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400">{number}</p>
            <p className="text-sm text-zinc-400 transition group-hover:text-orange-600">
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
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SiteHeader
        darkHero
        subtitle="Economics · Data Analytics · ML"
        links={[
          { label: "Projects", to: "#projects" },
          { label: "Education", to: "#education" },
          { label: "Experience", to: "#experience" },
          { label: "Skills", to: "#skills" },
          { label: "Blog", to: "/blog" },
          { label: "Contact", to: "#contact" },
        ]}
      />

      <section className="relative overflow-hidden bg-zinc-950">
        <HeroMotif />
        <div className="bg-grain pointer-events-none absolute inset-0" />

        <SpotlightArea className="mx-auto max-w-7xl px-6 pb-16 pt-20">
        <div className="relative grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-orange-400">
              Portfolio / Applied Analytics / Economics
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
              Using data to study economic behavior, policy-analysis, and business strategy.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              I am an Economics and Data Analytics undergraduate at Berry College. I am passionate about using data and economic analysis to understand market dynamics, inform public policy, and drive business strategy. I have experience with Python, R, SQL, Power BI, and applied econometric methods through coursework, research, and internships. I am particularly interested in empirical applied microeconomics, including how market structure, technology, and public policy shape prices, competition, and welfare.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-orange-600 px-5 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-orange-500"
              >
                View selected work
              </a>

              <Link
                to={pdfViewerUrl(RESUME_URL, "Resume")}
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:scale-105 hover:border-white"
              >
                Resume
              </Link>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:scale-105 hover:border-white"
              >
                LinkedIn
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:scale-105 hover:border-white"
              >
                GitHub
              </a>

              <Link
                to={pdfViewerUrl(transcript, "Transcript")}
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:scale-105 hover:border-white"
              >
                Transcript
              </Link>
            </div>
          </Reveal>

          <Reveal x={32} y={0} delay={0.15} className="flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-[2.25rem] border border-zinc-200 bg-zinc-50 p-3 shadow-2xl shadow-black/40 transition duration-500 hover:-translate-y-1">
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

                <div className="rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                  <AnimatedNumber value={3.82} decimals={2} suffix=" GPA" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mt-16 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-10 sm:grid-cols-4">
          {[
            { value: 100, decimals: 0, prefix: "", suffix: "K+", label: "Airbnb listings analyzed" },
            { value: 90, decimals: 0, prefix: "", suffix: "", label: "years of federal trade records processed" },
            { value: 500, decimals: 0, prefix: "$", suffix: "K+", label: "in annual revenue managed" },
            { value: 6, decimals: 0, prefix: "", suffix: "", label: "ML models benchmarked" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold tracking-tight text-orange-400 sm:text-4xl">
                <AnimatedNumber
                  value={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-xs leading-5 text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </Reveal>
        </SpotlightArea>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal className="rounded-[2.25rem] border border-zinc-200 bg-gradient-to-br from-zinc-50 to-orange-50/60 p-8 md:p-12">
          <SectionLabel>Research direction</SectionLabel>

          <p className="mt-5 max-w-5xl text-3xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-5xl">
            Empirical applied microeconomics, with interest in how market
            structure, technology, and public policy shape prices, competition,
            and welfare.
          </p>
        </Reveal>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
        </Reveal>

        <div
          className={`grid gap-5 ${
            publishedProjects.length > 1 ? "md:grid-cols-2" : "max-w-2xl"
          }`}
        >
          {publishedProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionLabel>Education</SectionLabel>
        </Reveal>

        <div className="mt-4 grid gap-8 md:grid-cols-[0.45fr_1fr]">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Academic background
            </h2>
          </Reveal>

          <div>
            <Reveal delay={0}>
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
            </Reveal>

            <Reveal delay={0.08}>
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
            </Reveal>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
        </Reveal>

        <div className="mt-4 grid gap-8 md:grid-cols-[0.45fr_1fr]">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Relevant work experience
            </h2>
          </Reveal>

          <div>
            {[
              {
                logo: utkLogo,
                logoAlt: "University of Tennessee Knoxville logo",
                title: "University of Tennessee, Knoxville",
                subtitle:
                  "Research Associate for Dr. James Lake · Knoxville, Tennessee",
                date: "Aug. 2026 – Present",
                bullets: [
                  "Conduct research under Dr. James Lake on international trade policy, using Python, machine learning, and text-recognition models.",
                  "Extracted text from every Federal Register document published since 1936 to build a large-scale historical policy dataset.",
                  "Built a keyword-extraction algorithm to identify and analyze international trade policy language across the corpus.",
                  "Managed code and pipeline development through GitHub.",
                ],
              },
              {
                logo: ymcaLogo,
                logoAlt: "YMCA logo",
                title: "YMCA",
                subtitle: "Analytics Intern · Atlanta, Georgia",
                date: "May 2026 – Aug. 2026",
                bullets: [
                  "Built Power BI dashboards for organizational reporting, developing hands-on proficiency in DAX and Power Query.",
                  "Pulled data from multiple source systems and modeled relationships between them into a unified reporting structure.",
                  "Developed and pitched a data warehouse strategy to business leadership to modernize reporting infrastructure.",
                ],
              },
              {
                logo: gasSouthLogo,
                logoAlt: "Gas South logo",
                title: "Gas South",
                subtitle: "Data Engineering Intern · Atlanta, Georgia",
                date: "May 2025 – Aug. 2025",
                bullets: [
                  "Rewrote and optimized SQL queries across multiple reporting pipelines, improving runtime and output accuracy.",
                  "Automated recurring reports, cutting manual work for the business intelligence team.",
                  "Validated production data in SQL Server Management Studio to catch inconsistencies before they reached downstream reports.",
                  "Shipped version-controlled ETL updates through Azure DevOps alongside senior engineers.",
                ],
              },
              {
                logo: berryLogo,
                logoAlt: "Berry College logo",
                title: "Berry College",
                subtitle: "Economics Tutor & Research Associate · Rome, Georgia",
                date: "Jan. 2023 – May 2023; May 2025 – Present",
                bullets: [
                  "Tutor principles-level economics students on market price determination, government regulation, and international trade.",
                  "Coach students through applied calculus and statistics, including limits, derivatives, integrals, optimization, probability, and introductory regression analysis.",
                ],
              },
              {
                logo: shipyardLogo,
                logoAlt: "The Shipyard logo",
                title: "The Shipyard",
                subtitle: "Student General Manager · Berry College",
                date: "Jan. 2023 – Present",
                bullets: [
                  "Lead day-to-day operations for a student-run enterprise generating $500K+ in annual revenue.",
                  "Manage hiring, training, and daily supervision of a 15+ person student staff.",
                  "Rolled out Thrive POS and Microsoft Teams to streamline order processing and internal communication.",
                ],
              },
            ].map((entry, index) => (
              <Reveal key={entry.title + entry.date} delay={Math.min(index * 0.06, 0.24)}>
                <TimelineItem {...entry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionLabel>Toolkit</SectionLabel>
        </Reveal>

        <div className="mt-4 grid gap-8 md:grid-cols-[0.45fr_1fr]">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Tools I use to work with data
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Statistical tools",
                items: "Python · R · Stata · SQL · MATLAB",
              },
              {
                title: "Data & BI",
                items:
                  "Power BI · Excel · SQL Server Management Studio · Azure DevOps",
              },
              {
                title: "Research methods",
                items:
                  "Econometrics · Causal inference · Machine learning · Data visualization",
              },
            ].map((skill, index) => (
              <Reveal key={skill.title} delay={index * 0.08}>
                <div className="h-full rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-lg">
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">
                    {skill.items}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="relative overflow-hidden rounded-[2.25rem] bg-zinc-950 p-8 text-white md:p-12">
          <HeroMotif variant="glow" />
          <div className="bg-grain pointer-events-none absolute inset-0 rounded-[2.25rem]" />
          <div className="relative">
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
                className="rounded-full bg-orange-600 px-5 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-orange-500"
              >
                Email
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:scale-105 hover:border-white"
              >
                LinkedIn
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:scale-105 hover:border-white"
              >
                GitHub
              </a>

              <Link
                to={pdfViewerUrl(RESUME_URL, "Resume")}
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:scale-105 hover:border-white"
              >
                Resume
              </Link>
            </div>
          </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}