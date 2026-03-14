import { Helmet } from "react-helmet-async";
import HomeSection from "../components/Home";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Idris Kabangu | Business Systems & Strategy</title>
        <meta
          name="description"
          content="Idris Kabangu helps organizations move from confusion to clarity by building systems, improving execution, and making growth more disciplined."
        />
      </Helmet>
      <HomeSection />
    </>
  );
}
