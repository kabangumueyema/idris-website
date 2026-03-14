import { Helmet } from "react-helmet-async";
import AboutSection from "../components/About";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Idris Kabangu | Professional Background</title>
        <meta
          name="description"
          content="Explore the professional background of Idris Kabangu across business systems, finance, operations, and digital growth strategy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Idris Kabangu | Professional Background" />
        <meta property="og:description" content="Explore the professional background of Idris Kabangu across business systems, finance, operations, and digital growth strategy." />
        <meta property="og:url" content="https://www.ikabangu.com/about" />
        <meta property="og:image" content="https://www.ikabangu.com/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Idris Kabangu | Professional Background" />
        <meta name="twitter:description" content="Explore the professional background of Idris Kabangu across business systems, finance, operations, and digital growth strategy." />
        <meta name="twitter:image" content="https://www.ikabangu.com/preview.jpg" />
      </Helmet>
      <h1 className="sr-only">Idris Kabangu Professional Background</h1>
      <AboutSection />
    </>
  );
}
