import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { insights } from "../src/data/index.js";

const SITE_URL = "https://www.ikabangu.com";
const FEED_PATH = "/insights.xml";

const insightDates = {
  "/insights/future-of-work-ai-augmented-decision-making": "Sat, 14 Mar 2026 00:00:00 GMT",
  "/insights/digital-transformation-financial-services": "Sat, 14 Mar 2026 00:00:00 GMT",
  "/insights/sustainable-business-models-beyond-esg": "Sat, 14 Mar 2026 00:00:00 GMT",
  "/insights/operational-excellence-in-the-digital-age": "Sat, 14 Mar 2026 00:00:00 GMT",
};

const lastBuildDate = "Sun, 15 Mar 2026 00:00:00 GMT";

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toAbsoluteUrl(link) {
  if (link.startsWith("http://") || link.startsWith("https://")) {
    return link;
  }
  return `${SITE_URL}${link}`;
}

const feedItems = insights
  .filter((insight) => typeof insight.link === "string" && insight.link.startsWith("/insights/"))
  .map((insight) => {
    const link = toAbsoluteUrl(insight.link);
    const pubDate = insightDates[insight.link] || "Sat, 14 Mar 2026 00:00:00 GMT";

    return `    <item>\n      <title>${escapeXml(insight.title)}</title>\n      <link>${escapeXml(link)}</link>\n      <guid isPermaLink="true">${escapeXml(link)}</guid>\n      <pubDate>${pubDate}</pubDate>\n      <category>${escapeXml(insight.category || "Insights")}</category>\n      <description>${escapeXml(insight.description || "")}</description>\n    </item>`;
  })
  .join("\n\n");

const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<?xml-stylesheet type="text/xsl" href="/insights.xsl"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Idris Kabangu Insights</title>
    <link>${SITE_URL}/insights</link>
    <description>Long-form insights on business systems, strategy, finance, operations, and digital growth.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}${FEED_PATH}" rel="self" type="application/rss+xml" />

${feedItems}
  </channel>
</rss>
`;

const outputPath = resolve(process.cwd(), "public", "insights.xml");
writeFileSync(outputPath, xml, "utf8");
console.log("Generated public/insights.xml from src/data/index.js");
