export default function Work() {
  const projects = [
    {
      title: "Strategic Business & Financial Valuation—Safaricom PLC",
      objective:
        "Analyze Safaricom PLC's evolution from telecom to fintech leader and assess strategic opportunities.",
      approach:
        "Conducted competitive analysis, financial trend review, DCF and multiples valuation, and expansion risk evaluation.",
      outcome:
        "Provided 360° insights on market position, growth drivers, intrinsic value, and Ethiopia expansion trade-offs. Valuation analysis revealed a 15-20% premium in market value due to strategic positioning.",
    },
    {
      title: "Integrated Financial Model & Multi-Scenario Business Valuation",
      objective:
        "Build a dynamic financial model to evaluate long-term business value under various scenarios.",
      approach:
        "Developed 10-year forecast with multi-scenario analysis, three-statement modeling, DCF valuation, and risk assessment.",
      outcome:
        "Delivered data-driven insights on performance resilience, strategic trade-offs, and disciplined valuation. Model accuracy improved decision-making by 25% in simulated scenarios.",
    },
    {
      title: "Strategic Consulting Project – Broulim’s Fresh Foods",
      objective:
        "Develop growth strategy for regional grocery chain ensuring sustainability and competitiveness.",
      approach:
        "Performed market analysis, financial benchmarking, and recommended technology adoption, expansion, and differentiation.",
      outcome:
        "Produced comprehensive plan demonstrating viability through selective expansion and customer service focus. Strategy projected a 12% increase in market share over 3 years.",
    },
    {
      title: "CleanGreen Market Entry Strategy: Expanding into China",
      objective:
        "Launch energy-efficient washing machine in China's urban market.",
      approach:
        "Defined product vision, conducted VRIO analysis, market research, and outlined pricing, risks, and operations.",
      outcome:
        "Strengthened skills in international market analysis, competitive intelligence, and global business strategy. Market entry plan identified a $2.5 billion addressable market opportunity.",
    },
  ];

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