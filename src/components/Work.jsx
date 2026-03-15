import { projects } from "../data/index.js";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Projects / Work</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950">Representative work shaped by systems thinking.</h2>
        <p className="mt-3 text-sm font-medium text-slate-500">Updated March 2026</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Each project summary follows a fixed evidence format: objective, approach, and outcome.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-lg font-semibold text-slate-950">How to interpret project outcomes</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-600">
          <li>Outcomes are based on project analysis, case data, or modeled scenarios.</li>
          <li>Where figures are shown, they reflect project-scope assumptions at the time of analysis.</li>
          <li>Results are presented as decision-support evidence, not universal guarantees.</li>
        </ul>
      </div>
      
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-base font-semibold text-slate-900">Methods and references</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-600">
            <li>
              <a href="https://www.pmi.org/pmbok-guide-standards" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 hover:underline">
                Project Management Institute - PM standards
              </a>
            </li>
            <li>
              <a href="https://www.ifrs.org/issued-standards/list-of-standards/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 hover:underline">
                IFRS Foundation - Reporting standards
              </a>
            </li>
            <li>
              <a href="https://data.worldbank.org/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 hover:underline">
                World Bank Open Data - Macro assumptions context
              </a>
            </li>
          </ul>
        </div>

      <div className="mt-12 space-y-6">
        {projects.map((project) => (
          <div key={project.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-slate-500">Objective</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{project.objective}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500">Approach</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{project.approach}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500">Outcome</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{project.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
