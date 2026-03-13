export default function Expertise() {
  const services = [
    {
      title: "Systems Thinking",
      description:
        "Designing operating models, workflows, discipline, process design, leadership systems, productivity, coordination, and execution for sustainable growth. McKinsey research indicates that optimized operational systems can lead to significant productivity gains, with transformations delivering up to 20-30% improvements in efficiency (McKinsey & Company, 'To unleash productivity growth in Europe, rewire your operations').",
    },
    {
      title: "Financial Clarity",
      description:
        "Building accounting systems, valuation, financial modeling, budgeting, decision discipline, and frameworks where numbers inform behavior and drive strategic outcomes. The Financial Accounting Standards Board (FASB) emphasizes that accurate financial reporting builds trust and supports better decision-making (FASB, Financial Reporting Standards).",
    },
    {
      title: "Digital Authority and Growth",
      description:
        "Strengthening community engagement, discoverability, trust-driven visibility, AI-era marketing, platform behavior, and ethical digital presence. HubSpot research shows that trust-driven digital strategies can boost engagement by up to 50% (HubSpot, 'The State of Marketing Report 2024').",
    },
    {
      title: "Leadership Through Service",
      description:
        "Guiding responsibility, mentoring, character, service, youth development, faith-grounded leadership, and the quiet disciplines behind influence and stewardship. The Harvard Business Review highlights that servant leadership improves team performance and retention (Harvard Business Review, 'The Power of Servant Leadership').",
    },
  ];

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
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-sm font-semibold text-slate-900">QuickBooks Online</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-sm font-semibold text-slate-900">Google AI Essentials</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-sm font-semibold text-slate-900">Project Management</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-sm font-semibold text-slate-900">Accounting Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}