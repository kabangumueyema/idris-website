import Seo from "../components/Seo";
import ExpertiseSection from "../components/Expertise";

export default function ExpertisePage() {
  return (
    <>
      <Seo
        title="Expertise | Finance, Operations, and Digital Growth"
        description="Discover Idris Kabangu's expertise in finance, operations, and digital growth through a structured systems-based consulting approach."
        path="/expertise"
      />
      <h1 className="sr-only">Expertise in Finance, Operations, and Digital Growth</h1>
      <ExpertiseSection />
    </>
  );
}
