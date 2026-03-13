export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">About</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">A cross-disciplinary professional journey.</h2>
        </div>
        <div className="lg:col-span-8 space-y-6 text-slate-600 leading-8">
          <p>
            Across my career, I've worked in environments where structure and trust matter most—from telecommunications and international development to finance and AI-driven digital marketing. With over 5 years of experience in business systems and strategy, I have contributed to telecommunications operations with Vodacom Congo, digital safety and youth engagement initiatives with UNICEF and United Nations Development Programme, consulting and strategy projects with Gosar Consulting Group, AI-first digital marketing and brand visibility with Pearl 27, and accounting and financial operations through finance internships and the Accounting Clerk Development Program (ACDP).
          </p>
          <p>
            Today, I combine accounting systems & bookkeeping (QuickBooks Online, reconciliations, reporting), operational process improvement, digital marketing & community engagement strategy, and data-informed decision support so teams can operate with confidence, visibility, and control. According to QuickBooks certification standards, certified professionals demonstrate expertise in financial workflows that reduce errors by up to 25% (Intuit QuickBooks, Certification Benefits).
          </p>
          <p>
            Certified in QuickBooks Online, Google AI Essentials, Project Management, and Accounting Systems, I believe in continuous learning and in work that strengthens businesses, institutions, and communities. My approach is guided by a commitment to clarity over complexity, systems over shortcuts, and outcomes over noise—ensuring that every engagement builds trust and delivers measurable value. As noted by the World Bank, structured systems in operations can enhance productivity and reduce costs significantly (World Bank, 'Operational Efficiency in Development Projects').
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