import React from 'react'
import { Helmet } from 'react-helmet-async'

// Enhanced SEO component for pages with comprehensive metadata and structured data
export default function SEO({
  title = 'LUZORION — Medical documentation that works for your practice.',
  description = 'Accurate scribing, coding, and billing services that free clinicians to focus on patients — delivered securely and on time.',
  image = '/images/logo.png',
  url,
  type = 'website',
  noindex = false,
  keywords = '',
  author = 'LUZORION',
  publishedTime,
  modifiedTime,
  articleSection = '',
  structuredData = null
}) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://luzorion.com'
  const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : origin)
  const absoluteImage = image?.startsWith('http') ? image : `${origin}${image}`

  // Organization structured data
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LUZORION',
    url: origin,
    logo: `${origin}/images/logo.png`,
    sameAs: [
      'https://www.linkedin.com/company/luzorion',
      'https://twitter.com/luzorion'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-317-457-6497',
      contactType: 'Customer Service',
      email: 'luzorionhealth@gmail.com',
      areaServed: 'US',
      availableLanguage: 'en'
    },
    description: 'LUZORION is a leading healthcare documentation company providing medical scribing, coding, and billing services.',
    brand: 'LUZORION'
  }

  // Website structured data
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

  // Article/BlogPosting structured data (if applicable)
  let articleJsonLd = null
  if (type === 'article') {
    articleJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      author: {
        '@type': 'Organization',
        name: 'LUZORION'
      },
      publisher: {
        '@type': 'Organization',
        name: 'LUZORION',
        logo: {
          '@type': 'ImageObject',
          url: `${origin}/images/logo.png`
        }
      },
      datePublished: publishedTime || new Date().toISOString(),
      dateModified: modifiedTime || new Date().toISOString(),
      image: absoluteImage,
      articleSection: articleSection
    }
  }

  return (
    <>
      <Helmet prioritizeSeoTags>
        {/* Primary meta tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords || 'medical scribing, medical coding, medical billing, healthcare documentation, HIPAA compliant, RCM, EHR optimization'} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Robots and indexing */}
        {noindex && <meta name="robots" content="noindex, nofollow" />}
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="LUZORION" />
        <meta property="og:image" content={absoluteImage} />
        <meta property="og:image:alt" content="LUZORION Healthcare Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteImage} />
        <meta name="twitter:image:alt" content="LUZORION Healthcare Services" />
        
        {/* Mobile and PWA */}
        <meta name="theme-color" content="#8FA63A" />
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webSiteJsonLd)}</script>
        {articleJsonLd && <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>}
        {structuredData && <script type="application/ld+json">{JSON.stringify(structuredData)}</script>}
      </Helmet>
    </>
  )
}


