'use client'

import { reviews } from "@/constants/mock"

export default function ReviewSchema() {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) /
    reviews.length

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'نام محصول یا مقاله',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviews.length,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
      },
      datePublished: r.datePublished,
      reviewBody: r.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: '5',
        worstRating: '1',
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
