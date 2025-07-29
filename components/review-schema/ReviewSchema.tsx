'use client'

import { Testimonial } from "../../screens/client-stories/types";
import SchemaJsonLd from "../schema-json-ld";

export default function ReviewSchema({ testimonials }: Testimonial) {
  const averageRating =
    testimonials.reduce((sum, review) => sum + review.rating, 0) /
    testimonials.length

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Evimistanbul group',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: testimonials.length,
    },
    review: testimonials.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.name,
      },
      datePublished: r.datePublished,
      reviewBody: r.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: '5',
        worstRating: '1',
      },
    })),
  }

  return (
    <SchemaJsonLd data={schema} />
  )
}
