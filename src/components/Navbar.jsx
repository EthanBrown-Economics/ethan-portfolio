import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive
        ? "text-black"
        : "text-neutral-500 hover:text-black"
    }`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group">
          <div className="text-sm font-semibold tracking-tight text-black">
            Ethan Brown
          </div>
          <div className="text-xs text-neutral-500">
            Economics · Data Analytics · ML
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/experience" className={linkClass}>
            Experience
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <a
            href="mailto:your-email-here"
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-black transition hover:border-black"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}