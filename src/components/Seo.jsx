import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.ikabangu.com";
const DEFAULT_IMAGE = `${SITE_URL}/preview.jpg`;

export default function Seo({ title, description, path = "/", structuredData = null }) {
  const canonicalUrl = `${SITE_URL}${path}`;
  const schemaItems = Array.isArray(structuredData)
    ? structuredData.filter(Boolean)
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Idris Kabangu" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {schemaItems.map((schemaItem, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
}
