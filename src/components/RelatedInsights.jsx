import { Link } from "react-router-dom";
import { insights } from "../data/index.js";

export default function RelatedInsights({ currentPath }) {
  const related = insights
    .filter((insight) => insight.link.startsWith("/") && insight.link !== currentPath)
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-lg font-semibold text-slate-950">Related insights</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {related.map((insight) => (
          <article key={insight.link} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {insight.category && (
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{insight.category}</p>
            )}
            <h3 className="mt-2 text-base font-semibold leading-6 text-slate-950">{insight.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{insight.description}</p>
            <Link to={insight.link} className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
              Read article &rarr;
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
