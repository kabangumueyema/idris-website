import Seo from "../components/Seo";
import HomeSection from "../components/Home";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Idris Kabangu | Business Systems & Strategy"
        description="Idris Kabangu helps organizations move from confusion to clarity by building systems, improving execution, and making growth more disciplined."
        path="/"
      />
      <h1 className="sr-only">Idris Kabangu Business Systems and Strategy</h1>
      <HomeSection />
    </>
  );
}
