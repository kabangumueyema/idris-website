import { Helmet } from "react-helmet-async";
import WorkSection from "../components/Work";

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Selected Work | Idris Kabangu</title>
        <meta
          name="description"
          content="Review selected consulting and strategy work by Idris Kabangu focused on business systems, valuation, and growth execution."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Selected Work | Idris Kabangu" />
        <meta property="og:description" content="Review selected consulting and strategy work by Idris Kabangu focused on business systems, valuation, and growth execution." />
        <meta property="og:url" content="https://www.ikabangu.com/projects" />
        <meta property="og:image" content="https://www.ikabangu.com/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Selected Work | Idris Kabangu" />
        <meta name="twitter:description" content="Review selected consulting and strategy work by Idris Kabangu focused on business systems, valuation, and growth execution." />
        <meta name="twitter:image" content="https://www.ikabangu.com/preview.jpg" />
      </Helmet>
      <h1 className="sr-only">Selected Work by Idris Kabangu</h1>
      <WorkSection />
    </>
  );
}
