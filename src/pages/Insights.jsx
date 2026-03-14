import { Helmet } from "react-helmet-async";
import InsightsSection from "../components/Insights";

export default function InsightsPage() {
  return (
    <>
      <Helmet>
        <title>Insights and Articles | Business Systems and Strategy</title>
        <meta
          name="description"
          content="Read insights and articles on business systems and strategy, including digital transformation, finance, and operational excellence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Insights and Articles | Business Systems and Strategy" />
        <meta property="og:description" content="Read insights and articles on business systems and strategy, including digital transformation, finance, and operational excellence." />
        <meta property="og:url" content="https://www.ikabangu.com/insights" />
        <meta property="og:image" content="https://www.ikabangu.com/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insights and Articles | Business Systems and Strategy" />
        <meta name="twitter:description" content="Read insights and articles on business systems and strategy, including digital transformation, finance, and operational excellence." />
        <meta name="twitter:image" content="https://www.ikabangu.com/preview.jpg" />
      </Helmet>
      <h1 className="sr-only">Insights and Articles on Business Systems and Strategy</h1>
      <InsightsSection />
    </>
  );
}
