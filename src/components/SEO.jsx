import React from 'react'
import { Helmet } from 'react-helmet-async'

// Enhanced SEO component for pages with comprehensive metadata and structured data
export default function SEO({
  title = 'Hillside Dhaka Pharmacy — Your Local Pharmacy in Jamaica, NY',
  description = 'Community pharmacy serving Jamaica, NY. Fast prescriptions, free delivery, immunizations & health services. MON-SAT 10AM-7PM.',
  image = '/images/logo.png',
  url,
  type = 'website',
  noindex = false,
  keywords = '',
  author = 'Hillside Dhaka Pharmacy',
  publishedTime,
  modifiedTime,
  articleSection = '',
  structuredData = null
}) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://hillsidedhakapharma.com'
  const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : origin)
  const absoluteImage = image?.startsWith('http') ? image : `${origin}${image}`

  // Organization structured data
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    name: 'Hillside Dhaka Pharmacy',
    url: origin,
    logo: `${origin}/images/logo.png`,
    image: `${origin}/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17014 Hillside Ave',
      addressLocality: 'Jamaica',
      addressRegion: 'NY',
      postalCode: '11432',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.708',
      longitude: '-73.795'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-718-526-2300',
      contactType: 'Customer Service',
      email: 'dhakapharma17014@gmail.com',
      areaServed: 'Jamaica, NY',
      availableLanguage: ['en', 'bn']
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00'
      }
    ],
    description: 'Community pharmacy serving Jamaica, NY. Prescription filling, immunizations, health services, free delivery.',
    priceRange: '$$'
  }

  // Website structured data
  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hillside Dhaka Pharmacy',
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
        name: 'Hillside Dhaka Pharmacy'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Hillside Dhaka Pharmacy',
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
        <meta name="keywords" content={keywords || 'pharmacy, prescription filling, immunizations, vaccines, health services, free delivery, Jamaica NY, Bengali pharmacy, local pharmacy'} />
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
        <meta property="og:site_name" content="Hillside Dhaka Pharmacy" />
        <meta property="og:image" content={absoluteImage} />
        <meta property="og:image:alt" content="Hillside Dhaka Pharmacy - Your Local Pharmacy" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteImage} />
        <meta name="twitter:image:alt" content="Hillside Dhaka Pharmacy - Your Local Pharmacy" />
        
        {/* Mobile and PWA */}
        <meta name="theme-color" content="#2D8659" />
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webSiteJsonLd)}</script>
        {articleJsonLd && <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>}
        {structuredData && <script type="application/ld+json">{JSON.stringify(structuredData)}</script>}
      </Helmet>
    </>
  )
}


