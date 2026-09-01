import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function NavItem({ label, to, onClick, dark = false, className = "" }) {
  const isHash = to.startsWith("#");
  const sharedClass = `transition-colors ${
    dark ? "hover:text-white" : "hover:text-zinc-950"
  } ${className}`;

  if (isHash) {
    return (
      <a href={to} onClick={onClick} className={sharedClass}>
        {label}
      </a>
    );
  }

  return (
    <Link to={to} onClick={onClick} className={sharedClass}>
      {label}
    </Link>
  );
}

export default function SiteHeader({ subtitle, links = [], darkHero = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!darkHero);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!darkHero) return;

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [darkHero]);

  const isDark = darkHero && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isDark
          ? "border-transparent bg-transparent"
          : "border-zinc-200 bg-white/85 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="group" onClick={close}>
          <p
            className={`text-sm font-semibold tracking-tight transition-colors duration-300 ${
              isDark ? "text-white" : "text-zinc-950"
            }`}
          >
            Ethan Brown
          </p>
          <p
            className={`text-xs transition-colors duration-300 ${
              isDark ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            {subtitle}
          </p>
        </Link>

        <nav
          className={`hidden gap-7 text-sm transition-colors duration-300 md:flex ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          {links.map((link) => (
            <NavItem key={link.to} {...link} dark={isDark} />
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`relative flex h-9 w-9 items-center justify-center rounded-full border transition duration-300 md:hidden ${
            isDark
              ? "border-zinc-700 text-white hover:border-zinc-400"
              : "border-zinc-200 text-zinc-700 hover:border-zinc-400"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-zinc-200 bg-white md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5 text-sm text-zinc-600">
              {links.map((link) => (
                <NavItem key={link.to} {...link} onClick={close} />
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
