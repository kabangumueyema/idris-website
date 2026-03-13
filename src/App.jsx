import brandLogo from "./assets/logo.svg";
import Home from "./components/Home";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Work from "./components/Work";
import Insights from "./components/Insights";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-wide text-slate-900">
            <img src={brandLogo} alt="Idris Kabangu Logo" className="h-8 w-8" />
            <span>Idris Kabangu</span>
          </a>
          <nav className="hidden gap-8 text-sm text-slate-700 md:flex">
            <a href="#about" className="transition hover:text-blue-600">About</a>
            <a href="#expertise" className="transition hover:text-blue-600">Expertise</a>
            <a href="#work" className="transition hover:text-blue-600">Work</a>
            <a href="#insights" className="transition hover:text-blue-600">Insights</a>
            <a href="#contact" className="transition hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Home />
        <About />
        <Expertise />
        <Work />
        <Insights />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Idris Kabangu. All rights reserved.</p>
          <p>Business Systems & Strategy • Finance • Operations • Digital Growth</p>
        </div>
      </footer>
    </div>
  );
}
