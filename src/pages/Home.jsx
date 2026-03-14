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
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Idris Kabangu | Business Systems & Strategy" />
        <meta property="og:description" content="Idris Kabangu helps organizations move from confusion to clarity by building systems, improving execution, and making growth more disciplined." />
        <meta property="og:url" content="https://www.ikabangu.com/" />
        <meta property="og:image" content="https://www.ikabangu.com/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Idris Kabangu | Business Systems & Strategy" />
        <meta name="twitter:description" content="Idris Kabangu helps organizations move from confusion to clarity by building systems, improving execution, and making growth more disciplined." />
        <meta name="twitter:image" content="https://www.ikabangu.com/preview.jpg" />
      </Helmet>
      <h1 className="sr-only">Idris Kabangu Business Systems and Strategy</h1>
      <HomeSection />
    </>
  );
}
