import React from 'react'
import { Helmet } from 'react-helmet-async'

// SEO component for pages. Ensure app is wrapped with <HelmetProvider>.
export default function SEO({
  title = 'LUZORION — Medical documentation that works for your practice.',
  description = 'Accurate scribing, coding, and billing services that free clinicians to focus on patients — delivered securely and on time.',
  image = '/images/logo.png',
  url,
  type = 'website',
  noindex = false
}) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://example.com'
  const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : origin)
  const absoluteImage = image?.startsWith('http') ? image : `${origin}${image}`

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LUZORION',
    url: origin,
    logo: `${origin}/images/logo.png`,
    sameAs: []
  }

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LUZORION',
    url: origin,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${origin}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name="description" content={description} />
        {noindex && <meta name="robots" content="noindex, nofollow" />}
        <link rel="canonical" href={pageUrl} />
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="LUZORION" />
        <meta property="og:image" content={absoluteImage} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteImage} />
        {/* PWA/Theme */}
        <meta name="theme-color" content="#0ea5e9" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webSiteJsonLd)}</script>
      </Helmet>
    </>
  )
}


