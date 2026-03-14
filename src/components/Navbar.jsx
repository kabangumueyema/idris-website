import { Link, NavLink } from "react-router-dom";
import brandLogo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-900">
          <img
            src={brandLogo}
            alt="Idris Kabangu logo"
            className="h-7 w-7 rounded-md object-contain"
          />
          <span>Idris Kabangu</span>
        </Link>
        <nav className="hidden gap-8 text-sm text-slate-700 md:flex">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "transition hover:text-blue-600"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "transition hover:text-blue-600"}>About</NavLink>
          <NavLink to="/expertise" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "transition hover:text-blue-600"}>Expertise</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "transition hover:text-blue-600"}>Projects</NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "transition hover:text-blue-600"}>Insights</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "transition hover:text-blue-600"}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
