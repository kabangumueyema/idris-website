import Seo from "../components/Seo";
import WorkSection from "../components/Work";

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Selected Work | Idris Kabangu"
        description="Review selected consulting and strategy work by Idris Kabangu focused on business systems, valuation, and growth execution."
        path="/projects"
      />
      <h1 className="sr-only">Selected Work by Idris Kabangu</h1>
      <WorkSection />
    </>
  );
}
