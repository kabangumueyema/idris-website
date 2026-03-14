import Seo from "../components/Seo";
import AboutSection from "../components/About";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Idris Kabangu | Professional Background"
        description="Explore the professional background of Idris Kabangu across business systems, finance, operations, and digital growth strategy."
        path="/about"
      />
      <h1 className="sr-only">Idris Kabangu Professional Background</h1>
      <AboutSection />
    </>
  );
}
