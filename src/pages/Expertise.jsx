import { Helmet } from "react-helmet-async";
import ExpertiseSection from "../components/Expertise";

export default function ExpertisePage() {
  return (
    <>
      <Helmet>
        <title>Expertise | Finance, Operations, and Digital Growth</title>
        <meta
          name="description"
          content="Discover Idris Kabangu's expertise in finance, operations, and digital growth through a structured systems-based consulting approach."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Expertise | Finance, Operations, and Digital Growth" />
        <meta property="og:description" content="Discover Idris Kabangu's expertise in finance, operations, and digital growth through a structured systems-based consulting approach." />
        <meta property="og:url" content="https://www.ikabangu.com/expertise" />
        <meta property="og:image" content="https://www.ikabangu.com/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expertise | Finance, Operations, and Digital Growth" />
        <meta name="twitter:description" content="Discover Idris Kabangu's expertise in finance, operations, and digital growth through a structured systems-based consulting approach." />
        <meta name="twitter:image" content="https://www.ikabangu.com/preview.jpg" />
      </Helmet>
      <h1 className="sr-only">Expertise in Finance, Operations, and Digital Growth</h1>
      <ExpertiseSection />
    </>
  );
}
