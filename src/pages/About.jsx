import { Helmet } from "react-helmet-async";
import AboutSection from "../components/About";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Idris Kabangu</title>
        <meta
          name="description"
          content="Learn about Idris Kabangu's cross-disciplinary career in business systems, finance, operations, and digital growth strategy."
        />
      </Helmet>
      <AboutSection />
    </>
  );
}
