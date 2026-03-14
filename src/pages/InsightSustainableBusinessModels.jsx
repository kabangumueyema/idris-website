import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export const articleMeta = {
  slug: "sustainable-business-models-beyond-esg",
  title: "Sustainable Business Models: Beyond ESG",
  category: "Sustainability Strategy",
  excerpt:
    "Sustainability is no longer a branding layer added after strategy. The most resilient organizations are embedding sustainability into operating models, capital allocation, governance, and reporting discipline.",
  updatedAt: "March 2026",
  seoTitle: "Sustainable Business Models: Beyond ESG | Idris Kabangu",
  metaDescription:
    "An evidence-based analysis of sustainable business models beyond ESG, with practical implications for strategy, operations, governance, finance, and reporting discipline.",
};

export default function InsightSustainableBusinessModelsPage() {
  return (
    <>
      <Seo
        title={articleMeta.seoTitle}
        description={articleMeta.metaDescription}
        path="/insights/sustainable-business-models-beyond-esg"
      />

      <article className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <header className="border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{articleMeta.category}</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">{articleMeta.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{articleMeta.excerpt}</p>
          <p className="mt-4 text-sm font-medium text-slate-500">Updated March 2026</p>
        </header>

        <div className="mt-10 space-y-8 text-base leading-8 text-slate-700">
          <p>Sustainability is no longer just a disclosure topic. It is now a business model design question.</p>

          <p>
            The strongest organizations are no longer treating sustainability as a communications layer added after
            strategy. They are integrating it into operations, capital allocation, governance, and reporting
            discipline.
          </p>

          <p>
            That shift matters because investors, regulators, and capital markets increasingly expect
            sustainability-related information to be clear, decision-useful, and connected to enterprise value.
          </p>

          <p>
            A sustainable business model is an operating and financial system that can absorb sustainability-related
            risks, adapt to regulatory and market shifts, and continue creating value over time.
          </p>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Key Takeaways</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Sustainable business models go beyond ESG messaging and embed sustainability into strategy, operations,
                finance, governance, and reporting.
              </li>
              <li>IFRS S1 and IFRS S2 established a global baseline for sustainability-related financial disclosures.</li>
              <li>
                FASB is relevant to sustainability-linked financial reporting, but it is not the main global ESG
                standard-setter.
              </li>
              <li>
                Resilient organizations translate sustainability pressure into operating decisions, cost visibility,
                governance, and capital discipline.
              </li>
              <li>
                The goal is no longer just disclosure. The goal is a business model that remains credible, investable,
                and adaptable over time.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Why this discussion has changed</h2>
            <p className="mt-4">For many organizations, ESG began as a reporting exercise.</p>
            <p className="mt-4">
              A sustainability page was added to the website. A few metrics were published. A narrative was developed
              for regulators, investors, or the public.
            </p>
            <p className="mt-4">
              But that model is becoming weaker because sustainability expectations are no longer confined to
              reputation. They increasingly shape capital access, risk management, supply resilience, governance
              expectations, and financial disclosure.
            </p>
            <p className="mt-4">
              In June 2023, the International Sustainability Standards Board issued IFRS S1 and IFRS S2 to create a
              global baseline for sustainability-related financial disclosures. IFRS S1 covers sustainability-related
              risks and opportunities more broadly, while IFRS S2 focuses specifically on climate-related disclosures.
              These standards were designed to improve comparability and decision-usefulness for investors and capital
              markets.
            </p>
            <p className="mt-4">That changes the real leadership question.</p>
            <p className="mt-4">The question is no longer: "Do we have an ESG story?"</p>
            <p className="mt-4">
              The better question is: "Do we have a business model that can remain credible, investable, and
              operationally resilient as sustainability pressures become strategic, financial, and reportable?"
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">ESG is not the strategy</h2>
            <p className="mt-4">
              One of the most common mistakes organizations make is treating ESG as a separate function instead of a
              strategic design issue.
            </p>
            <p className="mt-4">When this happens, sustainability gets isolated:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>in communications instead of operations</li>
              <li>in annual reports instead of management decisions</li>
              <li>in reputation management instead of capital discipline</li>
            </ul>
            <p className="mt-4">That separation creates fragility.</p>
            <p className="mt-4">
              A resilient organization does not only disclose sustainability-related ambitions. It also understands how
              sustainability-related risks and opportunities affect its cost structure, supply reliability, governance
              responsibilities, risk exposure, and long-term competitiveness.
            </p>
            <p className="mt-4">
              Sustainability becomes meaningful when leaders can explain, with operational and financial clarity:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>where exposure sits</li>
              <li>how management responds</li>
              <li>what trade-offs are being made</li>
              <li>and how those choices affect future performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">What beyond ESG really means</h2>
            <p className="mt-4">Moving beyond ESG does not mean abandoning sustainability. It means integrating it.</p>
            <p className="mt-4">Strong organizations build sustainability into five connected layers of the business.</p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">1. Strategy</h3>
            <p className="mt-3">
              Leadership identifies which sustainability-related risks and opportunities could materially affect growth,
              margins, market access, financing conditions, or competitive position.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">2. Operations</h3>
            <p className="mt-3">
              Management translates those risks into sourcing decisions, process design, energy use, logistics,
              technology choices, workforce planning, and resilience planning.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">3. Finance</h3>
            <p className="mt-3">
              Finance teams connect sustainability-related developments to forecasting, cost visibility, capital
              allocation, impairment risk, margin pressure, internal controls, and disclosure quality.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">4. Governance</h3>
            <p className="mt-3">Boards and executives define oversight, accountability, escalation processes, and decision rights.</p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">5. Reporting</h3>
            <p className="mt-3">
              The company develops systems that can produce decision-useful, consistent, and supportable information
              for investors and other stakeholders.
            </p>

            <p className="mt-4">This is why sustainability maturity is increasingly a systems question, not just a messaging question.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Why reporting discipline now matters more</h2>
            <p className="mt-4">The reporting environment has become more structured.</p>
            <p className="mt-4">
              IFRS S1 and IFRS S2 are important because they move sustainability disclosure toward a more
              investor-focused, globally comparable model. They build on earlier initiatives and help create a common
              language for discussing how sustainability-related risks and opportunities affect a company&apos;s prospects.
            </p>
            <p className="mt-4">
              This does not mean every jurisdiction has the same rules. But it does mean the direction of travel is
              clearer: sustainability-related disclosure is becoming more structured, more financially connected, and
              more important to decision-makers.
            </p>
            <p className="mt-4">
              By mid-2025, the IFRS Foundation said that 36 jurisdictions had adopted, otherwise used, or were
              finalizing steps toward introducing ISSB Standards into their regulatory frameworks. That scale of
              adoption matters because it shows that sustainability disclosure is no longer a niche reporting issue.
              It is becoming part of mainstream market infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">What FASB changes and what it does not</h2>
            <p className="mt-4">It is important to be precise here.</p>
            <p className="mt-4">
              FASB is not the main global framework for broad sustainability disclosure. That role is more closely
              associated with the ISSB&apos;s IFRS S1 and IFRS S2.
            </p>
            <p className="mt-4">
              However, FASB remains highly relevant where sustainability issues affect financial reporting quality,
              expense visibility, credits, obligations, and accounting treatment.
            </p>
            <p className="mt-4">
              For example, in November 2024, FASB issued ASU 2024-03 on Disaggregation of Income Statement Expenses.
              This update requires public business entities to disclose more granular information about certain expense
              categories.
            </p>
            <p className="mt-4">
              That is not a broad ESG framework, but it is highly relevant to sustainability strategy because many
              sustainability-related decisions ultimately affect cost structure, operating visibility, and financial
              analysis.
            </p>
            <p className="mt-4">
              FASB also issued a proposed update in December 2024 on Environmental Credits and Environmental Credit
              Obligations (Topic 818). That proposal addresses the accounting treatment of environmental credits and
              related obligations.
            </p>
            <p className="mt-4">
              Importantly, it does not attempt to measure a company&apos;s actual greenhouse gas emissions or replace
              broader sustainability disclosure frameworks. Instead, it focuses on how these items may be recognized,
              measured, presented, and disclosed in financial statements.
            </p>
            <p className="mt-4">This distinction matters.</p>
            <p className="mt-4">
              A company can make sustainability commitments publicly, but if those commitments affect credits,
              obligations, cost recognition, disclosures, or internal controls, they become business model issues, not
              just narrative issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">The U.S. context remains unsettled</h2>
            <p className="mt-4">The U.S. picture remains more fragmented.</p>
            <p className="mt-4">
              In March 2024, the SEC adopted climate-related disclosure rules. But the rules were later stayed during
              litigation, and in March 2025 the SEC voted to end its defense of those rules. That means the broader
              U.S. climate disclosure environment remains unsettled at the federal securities-rule level.
            </p>
            <p className="mt-4">For leaders, the practical lesson is not to wait for perfect regulatory clarity.</p>
            <p className="mt-4">
              Even when the regulatory environment is uneven, investors, lenders, customers, and boards still expect
              more disciplined sustainability-related information. Waiting for complete certainty can leave
              organizations operationally unprepared.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">The real operating question</h2>
            <p className="mt-4">A resilient organization does not ask only, "What should we disclose?"</p>
            <p className="mt-4">It asks:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Which sustainability-related risks can change our cost base?</li>
              <li>Which dependencies can disrupt delivery or supply?</li>
              <li>Which claims require underlying operational proof?</li>
              <li>Which commitments create governance, measurement, or accounting consequences?</li>
              <li>Which sustainability topics actually affect enterprise resilience?</li>
            </ul>
            <p className="mt-4">That is the point where sustainability becomes strategic.</p>
            <p className="mt-4">If climate volatility affects sourcing, sustainability becomes an operations issue.</p>
            <p className="mt-4">If customer expectations affect product design or procurement, sustainability becomes a commercial issue.</p>
            <p className="mt-4">If environmental credits affect liabilities, disclosures, or control systems, sustainability becomes a finance and reporting issue.</p>
            <p className="mt-4">If public commitments require oversight and accountability, sustainability becomes a governance issue.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">What resilient organizations do differently</h2>
            <p className="mt-4">Organizations that move beyond surface-level ESG usually do five things well.</p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">They define materiality in business terms</h3>
            <p className="mt-3">
              They do not begin with a long list of abstract topics. They focus on the few sustainability-related issues
              most likely to affect performance, resilience, or access to capital.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">They connect sustainability to cost and value drivers</h3>
            <p className="mt-3">
              They understand where sustainability pressure affects margins, supply chains, asset use, compliance
              costs, financing conditions, or long-term competitiveness.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">They build reporting capability early</h3>
            <p className="mt-3">
              They do not wait until external pressure forces them to discover that their systems cannot produce
              reliable information.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">They align narrative with operational reality</h3>
            <p className="mt-3">
              Their public statements can be supported by underlying processes, controls, governance, and measurable
              decisions.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">They treat sustainability as a design discipline</h3>
            <p className="mt-3">
              They redesign incentives, planning systems, reporting flows, and decision processes rather than simply
              adding new language to external disclosures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">What Leaders Should Do Next</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6">
              <li>Identify the sustainability-related risks and opportunities most likely to affect enterprise value.</li>
              <li>Map how those issues affect operations, cost structure, supply resilience, and capital decisions.</li>
              <li>Clarify governance by assigning ownership, oversight, and escalation responsibilities.</li>
              <li>Build internal reporting processes before external pressure intensifies.</li>
              <li>Align public sustainability claims with measurable internal systems and evidence.</li>
              <li>Review whether sustainability-related decisions create accounting, disclosure, or control implications.</li>
              <li>Update the business model, not just the narrative.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Final perspective</h2>
            <p className="mt-4">The future of sustainability in business is not a thicker ESG report.</p>
            <p className="mt-4">It is a better-designed organization.</p>
            <p className="mt-4">One that links strategy, operations, finance, governance, and reporting.</p>
            <p className="mt-4">One that can absorb pressure without losing coherence.</p>
            <p className="mt-4">
              One that can explain, with clarity, how sustainability-related risks and opportunities affect
              performance, decisions, and long-term resilience.
            </p>
            <p className="mt-4">That is what it means to go beyond ESG.</p>
            <p className="mt-4">And increasingly, that is what resilient business models will require.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Sources</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-blue-700">
              <li>
                <a
                  href="https://www.ifrs.org/news-and-events/news/2023/06/issb-issues-ifrs-s1-ifrs-s2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 hover:underline"
                >
                  IFRS Foundation - ISSB issues IFRS S1 and IFRS S2 (June 2023)
                </a>
              </li>
              <li>
                <a
                  href="https://www.ifrs.org/projects/implementation/issb-standards-adoption/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 hover:underline"
                >
                  IFRS Foundation - ISSB Standards adoption and jurisdiction progress updates
                </a>
              </li>
              <li>
                <a
                  href="https://www.fasb.org/page/PageContent?pageId=/news-releases/fasb-issues-accounting-standards-update-disaggregation-of-income-statement-expenses.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 hover:underline"
                >
                  FASB - ASU 2024-03 Disaggregation of Income Statement Expenses
                </a>
              </li>
              <li>
                <a
                  href="https://www.fasb.org/page/PageContent?pageId=/projects/recently-completed/environmental-credits-and-environmental-credit-obligations.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 hover:underline"
                >
                  FASB - Proposed ASU on Environmental Credits and Environmental Credit Obligations (Topic 818)
                </a>
              </li>
              <li>
                <a
                  href="https://www.sec.gov/newsroom/press-releases/2025-60"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 hover:underline"
                >
                  SEC - March 27, 2025 press release on ending defense of climate disclosure rules
                </a>
              </li>
            </ul>
          </section>
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-lg font-semibold text-slate-950">Author note</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            "Idris Kabangu writes at the intersection of finance, operations, and digital growth. His work focuses on
            helping organizations improve clarity, strengthen systems, and make better strategic decisions through
            structured analysis."
          </p>
        </section>

        <div className="mt-10">
          <Link to="/insights" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
            Back to Insights &rarr;
          </Link>
        </div>
      </article>
    </>
  );
}
