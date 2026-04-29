import React from 'react';

export default function LocalBusinessSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Hadramout Restaurant',
    description: "Toledo's Authentic Yemeni & Middle Eastern Cuisine. Experience Mandi, Haneeth, Fahsah, Zurbian, and more!",
    servesCuisine: ['Yemeni', 'Middle Eastern', 'Halal'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toledo',
      addressRegion: 'OH',
      addressCountry: 'US'
    },
    url: 'https://hadramouttoledo.com'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
