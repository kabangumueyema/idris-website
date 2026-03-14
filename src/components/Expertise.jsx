import { services, certifications } from "../data/index.js";

export default function Expertise() {

  return (
    <section id="expertise" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Expertise</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Structured expertise across finance, operations, and digital growth.</h2>
          <p className="mt-4 text-slate-600 leading-8">
            A consulting-style approach focused on clarity, structure, and practical outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-950 mb-6">Certifications</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div key={cert} className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
                <p className="text-sm font-semibold text-slate-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}