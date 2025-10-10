import React from 'react'
import { Helmet } from 'react-helmet-async'

// Lightweight SEO component. Wrap with <HelmetProvider> in main if needed.
export default function SEO({ title = 'YourBrand — Healthcare Documentation & RCM', description = 'Medical scribing, coding, billing, and analytics services that free clinicians to focus on care.' }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'YourBrand',
    url: 'https://example.com',
    logo: 'https://example.com/logo.png',
    sameAs: []
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
    </>
  )
}


