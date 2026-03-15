import { Link } from "react-router-dom";
import profileImage from "../assets/missionary-picture.jpg";

export default function Home() {
  const gatewayLinks = [
    {
      title: "About",
      description:
        "View my professional background and the cross-disciplinary path that shaped my consulting perspective.",
      to: "/about",
      cta: "Explore About",
    },
    {
      title: "Expertise",
      description:
        "See how I structure work across finance, operations, and digital growth for practical execution.",
      to: "/expertise",
      cta: "Explore Expertise",
    },
    {
      title: "Projects",
      description:
        "Review selected client-facing and strategy projects with clear objectives, approach, and outcomes.",
      to: "/projects",
      cta: "Explore Projects",
    },
    {
      title: "Insights",
      description:
        "Read thought leadership on systems thinking, transformation, and performance discipline.",
      to: "/insights",
      cta: "Explore Insights",
    },
    {
      title: "Contact",
      description:
        "Start a focused conversation about your business systems, operational clarity, and growth priorities.",
      to: "/contact",
      cta: "Explore Contact",
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden pb-24">
      <div className="absolute inset-0 opacity-35">
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full border border-blue-200" />
        <div className="absolute right-16 top-24 h-48 w-48 rounded-full border border-slate-300" />
        <div className="absolute bottom-10 left-1/3 h-24 w-24 rounded-full border border-blue-300" />
        <div className="absolute right-1/4 top-1/2 h-px w-32 bg-slate-300" />
        <div className="absolute left-1/4 top-1/3 h-px w-24 bg-blue-300" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-12 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
            Business Systems & Strategy • Finance • Operations • Digital Growth
          </p>
          <p className="text-sm font-medium text-slate-500">Updated March 2026</p>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            I help organizations move from confusion to clarity by building systems, improving execution, and making growth more disciplined.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I work at the intersection of finance, operations, and digital growth to turn strategic intent into repeatable execution. The focus is simple: better decisions, stronger systems, and measurable outcomes.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            This site is designed as a practical gateway to my background, methods, selected work, and current thinking.
          </p>
          <div className="mt-6 max-w-2xl rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-base font-semibold text-slate-900">How this website is structured for clarity</h2>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-600">
              <li>Each section focuses on one clear intent: background, expertise, projects, and insights.</li>
              <li>Long-form insights use explicit headings, scannable lists, and source attribution.</li>
              <li>Evidence-heavy claims are linked to primary sources whenever possible.</li>
            </ol>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/about" className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md">
              Start with About
            </Link>
            <Link to="/projects" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm">
              View Projects
            </Link>
            <Link to="/contact" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm">
              Contact
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-56 w-56 overflow-hidden rounded-3xl bg-white shadow-lg">
              <img
                src={profileImage}
                alt="Idris Kabangu"
                width="224"
                height="224"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-slate-500">Professional Philosophy</h2>
            <div className="mt-6 space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Clarity over complexity</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  The best systems make decisions easier, communication clearer, and work more sustainable.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Systems over shortcuts</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Long-term progress comes from structure, not temporary fixes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Outcomes over noise</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Strategy should create meaningful results, not simply more activity.
                </p>
              </div>
            </div>
            <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 text-sm italic text-slate-600">
              "The future is created at the intersection of business, technology, design, and culture." — Nathan Shedroff
            </blockquote>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm sm:p-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-950">Navigate the Practice</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Use the sections below as direct pathways into the core areas of this professional site.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {gatewayLinks.map((item) => (
              <article key={item.to} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                <Link
                  to={item.to}
                  className="mt-4 inline-flex w-fit items-center text-sm font-semibold text-blue-600 transition-all duration-200 hover:translate-x-0.5 hover:text-blue-700"
                >
                  {item.cta} <span className="ml-1">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}