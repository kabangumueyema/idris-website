<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title><xsl:value-of select="rss/channel/title" /> RSS Feed</title>
        <style>
          body {
            margin: 0;
            font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
            background: #f8fafc;
            color: #0f172a;
            line-height: 1.6;
          }
          .wrap {
            max-width: 900px;
            margin: 0 auto;
            padding: 32px 20px 56px;
          }
          .header {
            border: 1px solid #e2e8f0;
            background: #ffffff;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);
          }
          h1 {
            margin: 0;
            font-size: 28px;
            line-height: 1.2;
          }
          .desc {
            margin: 12px 0 0;
            color: #475569;
          }
          .meta {
            margin-top: 10px;
            font-size: 14px;
            color: #64748b;
          }
          .items {
            margin-top: 24px;
            display: grid;
            gap: 14px;
          }
          .item {
            border: 1px solid #e2e8f0;
            background: #ffffff;
            border-radius: 14px;
            padding: 16px;
          }
          .category {
            margin: 0 0 6px;
            font-size: 12px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #2563eb;
            font-weight: 600;
          }
          .title {
            margin: 0;
            font-size: 19px;
          }
          .title a {
            color: #0f172a;
            text-decoration: none;
          }
          .title a:hover {
            text-decoration: underline;
          }
          .date {
            margin: 6px 0 0;
            font-size: 13px;
            color: #64748b;
          }
          .summary {
            margin: 10px 0 0;
            color: #334155;
          }
          .raw {
            margin-top: 24px;
            font-size: 14px;
            color: #64748b;
          }
          .raw a {
            color: #2563eb;
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <section class="header">
            <h1><xsl:value-of select="rss/channel/title" /></h1>
            <p class="desc"><xsl:value-of select="rss/channel/description" /></p>
            <p class="meta">
              Last build:
              <xsl:text> </xsl:text>
              <xsl:value-of select="rss/channel/lastBuildDate" />
            </p>
          </section>

          <section class="items">
            <xsl:for-each select="rss/channel/item">
              <article class="item">
                <p class="category"><xsl:value-of select="category" /></p>
                <h2 class="title">
                  <a href="{link}" target="_blank" rel="noopener noreferrer">
                    <xsl:value-of select="title" />
                  </a>
                </h2>
                <p class="date"><xsl:value-of select="pubDate" /></p>
                <p class="summary"><xsl:value-of select="description" /></p>
              </article>
            </xsl:for-each>
          </section>

          <p class="raw">
            RSS URL:
            <xsl:text> </xsl:text>
            <a href="{rss/channel/atom:link/@href}"><xsl:value-of select="rss/channel/atom:link/@href" /></a>
          </p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
