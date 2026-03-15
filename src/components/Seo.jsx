import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.ikabangu.com";
const DEFAULT_IMAGE = `${SITE_URL}/preview.jpg`;

export default function Seo({
  title,
  description,
  path = "/",
  structuredData = null,
  type = "website",
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}) {
  const canonicalUrl = `${SITE_URL}${path}`;
  const schemaItems = Array.isArray(structuredData)
    ? structuredData.filter(Boolean)
    : structuredData
      ? [structuredData]
      : [];
  const normalizedTags = Array.isArray(tags) ? tags.filter(Boolean) : [];
  const isArticle = type === "article";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" type="application/rss+xml" title="Idris Kabangu Insights RSS" href={`${SITE_URL}/insights.xml`} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Idris Kabangu" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:locale" content="en_US" />

      {isArticle && author && <meta name="author" content={author} />}
      {isArticle && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {isArticle && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {isArticle && author && <meta property="article:author" content={author} />}
      {isArticle && section && <meta property="article:section" content={section} />}
      {isArticle && normalizedTags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

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
