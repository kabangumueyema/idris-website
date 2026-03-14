import { projects } from "../data/index.js";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Projects / Work</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950">Representative work shaped by systems thinking.</h2>
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
