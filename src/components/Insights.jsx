export default function Insights() {
  const insights = [
    {
      title: "The Future of Work: AI-Augmented Decision Making",
      description:
        "How AI is transforming business operations, with practical frameworks for implementation. Drawing from McKinsey's research on AI adoption patterns.",
      link: "https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/the-future-of-work",
    },
    {
      title: "Digital Transformation in Financial Services",
      description:
        "Key trends reshaping banking and fintech, including embedded finance and platform economics. Based on World Economic Forum insights.",
      link: "https://www.weforum.org/agenda/2023/01/digital-transformation-financial-services/",
    },
    {
      title: "Sustainable Business Models: Beyond ESG",
      description:
        "Building resilient organizations through integrated sustainability strategies. Informed by FASB's evolving standards on ESG reporting.",
      link: "https://www.fasb.org/page/PageContent?pageId=/standards-authority/standards-in-progress.html",
    },
    {
      title: "Operational Excellence in the Digital Age",
      description:
        "Leveraging technology for process optimization and competitive advantage. Supported by research from Harvard Business Review.",
      link: "https://hbr.org/topic/operations",
    },
  ];

  return (
    <section id="insights" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Insights</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950">Thought leadership on business systems and digital growth.</h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {insights.map((insight) => (
          <div key={insight.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">{insight.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{insight.description}</p>
            <a
              href={insight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}