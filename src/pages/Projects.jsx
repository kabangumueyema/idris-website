import { Helmet } from "react-helmet-async";
import WorkSection from "../components/Work";

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects | Idris Kabangu</title>
        <meta
          name="description"
          content="Representative consulting and strategy projects by Idris Kabangu, shaped by systems thinking and data-driven decision making."
        />
      </Helmet>
      <WorkSection />
    </>
  );
}
