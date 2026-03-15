import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  const mobileMenuId = "mobile-site-nav";
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 text-sm font-semibold tracking-wide text-slate-900"
        >
          <img
            src={brandLogo}
            alt="Idris Kabangu logo"
            className="h-7 w-7 rounded-md object-contain"
          />
          <span className="truncate">Idris Kabangu</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls={mobileMenuId}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-5 w-5">
            <span className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-2 bg-slate-700 transition-transform duration-200 ${open ? "translate-y-0 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1/2 block h-0.5 w-5 bg-slate-700 transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-1/2 block h-0.5 w-5 translate-y-2 bg-slate-700 transition-transform duration-200 ${open ? "translate-y-0 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id={mobileMenuId}
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-slate-50 px-4 pb-5 pt-4 shadow-sm sm:px-6 md:hidden"
        >
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-700"
                      : "block rounded-xl px-4 py-3 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
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
