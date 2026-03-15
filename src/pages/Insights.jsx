import Seo from "../components/Seo";
import InsightsSection from "../components/Insights";
import { insights } from "../data/index.js";

const insightsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Insights and Articles | Business Systems and Strategy",
  url: "https://www.ikabangu.com/insights",
  about: "Business systems, strategy, digital transformation, operations, and finance insights",
};

const insightsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Idris Kabangu Insights",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: insights.length,
  itemListElement: insights.map((insight, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "BlogPosting",
      headline: insight.title,
      description: insight.description,
      articleSection: insight.category,
      url: `https://www.ikabangu.com${insight.link}`,
    },
  })),
};

export default function InsightsPage() {
  return (
    <>
      <Seo
        title="Insights and Articles | Business Systems and Strategy"
        description="Read insights and articles on business systems and strategy, including digital transformation, finance, and operational excellence."
        path="/insights"
        structuredData={[insightsPageSchema, insightsItemListSchema]}
      />
      <h1 className="sr-only">Insights and Articles on Business Systems and Strategy</h1>
      <InsightsSection />
    </>
  );
}
