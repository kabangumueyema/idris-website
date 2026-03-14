import { Link } from "react-router-dom";
import { insights } from "../data/index.js";

export default function Insights() {
  const isInternalLink = (url) => url.startsWith("/");

  return (
    <section id="insights" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Insights</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950">Thought leadership on business systems and digital growth.</h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {insights.map((insight) => (
          <div key={insight.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            {insight.category && (
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{insight.category}</p>
            )}
            <h3 className="text-xl font-semibold text-slate-950">{insight.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{insight.description}</p>
            {isInternalLink(insight.link) ? (
              <Link to={insight.link} className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                Read article &rarr;
              </Link>
            ) : (
              <a
                href={insight.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Read more &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}