import { Helmet } from "react-helmet-async";
import InsightsSection from "../components/Insights";

export default function InsightsPage() {
  return (
    <>
      <Helmet>
        <title>Insights | Idris Kabangu</title>
        <meta
          name="description"
          content="Thought leadership from Idris Kabangu on business systems, digital transformation, financial clarity, and operational excellence."
        />
      </Helmet>
      <InsightsSection />
    </>
  );
}
