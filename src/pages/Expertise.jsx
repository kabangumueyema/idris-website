import { Helmet } from "react-helmet-async";
import ExpertiseSection from "../components/Expertise";

export default function ExpertisePage() {
  return (
    <>
      <Helmet>
        <title>Expertise | Idris Kabangu</title>
        <meta
          name="description"
          content="Explore Idris Kabangu's structured expertise across systems thinking, financial clarity, digital authority, and leadership through service."
        />
      </Helmet>
      <ExpertiseSection />
    </>
  );
}
