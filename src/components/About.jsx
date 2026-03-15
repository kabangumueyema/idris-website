export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">About</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">A cross-disciplinary professional journey.</h2>
          <p className="mt-3 text-sm font-medium text-slate-500">Updated March 2026</p>
        </div>
        <div className="lg:col-span-8 space-y-6 text-slate-600 leading-8">
          <p>
            Across my career, I have worked in environments where structure and trust matter most, from telecommunications and international development to finance and digital growth.
          </p>
          <p>
            I have contributed to operations with Vodacom Congo, youth and digital safety initiatives with UNICEF and the United Nations Development Programme, strategy assignments with Gosar Consulting Group, AI-first marketing work with Pearl 27, and accounting operations through finance internships and the Accounting Clerk Development Program.
          </p>
          <p>
            Today, I combine accounting systems, process improvement, digital marketing strategy, and data-informed decision support so teams can operate with stronger visibility and control.
          </p>
          <p>
            Certified in QuickBooks Online, Google AI Essentials, Project Management, and Accounting Systems, I follow a practical approach: clarity over complexity, systems over shortcuts, and outcomes over noise.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Evidence and attribution approach</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              This website is written using clear structure and source attribution principles aligned with search-quality guidance.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
              <li>
                <a href="https://developers.google.com/search/docs/appearance/structured-data/article" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 hover:underline">
                  Google Search Central - Article structured data guidance
                </a>
              </li>
              <li>
                <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 hover:underline">
                  Google Search Central - Sitemap best practices
                </a>
              </li>
              <li>
                <a href="https://schema.org/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 hover:underline">
                  Schema.org - Structured data vocabulary
                </a>
              </li>
            </ul>
          </div>
          <p>
            This positioning reflects a journeyman-expert model: rigorous research, transparent sourcing, and careful explanation rather than inflated claims.
          </p>
        </div>
      </div>

      <div className="mt-14 rounded-3xl bg-slate-900 px-8 py-10 text-slate-50">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Professional Philosophy</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">Clarity over complexity</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">Reduce confusion. Improve understanding. Build systems people can actually use.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Systems over shortcuts</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">Prioritize repeatable, resilient structures over temporary solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Outcomes over noise</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">Focus on work that drives measurable progress and meaningful results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}