import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import brandLogo from "../assets/logo.svg";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/expertise", label: "Expertise" },
  { to: "/projects", label: "Projects" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  isActive
    ? "relative text-blue-600 font-semibold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-blue-600"
    : "relative text-slate-600 transition-colors duration-150 hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-900"
        >
          <img
            src={brandLogo}
            alt="Idris Kabangu logo"
            className="h-7 w-7 rounded-md object-contain"
          />
          <span>Idris Kabangu</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 p-1 md:hidden"
        >
          <span className={`block h-px w-5 bg-slate-700 transition-transform duration-200 ${open ? "translate-y-2.5 rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-slate-700 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-slate-700 transition-transform duration-200 ${open ? "-translate-y-2.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-slate-100 bg-slate-50 px-6 pb-5 pt-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-blue-600"
                      : "text-slate-600 transition-colors hover:text-slate-900"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
