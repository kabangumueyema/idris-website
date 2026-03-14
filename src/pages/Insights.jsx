import Seo from "../components/Seo";
import InsightsSection from "../components/Insights";

export default function InsightsPage() {
  return (
    <>
      <Seo
        title="Insights and Articles | Business Systems and Strategy"
        description="Read insights and articles on business systems and strategy, including digital transformation, finance, and operational excellence."
        path="/insights"
      />
      <h1 className="sr-only">Insights and Articles on Business Systems and Strategy</h1>
      <InsightsSection />
    </>
  );
}
